# TCGWeb

This repository contains minimal placeholder setups for the frontend and backend projects.

Both projects require an internet connection to install their dependencies.

## Environment variables

Copy `./.env.example` to `.env.local` and fill in values for your setup before
starting the apps.

## Frontend

The `frontend` folder contains a bare-bones Next.js 14 app. Install dependencies and run the dev server:

```bash
cd frontend
npm install
npm run dev
```

## Backend

The `backend` folder contains a placeholder Express server. Replace with MedusaJS when installing dependencies. Backend configuration lives in `backend/medusa-config.js`. To run:

```bash
cd backend
npm install
npm start
```

## Notes

These projects are only skeletons because the environment lacks internet access. To scaffold full Next.js and Medusa projects, run the appropriate `npx create-next-app` and `npx create-medusa-app` commands in an environment with internet connectivity.

## License

This project is licensed under the [MIT License](LICENSE).
