import { supabase } from "@/lib/supabase";

export default async function AuditPage({
  params,
}: {
  params: Promise<{ auditId: string }>;
}) {

  const { auditId } = await params;

  const { data } = await supabase
    .from("leads")
    .select("*")
    .eq("public_id", auditId)
    .single();

  if (!data) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <h1 className="text-4xl font-bold">
          Audit Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">

      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-10">

        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-green-400">
          Public Audit Report
        </p>

        <h1 className="mb-10 text-5xl font-bold">
          AI Spend Audit
        </h1>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">

            <p className="mb-2 text-sm text-gray-400">
              AI Tool
            </p>

            <h2 className="text-2xl font-bold">
              {data.tool}
            </h2>

          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">

            <p className="mb-2 text-sm text-gray-400">
              Current Plan
            </p>

            <h2 className="text-2xl font-bold">
              {data.plan}
            </h2>

          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">

            <p className="mb-2 text-sm text-gray-400">
              Recommendation
            </p>

            <h2 className="text-2xl font-bold text-green-400">
              {data.recommendation}
            </h2>

          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">

            <p className="mb-2 text-sm text-gray-400">
              Estimated Savings
            </p>

            <h2 className="text-4xl font-bold text-green-400">
              ${data.savings}
            </h2>

          </div>

        </div>

      </div>

    </main>
  );
}