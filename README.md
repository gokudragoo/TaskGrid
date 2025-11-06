# TaskGrid

A decentralized freelance marketplace with built-in trust, escrow, and proof-of-work NFTs — powered by Polygon.

## What it does
- Trustless escrow for client-freelancer payments
- AI-aligned profile/resume input (manual now; AI later)
- Proof-of-Work NFTs (server placeholder) for verified work history
- Role-based UX: Freelancer vs Job Poster
- Wallet connect placeholder

## How it works
1. Choose a role on Home (Freelancer or Job Poster)
2. Complete onboarding:
   - Freelancer: name, email, age, education, expected salary, skills, about, resume text, profile picture, wallet connect
   - Job Poster: name, email, company/DAO, what you do, what you want, wallet connect
3. Redirects:
   - Freelancer → Find Work (browse, filter, view details, apply with personalized message)
   - Job Poster → Post Job (create job with category, budget, deadline, skills)
4. Dashboard shows activity, active jobs, and mock stats

Note: Email-to-role is enforced on the client using localStorage (one email cannot register both roles).

## Why it’s useful
- Reduces platform fees; near-instant payments
- Transparent work history via NFTs (future on-chain integration)
- Secure escrow to reduce disputes

## Tech
- Frontend: React + Vite + TypeScript, ShadCN UI, Wouter
- Backend: Express + Drizzle ORM
- Chain: Polygon (contracts draft included, not wired yet)

## Local development
- Install: `npm install`
- Run dev server: `npm run dev`

## Roadmap (short)
- Replace localStorage auth with backend user model (email + role)
- Connect real wallet provider (MetaMask/WalletConnect)
- Integrate escrow contract on Polygon testnet
- AI resume generation + AI job matching


