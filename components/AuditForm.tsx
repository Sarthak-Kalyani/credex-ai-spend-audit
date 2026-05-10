"use client";

import { useEffect, useState } from "react";
import { generateAudit } from "@/lib/audit-engine";

export default function AuditForm() {
  const [tool, setTool] = useState("");
  const [plan, setPlan] = useState("");
  const [monthlySpend, setMonthlySpend] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [useCase, setUseCase] = useState("");

  const [result, setResult] = useState<any>(null);

  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  // LOAD SAVED DATA
  useEffect(() => {
    const savedData = localStorage.getItem("audit-form");

    if (savedData) {
      const parsedData = JSON.parse(savedData);

      setTool(parsedData.tool || "");
      setPlan(parsedData.plan || "");
      setMonthlySpend(parsedData.monthlySpend || "");
      setTeamSize(parsedData.teamSize || "");
      setUseCase(parsedData.useCase || "");
    }
  }, []);

  // SAVE FORM DATA
  useEffect(() => {
    const formData = {
      tool,
      plan,
      monthlySpend,
      teamSize,
      useCase,
    };

    localStorage.setItem(
      "audit-form",
      JSON.stringify(formData)
    );
  }, [tool, plan, monthlySpend, teamSize, useCase]);

  // GENERATE AUDIT
  const handleAudit = async () => {

    setLoading(true);

    const audit = generateAudit(
      tool,
      Number(teamSize)
    );

    setResult(audit);

    try {

      const response = await fetch("/api/summary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tool,
          teamSize,
          savings: audit.savings,
          recommendation: audit.recommendation,
        }),
      });

      const data = await response.json();

      setSummary(data.summary);

    } catch (error) {

      setSummary(
        "Your AI stack shows potential optimization opportunities that may reduce unnecessary operational costs."
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-green-400">
            Audit Engine
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Run Your AI Spend Audit
          </h2>
        </div>

        <div className="grid gap-6">

          <div>
            <label className="mb-2 block text-sm text-gray-400">
              AI Tool
            </label>

            <select
              value={tool}
              onChange={(e) => setTool(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black p-4 text-white outline-none transition focus:border-green-400"
            >
              <option value="">Select Tool</option>
              <option>ChatGPT</option>
              <option>Claude</option>
              <option>Cursor</option>
              <option>GitHub Copilot</option>
              <option>Gemini</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Current Plan
            </label>

            <input
              type="text"
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
              placeholder="Example: ChatGPT Team"
              className="w-full rounded-2xl border border-white/10 bg-black p-4 text-white outline-none transition focus:border-green-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Monthly Spend ($)
            </label>

            <input
              type="number"
              value={monthlySpend}
              onChange={(e) => setMonthlySpend(e.target.value)}
              placeholder="200"
              className="w-full rounded-2xl border border-white/10 bg-black p-4 text-white outline-none transition focus:border-green-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Team Size
            </label>

            <input
              type="number"
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
              placeholder="5"
              className="w-full rounded-2xl border border-white/10 bg-black p-4 text-white outline-none transition focus:border-green-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Primary Use Case
            </label>

            <select
              value={useCase}
              onChange={(e) => setUseCase(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black p-4 text-white outline-none transition focus:border-green-400"
            >
              <option value="">Select Use Case</option>
              <option>Coding</option>
              <option>Writing</option>
              <option>Research</option>
              <option>Data Analysis</option>
              <option>Mixed</option>
            </select>
          </div>

          <button
            onClick={handleAudit}
            className="mt-4 rounded-2xl bg-green-500 px-8 py-4 text-lg font-bold text-black transition hover:scale-105 hover:bg-green-400"
          >
            {loading ? "Generating..." : "Generate Audit"}
          </button>

          {result && (
            <div className="mt-8 rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-black p-8">

              <div className="mb-6 flex items-center justify-between">

                <h3 className="text-3xl font-bold">
                  Audit Result
                </h3>

                <span className="rounded-full bg-green-500 px-4 py-2 text-sm font-bold text-black">
                  {result.risk} Risk
                </span>

              </div>

              <div className="grid gap-4 md:grid-cols-2">

                <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                  <p className="mb-2 text-sm text-gray-400">
                    Recommendation
                  </p>

                  <h4 className="text-xl font-bold text-green-400">
                    {result.recommendation}
                  </h4>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                  <p className="mb-2 text-sm text-gray-400">
                    Estimated Monthly Savings
                  </p>

                  <h4 className="text-3xl font-bold text-green-400">
                    ${result.savings}
                  </h4>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                  <p className="mb-2 text-sm text-gray-400">
                    Annual Savings
                  </p>

                  <h4 className="text-3xl font-bold text-green-400">
                    ${result.savings * 12}
                  </h4>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                  <p className="mb-2 text-sm text-gray-400">
                    Optimization Insight
                  </p>

                  <p className="text-gray-300">
                    {result.reason}
                  </p>
                </div>

              </div>

              {/* AI SUMMARY */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-6">

                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-green-400">
                  AI Generated Summary
                </p>

                <p className="leading-7 text-gray-300">
                  {summary}
                </p>

              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}