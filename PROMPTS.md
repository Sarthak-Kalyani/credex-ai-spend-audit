# AI Prompts

## Audit Summary Prompt

```txt
Generate a short professional AI spend audit summary.

Tool: {tool}
Team Size: {teamSize}
Estimated Savings: ${savings}
Recommendation: {recommendation}

Keep it under 100 words.
Sound like a SaaS audit platform.
```

---

# Prompt Design Goals

- concise outputs
- professional tone
- startup SaaS style
- actionable recommendations

---

# Fallback Strategy

When OpenAI requests fail:
- graceful fallback summary is returned
- application remains functional
- UX remains uninterrupted

---

# Future Improvements

Potential improvements:
- contextual prompts
- multi-step reasoning
- benchmarking prompts
- personalized recommendations