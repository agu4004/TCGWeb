You are ChatGPT Codex. Generate TypeScript / React code (Next.js 14 + Tailwind) 
and a small Express (or Medusa) back-end that implements the following flow.

################################################################################
HIGH-LEVEL APP FLOW
################################################################################
1. On first visit render **HomePage** (`/`):
   • Immediately check `isLoggedIn()` (JWT in cookie / localStorage).
   • IF not logged in → redirect to `/login`.
   • IF logged in:
        • Fetch `GET /me` → returns `{ role: 'user' | 'admin' }`
        • Route user to:
            – `/dashboard` (regular user)
            – `/admin`     (admin panel)         

2. ROLE CAPABILITIES
   ──────────────────
   USER
     a. **Buy**: add product to cart (`POST /cart/add`) → checkout (`POST /checkout`)
     b. **Sell**: create own store if none (`POST /stores`) then 
        list products (`POST /stores/:id/products`)
   
   ADMIN
     • Has all USER abilities
     • PLUS:
         – Approve consignment products (`PATCH /admin/products/:id/approve`)
         – Ban user (`PATCH /admin/users/:id/ban`)

3. PRODUCT PAGE (`/products/[id]`)
   • Show product name, set, image.
   • Under it render a **SellerTable**:
        ┌─────────────────────────────┐
        │ Seller │ Condition │ Price │  AddToCart │
        └─────────────────────────────┘
   • Each row gets an **Add-to-Cart** button that calls `POST /cart/add` with 
     `{ sellerId, productId }`.

################################################################################
COMPONENT / PAGE LIST
################################################################################
Frontend (Next.js 14 - Pages Router):

| Route               | Component                  | Auth |
|---------------------|----------------------------|------|
| `/login`            | `<LoginForm />`            | ✗    |
| `/dashboard`        | `<UserDashboard />`        | ✓    |
| `/dashboard/store`  | `<StoreManager />`         | ✓    |
| `/products/[id]`    | `<ProductPage />`          | open |
| `/cart`             | `<CartPage />`             | ✓    |
| `/admin`            | `<AdminDashboard />`       | admin|
| `/admin/products`   | `<AdminProductQueue />`    | admin|
| `/admin/users`      | `<AdminUserTable />`       | admin|

Reusable components:
* `HeaderNav`, `AuthGuard`, `SellerTable`, `AddToCartButton`, `ProductCard`, 
  `StoreForm`, `ProductForm`, `AdminApprovalModal`, `BanUserDialog`.

################################################################################
API ENDPOINTS
################################################################################
(Method, Path, Role, Handler)

AUTH
- POST `/auth/login`          open     -> returns JWT
- POST `/auth/register`       open
- GET  `/me`                  auth     -> { id, role }

BUY FLOW
- POST `/cart/add`            user
- GET  `/cart`                user
- POST `/checkout`            user

SELL FLOW
- POST `/stores`              user       (# create store)
- GET  `/stores/:id/products` user, open
- POST `/stores/:id/products` user (owner)

ADMIN FLOW
- GET  `/admin/products/pending`       admin
- PATCH `/admin/products/:id/approve`  admin
- PATCH `/admin/users/:id/ban`         admin

################################################################################
DATABASE SCHEMA (Prisma-style)
################################################################################
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  password  String
  role      Role     @default(USER)
  banned    Boolean  @default(false)
  stores    Store[]
  orders    Order[]
}

model Store {
  id        String   @id @default(uuid())
  ownerId   String
  name      String
  products  Product[]
  owner     User     @relation(fields:[ownerId], references:[id])
}

model Product {
  id        String   @id @default(uuid())
  title     String
  price     Int      // cents
  status    ProductStatus @default(PENDING)
  storeId   String
  store     Store    @relation(fields:[storeId], references:[id])
}

model CartItem {
  id        String   @id @default(uuid())
  productId String
  userId    String
  quantity  Int
}

model Order {
  id        String   @id @default(uuid())
  userId    String
  total     Int
  status    OrderStatus @default(UNPAID)
}

enum Role           { USER ADMIN }
enum ProductStatus  { PENDING ACTIVE HOLD REJECTED }
enum OrderStatus    { UNPAID PAID CANCELLED }

################################################################################
LOGIC NOTES
################################################################################
• On checkout: update each product.status → HOLD; after successful payment → SOLD
  else auto-release (cron 30 min).
• Admin queue lists `ProductStatus = PENDING`, click Approve → ACTIVE.
• Banned user -> middleware denies any POST/PUT.

################################################################################
DELIVERABLES
################################################################################
1. **Frontend** (`apps/web`):
   - Pages/components with role-based guards.
   - SWR/React-Query hooks calling the endpoints.

2. **Backend** (`apps/api`):
   - Express + Prisma (or Medusa) implementing endpoints above.
   - JWT middleware (`role` claim) + password bcrypt.
   - Seed script with 1 admin, 1 seller, 3 products.

3. **README** with `pnpm install && pnpm -r dev` instructions.

Generate the full project structure with the above specification.
Return complete code files and brief explanations in Markdown.