# Testing Documentation

## Testing Framework
- Vitest

---

# Automated Tests

The following automated tests were implemented:

| Test | Purpose |
|---|---|
| ChatGPT Recommendation Test | Verify recommendation generation |
| Claude Savings Test | Verify savings calculations |
| Cursor Risk Test | Verify risk classification |
| Copilot Savings Test | Verify recommendation logic |
| Default Fallback Test | Verify default behavior |

---

# Test File

```txt
tests/audit-engine.test.ts
```

---

# Running Tests

```bash
npm test
```

---

# CI/CD Testing

GitHub Actions automatically runs tests on:
- push events
- pull requests

Workflow file:
```txt
.github/workflows/ci.yml
```

---

# Manual Testing

The following manual flows were tested:

## Audit Flow
- Generate audit
- Validate recommendations
- Validate savings calculations

## Lead Capture
- Save audit report
- Verify database insertion

## Shareable Reports
- Open public audit URL
- Validate dynamic route rendering

## Deployment
- Production deployment validation on Vercel

---

# Error Handling Validation

Tested:
- OpenAI API quota failures
- fallback summary behavior
- invalid route handling
- empty form validation

---

# Conclusion

The application passed:
- functional testing
- integration testing
- deployment testing
- basic edge-case validation