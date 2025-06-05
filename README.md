# TCGWeb

This repository contains placeholder setups for a web frontend and API backend.

Both projects require an internet connection to install their dependencies.

## Environment variables

Copy `./.env.example` to `.env.local` and fill in values for your setup before
starting the apps.

## Getting Started

Install all dependencies and start both the API and Web apps:

```bash
pnpm install
pnpm -r dev
```

## Frontend

The `apps/web` folder contains a bare-bones Next.js **15** app (the prompt mentions 14, but this template already uses version 15). Install dependencies and run the dev server:

```bash
cd apps/web
pnpm install
pnpm run dev
```

## Backend

The `apps/api` folder contains a minimal Express server. Replace with MedusaJS when installing dependencies. Backend configuration lives in `apps/api/medusa-config.js`. To run:

```bash
cd apps/api
pnpm install
pnpm start
```

Run `node seed.js` inside `apps/api` to generate a `seed.json` file with demo users and products.

The server exposes a simple `GET /me` endpoint that returns a JSON object with a
`role` field. This is intended for frontend login checks.

## Notes

These projects are only skeletons because the environment lacks internet access. To scaffold full Next.js and Medusa projects, run the appropriate `npx create-next-app` and `npx create-medusa-app` commands in an environment with internet connectivity.

## License

This project is licensed under the [MIT License](LICENSE).
