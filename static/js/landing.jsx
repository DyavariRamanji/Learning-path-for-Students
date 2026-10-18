const pricingPlans = [
  {
    name: 'Free Plan',
    price: '₹0',
    description: 'Basic career guidance with limited roadmap access.',
    bullets: ['Basic career guidance', 'Limited roadmap access'],
    button: 'Start Free',
    variant: 'outline'
  },
  {
    name: 'Premium Plan',
    price: '₹999/year',
    description: 'Full personalized roadmap with skill gap analysis.',
    bullets: ['Full personalized roadmap', 'Skill gap analysis', 'Resume guidance', 'Interview preparation'],
    button: 'Upgrade to Premium',
    variant: 'primary'
  },
  {
    name: 'Pro Plan',
    price: '₹1999/year',
    description: 'All premium features plus priority recommendations.',
    bullets: ['All premium features', 'Priority recommendations', 'Advanced career insights'],
    button: 'Go Pro',
    variant: 'secondary'
  }
];

const recommendedCourses = [
  {
    title: 'AI Career Launchpad',
    price: '₹749',
    rating: 4.8,
    description: 'Step-by-step AI career roadmap with real-world projects.',
    link: '#'
  },
  {
    title: 'Resume & Interview Mastery',
    price: '₹499',
    rating: 4.9,
    description: 'Build a placement-ready profile and master interview skills.',
    link: '#'
  },
  {
    title: 'Data Skills Accelerator',
    price: '₹899',
    rating: 4.7,
    description: 'Fast-track data analytics skills with mentorship support.',
    link: '#'
  }
];

const revenueItems = [
  {
    title: 'Course commissions',
    description: 'Earn 20% from partner course enrollments and affiliate referrals.'
  },
  {
    title: 'Subscription plans',
    description: 'Recurring revenue through Free, Premium, and Pro membership tiers.'
  },
  {
    title: 'Placement partnerships',
    description: 'Collaborate with hiring networks to generate placement fees and referrals.'
  }
];

function PlanCard({ plan }) {
  const colors = {
    primary: 'border-sky-200 bg-sky-50',
    secondary: 'border-slate-200 bg-white',
    outline: 'border-slate-200 bg-white'
  };

  return (
    <div className={`rounded-[32px] border p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${colors[plan.variant]}`}>
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-sky-600">{plan.name}</p>
        <h3 className="mt-4 text-3xl font-semibold text-slate-900">{plan.price}</h3>
        <p className="mt-4 text-slate-600">{plan.description}</p>
      </div>
      <ul className="mt-6 space-y-3 text-slate-600">
        {plan.bullets.map((bullet) => (
          <li key={bullet} className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-600"><i className="fas fa-check"></i></span>
            {bullet}
          </li>
        ))}
      </ul>
      <button className={`mt-8 w-full rounded-full px-6 py-3 text-sm font-semibold transition ${plan.variant === 'primary' ? 'bg-sky-600 text-white hover:bg-sky-700' : plan.variant === 'secondary' ? 'bg-slate-900 text-white hover:bg-slate-800' : 'border border-slate-200 bg-white text-slate-900 hover:bg-slate-50'}`}>
        {plan.button}
      </button>
    </div>
  );
}

function CourseCard({ course }) {
  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h4 className="text-xl font-semibold text-slate-900">{course.title}</h4>
          <p className="mt-2 text-slate-600">{course.description}</p>
        </div>
        <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-800">{course.price}</div>
      </div>
      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-600">
          <i className="fas fa-star text-amber-400"></i>
          <span>{course.rating}</span>
        </div>
        <a href={course.link} className="inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700">Enroll Now</a>
      </div>
    </div>
  );
}

function RevenueCard({ item }) {
  return (
    <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <h4 className="text-xl font-semibold text-slate-900">{item.title}</h4>
      <p className="mt-4 text-slate-600">{item.description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[40px] bg-white p-10 shadow-2xl shadow-slate-700/10 border border-slate-200">
          <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-sky-600">CareerCompass</p>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Subscription + commission monetization for a real startup product.</h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-600">Integrate membership plans and affiliate course recommendations in a polished blue/white product landing page with modern UX.</p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="#pricing" className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-sky-700">View Pricing</a>
                <a href="#courses" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">See Courses</a>
              </div>
            </div>
            <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Monetization mix</p>
                  <h2 className="mt-3 text-3xl font-semibold text-slate-900">Subscription + 20% commission</h2>
                </div>
                <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">Startup ready</span>
              </div>
              <div className="mt-8 space-y-4 text-slate-600">
                <p>Offer a Free, Premium, and Pro plan alongside recommended courses with affiliate-style enrollments.</p>
                <p>Each course enrollment is modeled as a revenue opportunity, while subscriptions create stable recurring income.</p>
              </div>
            </div>
          </div>
        </div>

        <section id="pricing" className="mt-12">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-600">Pricing</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Choose the right plan for your students.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => <PlanCard key={plan.name} plan={plan} />)}
          </div>
        </section>

        <section id="courses" className="mt-16">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-600">Recommended Courses</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Course recommendations powered by commission modeling.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {recommendedCourses.map((course) => <CourseCard key={course.title} course={course} />)}
          </div>
        </section>

        <section id="revenue" className="mt-16 mb-10">
          <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
            <div className="grid gap-10 lg:grid-cols-[0.95fr,0.8fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-sky-600">Revenue Explanation</p>
                <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">How CareerCompass makes money.</h2>
                <p className="mt-4 text-slate-600">This product combines subscription plans, course commission, and placement partnerships to deliver a strong, startup-grade monetization story.</p>
              </div>
              <div className="grid gap-4">
                {revenueItems.map((item) => <RevenueCard key={item.title} item={item} />)}
              </div>
            </div>
          </div>
        </section>

        <section id="premium-services" className="mt-16 rounded-[40px] border border-slate-200 bg-white p-10 shadow-sm">
          <div className="grid gap-10 lg:grid-cols-[0.95fr,0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-600">Premium Career Services</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Resume Builder + Placement Guidance</h2>
              <p className="mt-4 text-slate-600">Create resumes, practice interviews, track progress, and see job opportunities with premium tools designed for career success.</p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-[28px] bg-slate-50 p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Resume Builder</p>
                <p className="mt-3 text-slate-600">Interactive resume form with live preview and download options.</p>
              </div>
              <div className="rounded-[28px] bg-slate-50 p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Placement Preparation</p>
                <p className="mt-3 text-slate-600">Interview tips, practice questions, and progress tracking.</p>
              </div>
              <a href="/premium" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Explore Premium Career Services</a>
            </div>
          </div>
        </section>

        <section id="dashboard-preview" className="rounded-[40px] border border-slate-200 bg-slate-50 p-10 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-600">Dashboard</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900">Dashboard with locked feature previews.</h2>
              <p className="mt-4 text-slate-600">Simulate a real user journey so free users see what’s locked and premium users see what they get.</p>
            </div>
            <a href="/dashboard" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">Open Dashboard</a>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[28px] bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Free users</p>
              <p className="mt-4 text-2xl font-semibold text-slate-900">Limited access</p>
            </div>
            <div className="rounded-[28px] bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Premium</p>
              <p className="mt-4 text-2xl font-semibold text-slate-900">Full career support</p>
            </div>
            <div className="rounded-[28px] bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Pro</p>
              <p className="mt-4 text-2xl font-semibold text-slate-900">Priority insights</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('careercompass-root')).render(<App />);
