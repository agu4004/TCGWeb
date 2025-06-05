Trading Card Marketplace – MVP Design Document

Last updated: 03 Jun 2025

1. Vision & Scope

A web marketplace where a shop can sell its own inventory and allow community members to consign cards. Buyers browse, place orders, and items they reserve enter a hold state to avoid double‑selling. Sellers must apply; admins approve listings and monitor operations.

Goal for MVP (≈ 3 sprints / 3 weeks): deliver a production‑ready core with login, catalogue, consignment workflow, checkout & order‑hold logic, minimal but functional UI/UX.

2. User Personas & Roles

Visitor: browse catalogue, view prices.

Buyer (user): register / login, place orders, view “My Orders”.

Seller: apply to become seller, list consignment products pending approval.

Admin: CRUD shop inventory, approve sellers & products, manage orders, view dashboard.

3. Core Use‑Cases

Catalogue Browsing – filter by game, set, rarity…

Account Registration & Login – email+password via Supabase Auth.

Shop Inventory Listing – created directly by Admin.

Seller Application – user submits KYC → admin reviews.

Consignment Listing – seller drafts product → admin approves.

Add‑to‑Cart & Checkout – on checkout, items set status = hold; release if unpaid after 30 min.

Admin Dashboard – tables + charts (sales, pending approvals).

4. Functional Requirements

Product sources: shop or consignment (field source).

Product state machine: draft → pending → active → hold → sold_out / rejected.

Order state machine: unpaid → paid → cancelled → fulfilled.

Hold timeout scheduler releases items & cancels unpaid orders.

Price lookup optional: fetch market price from TCGplayer API using productId mapping.

5. Non‑Functional Requirements

Performance: catalogue first contentful paint < 1.5 s (Vercel edge cache).

Data integrity: operations that modify inventory execute inside DB transactions.

Security (MVP): bcrypt‑hashed passwords, HTTPS, JWT session cookies, role‑based access checks.

Internationalisation: UI text stored in i18n JSON, default vi‑VN.

6. Information Architecture / Data Model

users(id, email, password_hash, role, created_at)
products(id, title, description, source, seller_id, status, price_cents,
         qty_available, created_at)
product_images(id, product_id, url, alt)
orders(id, buyer_id, status, total_cents, created_at)
order_items(id, order_id, product_id, qty, price_cents)
seller_applications(id, user_id, kyc_url, status, created_at)
audit_log(id, action, actor_id, target_table, target_id, ts)
price_history(id, product_id, date, market_price)

7. System Architecture

Frontend: Next.js 14 (Pages Router) + Tailwind CSS + Shadcn/UI; SWR for data fetching; Framer Motion for micro‑interactions.

Backend API: MedusaJS 2.x (Node/Express) with PostgreSQL driver, deployed as Vercel Serverless Functions.

Database: PostgreSQL on Supabase (free tier for dev); row‑level security via policies.

Search: Meilisearch (Docker) with medusa‑meilisearch plugin for full‑text & faceted filters.

Payments: Stripe in test mode, webhook to mark orders paid.

Scheduler / Jobs: Medusa cron or Vercel Cron to run releaseHold() every minute.

CI/CD: GitHub Actions (lint, test, deploy preview) → Vercel.

8. External Integrations

TCGplayer API: optional real‑time market price via pricing/product/{id} (requires client‑credentials key).

Fabrary dataset: card metadata → mapping to tcgplayerProductId (open‑source; stored locally).

SendGrid: transactional emails (order confirmation, hold expiring) – free tier 100 emails/day.

9. UX & Flow Diagrams (textual)

Seller Apply Flow: Visitor → Sign up → Submit seller form (status pending) → Admin approves → Role updates to seller.

Consignment Listing Flow: Seller creates product (pending) → Admin approves (active) → Visible in catalogue.

Checkout Flow: Buyer adds items → POST /orders → API in transaction sets products hold, inserts order. Stripe payment updates status paid. Scheduler cancels if unpaid after TTL.

10. Sprint Roadmap (≈ 1 week mỗi sprint)

Sprint 1: Auth, core DB schema, shop catalogue UI + CRUD.

Sprint 2: Seller application, consignment queue, admin approval UI.

Sprint 3: Checkout, order‑hold logic, Stripe stub, admin dashboard & cron.

11. AI‑Assisted Development Plan

Wireframes & Visual Design: Google Stitch, Figma AI → initial Figma frames.

UI‑to‑React conversion: Vercel v0, TeleportHQ → .tsx components with Tailwind.

Backend scaffolding & tests: Claude 3 Opus, Gemini Code Assist → controllers, migrations, Jest tests.

Marketing assets: Adobe Firefly, GPT‑4o image generation → banners, OG images.

Prompts & outputs are archived under /ai-history/ for traceability.

12. Risks & Mitigations

TCGplayer key unavailable: can’t fetch live prices → use static fallback or affiliate partner key.

Hold logic race‑condition: risk of overselling → wrap order creation in DB transaction with row‑level lock.

AI‑generated code inconsistency: may introduce bugs → enforce ESLint, unit‑tests, and code review.

13. Roadmap Beyond MVP (stretch)

Deck builder & mass‑entry import (CSV / text).

Mobile PWA: offline caching, push price alerts.

Seller payout module & fee calculation.

Full audit & hardened security (rate‑limit, OAuth 2, 2FA).

International marketplace support, multi‑currency.
