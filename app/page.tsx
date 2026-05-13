export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          AI-Powered Churn Analysis
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Understand Exactly Why{' '}
          <span className="text-[#58a6ff]">Subscribers Cancel</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-10">
          Ingest cancellation feedback via API or CSV, let AI categorize every exit interview, and get actionable retention strategies — automatically.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Reducing Churn — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {['AI Categorization', 'CSV & API Ingestion', 'Pattern Detection', 'Retention Playbooks', 'Analytics Dashboard', 'OpenAI Powered'].map((f) => (
            <span key={f} className="px-4 py-2 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-2xl border border-[#58a6ff] bg-[#161b22] p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$15</p>
          <p className="text-[#6e7681] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited exit interviews',
              'AI churn categorization',
              'CSV & REST API ingestion',
              'Retention strategy suggestions',
              'Analytics dashboard',
              'Email digest reports',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="rounded-xl bg-[#161b22] border border-[#30363d] p-6">
            <h3 className="font-semibold text-white mb-2">How does the AI categorize cancellation reasons?</h3>
            <p className="text-sm text-[#8b949e]">We send each exit interview response to OpenAI, which classifies it into categories like pricing, missing features, poor UX, or competitor switch — then surfaces trends across all responses.</p>
          </div>
          <div className="rounded-xl bg-[#161b22] border border-[#30363d] p-6">
            <h3 className="font-semibold text-white mb-2">Can I import existing cancellation data?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Upload a CSV of past exit interviews or push data in real-time via our REST API. Both methods are included in the Pro plan.</p>
          </div>
          <div className="rounded-xl bg-[#161b22] border border-[#30363d] p-6">
            <h3 className="font-semibold text-white mb-2">What retention strategies does it suggest?</h3>
            <p className="text-sm text-[#8b949e]">Based on detected churn patterns, the dashboard recommends targeted playbooks — such as offering discounts for price-sensitive churners or scheduling calls for feature-gap churners.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-sm text-[#6e7681]">
        © {new Date().getFullYear()} Churn Analyzer. All rights reserved.
      </footer>
    </main>
  )
}
