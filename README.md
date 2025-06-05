# Trading Card Marketplace

A web marketplace for trading cards with shop inventory and community consignment features.

## Tech Stack

- Frontend: Next.js 14 (Pages Router)
- Backend: MedusaJS 2.x
- Database: PostgreSQL (Supabase)
- Search: Meilisearch
- Styling: Tailwind CSS + Shadcn/UI
- Payments: Stripe
- Email: SendGrid

## Prerequisites

- Node.js 18+
- pnpm
- PostgreSQL
- Redis
- Meilisearch
- Supabase account
- Stripe account
- SendGrid account

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd trading-card-marketplace
```

2. Install frontend dependencies:
```bash
pnpm install
```

3. Install backend dependencies:
```bash
cd backend
pnpm install
```

4. Set up environment variables:
- Copy `.env.example` to `.env`
- Fill in all required environment variables

5. Set up Supabase:
- Create a new project in Supabase
- Get your project URL and anon key
- Update the `.env` file with your Supabase credentials

6. Set up Medusa backend:
```bash
cd backend
pnpm medusa migrations run
pnpm medusa seed --seed-file=data/seed.js
```

7. Start the development servers:

Frontend:
```bash
pnpm dev
```

Backend:
```bash
cd backend
pnpm dev
```

8. Access the applications:
- Frontend: http://localhost:3000
- Backend: http://localhost:9000
- Admin: http://localhost:9000/app

## Development

- Frontend code is in the root directory
- Backend code is in the `backend` directory
- Database migrations are in `backend/migrations`
- Seed data is in `backend/data/seed.js`

## Testing

Frontend tests:
```bash
pnpm test
```

Backend tests:
```bash
cd backend
pnpm test
```

## Deployment

The application is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Set up environment variables in Vercel dashboard
3. Deploy the frontend
4. Deploy the backend as serverless functions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT 