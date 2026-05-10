# Credex AI Spend Audit

AI-powered SaaS platform that helps teams analyze and optimize their AI subscription spending.

Live Demo:
https://credex-ai-spend-audit-ov9s.vercel.app/

---

## Features

- AI spend audit engine
- AI-generated optimization summaries
- Savings recommendations
- Shareable public audit reports
- Lead capture system
- Supabase database integration
- Automated testing
- GitHub Actions CI pipeline
- Responsive modern UI
- Open Graph metadata support

---

## Tech Stack

### Frontend
- Next.js 16
- React
- TypeScript
- Tailwind CSS

### Backend
- Next.js API Routes
- Supabase

### Database
- PostgreSQL (Supabase)

### Deployment
- Vercel

### Testing
- Vitest

---

## Installation

```bash
git clone https://github.com/Sarthak-Kalyani/credex-ai-spend-audit.git

cd credex-ai-spend-audit

npm install
```

---

## Environment Variables

Create `.env.local`

```env
OPENAI_API_KEY=your_key

NEXT_PUBLIC_SUPABASE_URL=your_url

NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

---

## Run Development Server

```bash
npm run dev
```

---

## Run Tests

```bash
npm test
```

---

## Project Structure

```txt
app/
components/
lib/
tests/
.github/workflows/
```

---

## Core Features

### Audit Engine
Analyzes AI tool usage and generates optimization recommendations.

### Lead Capture
Stores audit leads and report metadata inside Supabase.

### Shareable URLs
Public audit reports can be shared through dynamic URLs.

### AI Summaries
OpenAI-powered summaries with graceful fallback handling.

---

## CI/CD

GitHub Actions automatically runs tests on every push.

---

## Deployment

Hosted on Vercel.

---

## Author

Sarthak Kalyani