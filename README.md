# TaskGrid - Web3 Freelance Marketplace

<div align="center">
  <img src="client/public/logo.svg" width="120" height="120" alt="TaskGrid Logo">
  <h1>TaskGrid</h1>
  <p><strong>A decentralized freelance marketplace with built-in trust, escrow, and proof-of-work NFTs — powered by Polygon</strong></p>
  
  [![Built on Polygon](https://img.shields.io/badge/Built%20on-Polygon-8247E5?style=for-the-badge&logo=polygon&logoColor=white)](https://polygon.technology)
  [![Smart Contract](https://img.shields.io/badge/Smart%20Contract-Deployed-success?style=for-the-badge&logo=ethereum&logoColor=white)](https://polygonscan.com/address/0xE1517864005fae94974A56BEc337F4aA63f60867)
</div>

## 🧩 The Problem We're Solving
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
 

TaskGridEscrow deployed at: 0xE1517864005fae94974A56BEc337F4aA63f60867