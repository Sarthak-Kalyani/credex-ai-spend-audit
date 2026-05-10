# Architecture Overview

## System Overview

Credex AI Spend Audit is a full-stack SaaS platform designed to help teams optimize AI subscription spending through automated audits, recommendation logic, and shareable reports.

The application uses a modern serverless architecture built with Next.js, Supabase, and Vercel.

---

# High-Level Architecture

```txt
Frontend (Next.js + React)
        ↓
API Routes (Next.js Backend)
        ↓
Audit Engine Logic
        ↓
Supabase Database
        ↓
Public Shareable Reports
```

---

# Frontend Architecture

## Framework
- Next.js 16
- React
- TypeScript
- Tailwind CSS

## Responsibilities
- Render audit form UI
- Handle user interactions
- Display audit results
- Trigger API calls
- Persist local form state
- Display shareable reports

---

# Backend Architecture

## Next.js API Routes

### `/api/summary`
Handles AI-generated audit summaries using OpenAI APIs.

Responsibilities:
- Receive audit data
- Generate optimization summary
- Return AI response
- Handle fallback behavior gracefully

---

# Database Layer

## Supabase PostgreSQL

The database stores:
- Lead information
- Audit metadata
- Optimization recommendations
- Savings estimates
- Public share IDs

### Table: `leads`

Core fields:
- email
- company
- role
- tool
- plan
- team_size
- recommendation
- savings
- public_id

---

# Audit Engine

The audit engine is implemented as reusable business logic inside:

```txt
lib/audit-engine.ts
```

Responsibilities:
- Analyze AI tooling usage
- Estimate optimization opportunities
- Generate recommendations
- Calculate savings
- Assign risk levels

---

# Shareable Public Reports

Dynamic routes are implemented using:

```txt
app/audit/[auditId]/page.tsx
```

Each saved audit receives:
- unique UUID
- public URL
- database lookup support

Example:
```txt
/audit/uuid
```

---

# State Management

The application uses:
- React state hooks
- localStorage persistence

No external state management library was required due to the project's limited complexity.

---

# Deployment Architecture

## Hosting
- Vercel

## CI/CD
- GitHub Actions

### Automated Steps
- dependency installation
- test execution
- deployment pipeline integration

---

# Security Considerations

## Implemented
- Environment variable protection
- Supabase API isolation
- Graceful API failure handling

## Planned Improvements
- authentication system
- rate limiting
- advanced validation
- role-based access control

---

# Scalability Considerations

The architecture supports future expansion:
- multi-tenant organizations
- billing systems
- PDF exports
- advanced analytics
- team collaboration
- dashboard history

---

# Design Decisions

## Why Next.js?
- Full-stack support
- API routes
- Server rendering
- Fast deployment workflow

## Why Supabase?
- Fast backend setup
- PostgreSQL support
- Easy API integration
- Real-time scalability

## Why Vercel?
- Native Next.js optimization
- Simple CI/CD workflow
- Fast deployments

---

# Conclusion

The application follows a lightweight modern SaaS architecture focused on:
- speed of development
- scalability
- maintainability
- production readiness