export function generateAudit(
  tool: string,
  teamSize: number
) {

  // CHATGPT
  if (tool === "ChatGPT") {

    if (teamSize <= 2) {
      return {
        recommendation: "Switch to ChatGPT Plus",
        savings: 30,
        risk: "Low",
        reason:
          "Small teams typically don't need ChatGPT Team pricing."
      };
    }

    if (teamSize >= 10) {
      return {
        recommendation: "Move to ChatGPT Enterprise credits",
        savings: 150,
        risk: "Medium",
        reason:
          "Enterprise credit agreements reduce large-team costs significantly."
      };
    }
  }

  // CLAUDE
  if (tool === "Claude") {

    if (teamSize <= 3) {
      return {
        recommendation: "Use Claude Pro instead of Team",
        savings: 40,
        risk: "Low",
        reason:
          "Claude Team plans become inefficient for small groups."
      };
    }

    if (teamSize >= 15) {
      return {
        recommendation: "Negotiate Anthropic enterprise pricing",
        savings: 200,
        risk: "High",
        reason:
          "Larger organizations benefit from direct enterprise agreements."
      };
    }
  }

  // CURSOR
  if (tool === "Cursor") {

    if (teamSize >= 10) {
      return {
        recommendation: "Upgrade to centralized business billing",
        savings: 120,
        risk: "Medium",
        reason:
          "Engineering teams with many seats can reduce duplicate subscriptions."
      };
    }
  }

  // COPILOT
  if (tool === "GitHub Copilot") {

    if (teamSize <= 2) {
      return {
        recommendation: "Switch to Individual plan",
        savings: 25,
        risk: "Low",
        reason:
          "Business tier features may be unnecessary for very small teams."
      };
    }
  }

  // GEMINI
  if (tool === "Gemini") {

    if (teamSize <= 3) {
      return {
        recommendation: "Use Gemini Pro",
        savings: 20,
        risk: "Low",
        reason:
          "Gemini enterprise plans are often excessive for small usage."
      };
    }
  }

  // DEFAULT
  return {
    recommendation: "Your current setup looks optimized",
    savings: 0,
    risk: "None",
    reason:
      "No major savings opportunities were detected."
  };
}