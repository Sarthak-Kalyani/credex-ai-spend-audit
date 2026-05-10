import Navbar from "@/components/Navbar";
import AuditForm from "@/components/AuditForm";
import {
  BadgeDollarSign,
  Brain,
  ShieldCheck,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        {/* HERO SECTION */}
        <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-green-400">
              AI Spend Audit
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
              Stop Overpaying
              <br />
              For AI Tools
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400 md:text-xl">
              Discover hidden savings across ChatGPT, Claude, Cursor,
              Copilot, Gemini, and more in under 2 minutes.
            </p>

            <button className="rounded-2xl bg-green-500 px-8 py-4 text-lg font-semibold text-black transition hover:scale-105">
              Audit My AI Stack
            </button>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <BadgeDollarSign className="mb-4 h-12 w-12 text-green-400" />

              <h2 className="mb-3 text-2xl font-bold">
                Find Hidden Savings
              </h2>

              <p className="text-gray-400">
                Detect overpriced AI subscriptions and unnecessary team plans instantly.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <Brain className="mb-4 h-12 w-12 text-green-400" />

              <h2 className="mb-3 text-2xl font-bold">
                AI-Powered Recommendations
              </h2>

              <p className="text-gray-400">
                Get smart optimization suggestions tailored to your team usage.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <ShieldCheck className="mb-4 h-12 w-12 text-green-400" />

              <h2 className="mb-3 text-2xl font-bold">
                Private & Secure
              </h2>

              <p className="text-gray-400">
                Your audit data stays protected and never requires account login.
              </p>
            </div>

          </div>
        </section>
        <AuditForm />
      </main>
    </>
  );
}