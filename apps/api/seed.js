// Simple seed script creating an admin, a seller and three products
const fs = require('fs');
const bcrypt = require('bcryptjs');

const data = {
  users: [
    { id: 1, email: 'admin@example.com', password: bcrypt.hashSync('admin', 8), role: 'admin', banned: false },
    { id: 2, email: 'seller@example.com', password: bcrypt.hashSync('seller', 8), role: 'user', banned: false }
  ],
  stores: [
    { id: 1, ownerId: 2, name: 'Demo Store' }
  ],
  products: [
    { id: 1, title: 'Charizard', price: 5000, status: 'ACTIVE', storeId: 1 },
    { id: 2, title: 'Pikachu', price: 2000, status: 'ACTIVE', storeId: 1 },
    { id: 3, title: 'Bulbasaur', price: 2500, status: 'PENDING', storeId: 1 }
  ]
};

fs.writeFileSync('seed.json', JSON.stringify(data, null, 2));
console.log('Seed data written to seed.json');
