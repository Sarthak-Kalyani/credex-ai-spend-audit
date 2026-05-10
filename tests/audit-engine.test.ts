import { describe, expect, test } from "vitest";

import { generateAudit } from "../lib/audit-engine";

describe("AI Audit Engine", () => {

  test("ChatGPT small team recommendation", () => {

    const result = generateAudit(
      "ChatGPT",
      1
    );

    expect(result.recommendation)
      .toContain("ChatGPT Plus");

  });

  test("Claude small team recommendation", () => {

    const result = generateAudit(
      "Claude",
      2
    );

    expect(result.savings)
      .toBe(40);

  });

  test("Cursor large team recommendation", () => {

    const result = generateAudit(
      "Cursor",
      15
    );

    expect(result.risk)
      .toBe("Medium");

  });

  test("Copilot small team recommendation", () => {

    const result = generateAudit(
      "GitHub Copilot",
      1
    );

    expect(result.savings)
      .toBe(25);

  });

  test("Default optimized response", () => {

    const result = generateAudit(
      "Unknown Tool",
      5
    );

    expect(result.savings)
      .toBe(0);

  });

});