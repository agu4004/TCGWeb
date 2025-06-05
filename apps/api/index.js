const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const app = express();
app.use(express.json());

const JWT_SECRET = 'secret';

// ----- In-memory data -----
let nextUserId = 1;
const users = [];
const stores = [];
const products = [];
const cartItems = [];

// seed data
function seed() {
  const admin = { id: nextUserId++, email: 'admin@example.com', password: bcrypt.hashSync('admin', 8), role: 'admin', banned: false };
  const seller = { id: nextUserId++, email: 'seller@example.com', password: bcrypt.hashSync('seller', 8), role: 'user', banned: false };
  users.push(admin, seller);
  const store = { id: 1, ownerId: seller.id, name: 'Demo Store' };
  stores.push(store);
  products.push(
    { id: 1, title: 'Charizard', price: 5000, status: 'ACTIVE', storeId: store.id },
    { id: 2, title: 'Pikachu', price: 2000, status: 'ACTIVE', storeId: store.id },
    { id: 3, title: 'Bulbasaur', price: 2500, status: 'PENDING', storeId: store.id }
  );
}
seed();

// ----- Helpers -----
function authRequired(req, res, next) {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ error: 'unauthorized' });
  const token = header.split(' ')[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const user = users.find(u => u.id === payload.userId);
    if (!user || user.banned) return res.status(403).json({ error: 'forbidden' });
    req.user = user;
    next();
  } catch {
    return res.status(401).json({ error: 'invalid token' });
  }
}

function requireRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) return res.status(403).json({ error: 'forbidden' });
    next();
  };
}

// ----- Auth -----
app.post('/auth/register', (req, res) => {
  const { email, password } = req.body;
  if (users.find(u => u.email === email)) return res.status(400).json({ error: 'exists' });
  const user = { id: nextUserId++, email, password: bcrypt.hashSync(password, 8), role: 'user', banned: false };
  users.push(user);
  res.json({ id: user.id });
});

app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user || !bcrypt.compareSync(password, user.password)) return res.status(401).json({ error: 'invalid' });
  const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET);
  res.json({ token });
});

app.get('/me', authRequired, (req, res) => {
  res.json({ id: req.user.id, role: req.user.role });
});

// ----- Cart -----
app.post('/cart/add', authRequired, (req, res) => {
  const { productId } = req.body;
  cartItems.push({ id: cartItems.length + 1, userId: req.user.id, productId, quantity: 1 });
  res.json({ ok: true });
});

app.get('/cart', authRequired, (req, res) => {
  const items = cartItems.filter(ci => ci.userId === req.user.id);
  res.json(items);
});

app.post('/checkout', authRequired, (req, res) => {
  // mark items on hold
  res.json({ message: 'checkout stub' });
});

// ----- Stores -----
app.post('/stores', authRequired, (req, res) => {
  if (stores.find(s => s.ownerId === req.user.id)) return res.status(400).json({ error: 'store exists' });
  const store = { id: stores.length + 1, ownerId: req.user.id, name: req.body.name || 'My Store' };
  stores.push(store);
  res.json(store);
});

app.get('/stores/:id/products', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const result = products.filter(p => p.storeId === id);
  res.json(result);
});

app.post('/stores/:id/products', authRequired, (req, res) => {
  const id = parseInt(req.params.id, 10);
  const store = stores.find(s => s.id === id && s.ownerId === req.user.id);
  if (!store) return res.status(403).json({ error: 'not owner' });
  const prod = { id: products.length + 1, title: req.body.title, price: req.body.price, status: 'PENDING', storeId: id };
  products.push(prod);
  res.json(prod);
});

// ----- Admin -----
app.get('/admin/products/pending', authRequired, requireRole('admin'), (req, res) => {
  res.json(products.filter(p => p.status === 'PENDING'));
});

app.patch('/admin/products/:id/approve', authRequired, requireRole('admin'), (req, res) => {
  const prod = products.find(p => p.id === parseInt(req.params.id, 10));
  if (!prod) return res.status(404).json({});
  prod.status = 'ACTIVE';
  res.json(prod);
});

app.patch('/admin/users/:id/ban', authRequired, requireRole('admin'), (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id, 10));
  if (!user) return res.status(404).json({});
  user.banned = true;
  res.json(user);
});

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`API running on ${port}`));
