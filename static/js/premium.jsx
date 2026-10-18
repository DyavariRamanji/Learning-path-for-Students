const { useState } = React;

const resumeTemplates = [
  { id: 'simple', name: 'Simple', subtitle: 'Clean layout with straightforward sections.' },
  { id: 'modern', name: 'Modern', subtitle: 'Bold headings with polished visual structure.' }
];

const interviewQuestions = {
  hr: [
    'Tell me about yourself.',
    'Why are you interested in this role?',
    'What are your strengths and weaknesses?'
  ],
  technical: [
    'Explain a project where you used data to solve a problem.',
    'How would you debug a slow application?',
    'Describe your experience with the technologies listed on your resume.'
  ]
};

const jobOpportunities = [
  { role: 'Junior Data Analyst', company: 'InsightWorks', salary: '₹5.5L – ₹7.2L' },
  { role: 'AI Operations Associate', company: 'Neuronix', salary: '₹6.8L – ₹8.4L' },
  { role: 'Product Support Engineer', company: 'ScaleLabs', salary: '₹5.9L – ₹7.5L' }
];

function ProgressBar({ value }) {
  return (
    <div className="h-3 rounded-full bg-slate-200 overflow-hidden">
      <div className="h-full rounded-full bg-sky-600 transition-all duration-500" style={{ width: `${value}%` }}></div>
    </div>
  );
}

function ResumePreview({ data, template }) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{template.name} Template</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">{data.name || 'Your Name Here'}</h2>
          <p className="mt-2 text-slate-600">{data.education || 'Education details will appear here.'}</p>
        </div>
        <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">Preview</span>
      </div>
      <div className="mt-6 space-y-4 text-slate-700">
        <div>
          <p className="font-semibold text-slate-900">Skills</p>
          <p>{data.skills || 'Add your core skills here.'}</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Projects</p>
          <p>{data.projects || 'Add your standout projects here.'}</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Experience</p>
          <p>{data.experience || 'Highlight your most relevant experience.'}</p>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ title, description }) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-4 text-slate-600">{description}</p>
    </div>
  );
}

function PracticeQuestionCard({ question }) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <p className="font-semibold text-slate-900">{question}</p>
    </div>
  );
}

function JobCard({ job }) {
  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{job.company}</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900">{job.role}</h3>
        </div>
        <span className="rounded-full bg-sky-100 px-3 py-2 text-sm font-semibold text-sky-700">{job.salary}</span>
      </div>
      <button className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">Apply Now</button>
    </div>
  );
}

function PremiumApp() {
  const [isPremium, setIsPremium] = useState(false);
  const [template, setTemplate] = useState(resumeTemplates[0]);
  const [resumeData, setResumeData] = useState({ name: '', education: '', skills: '', projects: '', experience: '' });
  const [prepProgress, setPrepProgress] = useState(46);

  const handleFieldChange = (key) => (event) => {
    setResumeData({ ...resumeData, [key]: event.target.value });
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="rounded-[40px] border border-slate-200 bg-white p-10 shadow-2xl shadow-slate-700/10 glass-panel">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-600">Premium Career Services</p>
              <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">Resume Builder and Placement Guidance</h1>
              <p className="mt-4 text-slate-600">Unlock premium career tools with resume creation, interview prep, mock questions, and job opportunities.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button onClick={() => setIsPremium(true)} className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700">Upgrade Now</button>
              <a href="/dashboard" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50">Go to Dashboard</a>
            </div>
          </div>
          {!isPremium && (
            <div className="mt-8 rounded-[32px] bg-slate-50 p-6 text-slate-700 shadow-sm border border-slate-200">
              <p className="font-semibold text-slate-900">Upgrade to Premium to access Resume Builder and Placement Guidance.</p>
            </div>
          )}
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-8">
            <section className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-sky-600">Resume Builder</p>
                  <h2 className="mt-4 text-3xl font-semibold text-slate-900">Build a polished resume step by step.</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {resumeTemplates.map((item) => (
                    <button key={item.id} onClick={() => setTemplate(item)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${template.id === item.id ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid gap-6 lg:grid-cols-[1fr,0.95fr]">
                <div className="space-y-5">
                  <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                    <label className="block text-sm font-semibold text-slate-800">Name</label>
                    <input disabled={!isPremium} value={resumeData.name} onChange={handleFieldChange('name')} className="mt-3 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500" placeholder="Your full name" />
                  </div>
                  <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                    <label className="block text-sm font-semibold text-slate-800">Education</label>
                    <textarea disabled={!isPremium} value={resumeData.education} onChange={handleFieldChange('education')} className="mt-3 w-full min-h-[110px] rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500" placeholder="Degree, institution, year..." />
                  </div>
                  <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                    <label className="block text-sm font-semibold text-slate-800">Skills</label>
                    <textarea disabled={!isPremium} value={resumeData.skills} onChange={handleFieldChange('skills')} className="mt-3 w-full min-h-[110px] rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500" placeholder="Key skills separated by commas..." />
                  </div>
                </div>
                <div className="space-y-5">
                  <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                    <label className="block text-sm font-semibold text-slate-800">Projects</label>
                    <textarea disabled={!isPremium} value={resumeData.projects} onChange={handleFieldChange('projects')} className="mt-3 w-full min-h-[110px] rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500" placeholder="Project title, description, impact..." />
                  </div>
                  <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                    <label className="block text-sm font-semibold text-slate-800">Experience</label>
                    <textarea disabled={!isPremium} value={resumeData.experience} onChange={handleFieldChange('experience')} className="mt-3 w-full min-h-[110px] rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500" placeholder="Role, company, achievements..." />
                  </div>
                  <button onClick={() => alert('Resume download is a mock action in this demo.')} disabled={!isPremium} className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500">Download Resume (PDF)</button>
                </div>
              </div>
            </section>

            <ResumePreview data={resumeData} template={template} />
          </div>

          <div className="space-y-8">
            <section className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-sky-600">Placement Preparation</p>
                  <h2 className="mt-4 text-3xl font-semibold text-slate-900">Stay interview-ready with guided preparation.</h2>
                </div>
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">Progress</span>
              </div>
              <div className="mt-6 space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-slate-600"><span>Preparation progress</span><span>{prepProgress}%</span></div>
                  <ProgressBar value={prepProgress} />
                </div>
                <InfoCard title="Resume tips" description="Use a clear summary, highlight outcomes, and match keywords to the job description." />
                <InfoCard title="Mock interview suggestions" description="Practice coding, system design, and communication with peer review and timed sessions." />
              </div>
            </section>

            <section className="rounded-[32px] border border-slate-200 bg-slate-50 p-10 shadow-sm">
              <p className="text-sm uppercase tracking-[0.35em] text-sky-600">Practice Questions</p>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900">HR + Technical Interview Prep</h3>
              <div className="mt-6 grid gap-4">
                {interviewQuestions.hr.map((question) => <PracticeQuestionCard key={question} question={question} />)}
                {interviewQuestions.technical.map((question) => <PracticeQuestionCard key={question} question={question} />)}
              </div>
            </section>

            <section className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-600">Job Opportunities</p>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">Sample roles to track and apply.</h3>
                </div>
              </div>
              <div className="mt-6 grid gap-4">
                {jobOpportunities.map((job) => <JobCard key={job.role} job={job} />)}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('careercompass-premium-root')).render(<PremiumApp />);
