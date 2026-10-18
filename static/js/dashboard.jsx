const { useState } = React;

const plans = {
  Free: {
    label: 'Free',
    price: '₹0',
    features: [
      { name: 'Basic career guidance', unlocked: true },
      { name: 'Limited roadmap access', unlocked: true },
      { name: 'Resume guidance', unlocked: false },
      { name: 'Interview preparation', unlocked: false },
      { name: 'Priority recommendations', unlocked: false }
    ]
  },

const preparationStatus = {
  Free: 28,
  Premium: 72,
  Pro: 94
};

const resumeStatus = {
  Free: 'Locked',
  Premium: 'In progress',
  Pro: 'Complete'
};

function ProgressBar({ value }) {
  return (
    <div className="h-3 rounded-full bg-slate-200 overflow-hidden">
      <div className="h-full rounded-full bg-sky-600 transition-all duration-500" style={{ width: `${value}%` }}></div>
    </div>
  );
}
  Premium: {
    label: 'Premium',
    price: '₹999/year',
    features: [
      { name: 'Basic career guidance', unlocked: true },
      { name: 'Full personalized roadmap', unlocked: true },
      { name: 'Skill gap analysis', unlocked: true },
      { name: 'Resume guidance', unlocked: true },
      { name: 'Interview preparation', unlocked: true },
      { name: 'Priority recommendations', unlocked: false }
    ]
  },
  Pro: {
    label: 'Pro',
    price: '₹1999/year',
    features: [
      { name: 'All premium features', unlocked: true },
      { name: 'Priority recommendations', unlocked: true },
      { name: 'Advanced career insights', unlocked: true },
      { name: 'Placement partnership perks', unlocked: true }
    ]
  }
};

const FeatureRow = ({ feature, active }) => (
  <div className={`flex items-center justify-between rounded-3xl px-4 py-3 transition ${active ? 'bg-slate-100 text-slate-900' : 'bg-slate-50 text-slate-500'}`}>
    <span className="font-medium">{feature.name}</span>
    <span className={`inline-flex h-9 w-9 items-center justify-center rounded-full ${active ? 'bg-sky-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
      <i className={`fas ${active ? 'fa-check' : 'fa-lock'}`}></i>
    </span>
  </div>
);

function DashboardApp() {
  const [activePlan, setActivePlan] = useState('Free');
  const plan = plans[activePlan];

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 rounded-[36px] bg-white p-8 shadow-2xl shadow-slate-700/10 glass-panel">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-600">CareerCompass Dashboard</p>
              <h1 className="mt-4 text-4xl font-semibold text-slate-900">Track subscription access and unlock premium power.</h1>
              <p className="mt-4 text-slate-600">See exactly what is locked on free plans and what opens up with Premium and Pro.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {Object.keys(plans).map((key) => (
                <button key={key} onClick={() => setActivePlan(key)} className={`rounded-full px-5 py-3 text-sm font-semibold transition ${activePlan === key ? 'bg-sky-600 text-white shadow-lg shadow-sky-500/20' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                  {key}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.35fr,0.9fr]">
          <div className="space-y-6">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Current plan</p>
                  <h2 className="mt-2 text-3xl font-semibold text-slate-900">{plan.label} Access</h2>
                </div>
                <div className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">{plan.price}</div>
              </div>
              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <FeatureRow key={feature.name} feature={feature} active={feature.unlocked} />
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900">Upgrade to unlock more</h3>
              <p className="mt-4 text-slate-600">Free users see core guidance. Premium unlocks full roadmap and interview prep. Pro opens advanced insights and priority placement support.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button onClick={() => setActivePlan('Premium')} className="inline-flex items-center justify-center rounded-3xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700">Upgrade to Premium</button>
                <button onClick={() => setActivePlan('Pro')} className="inline-flex items-center justify-center rounded-3xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50">Go Pro</button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900">Why subscribe?</h3>
              <div className="mt-6 space-y-4 text-slate-600">
                <p><strong className="text-slate-900">Premium</strong> unlocks roadmap depth, gap analysis, resume guidance, and interview coaching.</p>
                <p><strong className="text-slate-900">Pro</strong> adds priority recommendations, advanced career insights, and partner placement advantages.</p>
                <p className="text-slate-900">Every upgrade means better outcomes, faster hiring readiness, and premium member support.</p>
              </div>
            </div>
            <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.35em] text-sky-600">Monetization mix</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">Subscription + commission</h3>
              <p className="mt-4 text-slate-600">Free users can upgrade, while partner course referrals earn 20% commission on every enrollment. This dual model makes CareerCompass a strong startup product.</p>
            </div>
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.35em] text-sky-600">Premium services</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">Resume Builder & Placement Prep</h3>
              <div className="mt-6 space-y-5">
                <div className="rounded-3xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-500">Resume Builder</p>
                      <p className="mt-2 text-slate-900 font-semibold">{resumeStatus[activePlan]}</p>
                    </div>
                    <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">{activePlan}</span>
                  </div>
                </div>
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Preparation progress</p>
                  <div className="mt-3">
                    <ProgressBar value={preparationStatus[activePlan]} />
                    <p className="mt-2 text-sm text-slate-600">{preparationStatus[activePlan]}% complete</p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-sm text-slate-600">Upgrade to Premium to access full Resume Builder and Placement Guidance tools.</p>
                <a href="/premium" className="mt-4 inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700">Open Premium Services</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('careercompass-dashboard-root')).render(<DashboardApp />);
