import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Kaviya V" },
      { name: "description", content: "Projects and internships by Kaviya V." },
      { property: "og:title", content: "Work — Kaviya V" },
      { property: "og:description", content: "Projects and internships by Kaviya V." },
    ],
  }),
  component: Work,
});

function Work() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Work</p>
      <h1 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
        Projects & internships.
      </h1>
      <p className="mt-4 text-base text-muted-foreground">
        A mix of academic projects and internship work.
      </p>

      {/* Internships */}
      <section className="mt-12">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Internships</p>
        <div className="mt-4 space-y-4">
          {experience.map((e) => (
            <article key={e.role} className="rounded-xl border border-border bg-card p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="font-display text-lg">{e.role}</h3>
                  <p className="text-sm text-accent">{e.company}</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mt-14">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Projects</p>
        <div className="mt-4 space-y-4">
          {projects.map((p) => (
            <article key={p.title} className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-lg">{p.title}</h3>
                <span className="font-mono text-xs text-muted-foreground">{p.period}</span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{p.tag}</p>
              <p className="mt-3 text-sm text-muted-foreground">{p.summary}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-accent">→</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full bg-secondary px-2.5 py-0.5 font-mono text-xs">{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

const experience = [
  {
    role: "Automation Testing Intern",
    company: "Tech Mahindra",
    period: "Jan – Feb 2026",
    points: [
      "Wrote automated test scripts for the OrangeHRM web application.",
      "Built Playwright test suites covering form submission, navigation, and UI flows.",
      "Used GitHub Copilot to speed up writing and refining test cases.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "TVS NEXT",
    period: "Jun – Jul 2025",
    points: [
      "Analyzed datasets to find patterns and useful insights.",
      "Built interactive dashboards in Tableau Public.",
      "Turned raw data into clear visuals for non-technical readers.",
    ],
  },
];

const projects = [
  {
    title: "Finalysis — Finance Dashboard",
    tag: "Web App",
    period: "Mar – Apr 2026",
    summary: "A personal finance dashboard for tracking income and expenses.",
    bullets: [
      "Interactive Recharts charts for live insights.",
      "Context API for state, with CRUD, search, and filtering.",
      "Responsive UI with dark/light mode and data persistence.",
    ],
    stack: ["React", "TypeScript", "Tailwind", "Recharts"],
  },
  {
    title: "Financial Fraud Detection",
    tag: "Machine Learning",
    period: "Jan – Mar 2026",
    summary: "Online-learning system that flags suspicious transactions in real time.",
    bullets: [
      "One-pass incremental learning — no full dataset needed.",
      "Stochastic Gradient Descent for fast updates.",
      "Multi-feature analysis to spot anomalies.",
    ],
    stack: ["Python", "SGD", "Pandas"],
  },
  {
    title: "Finsire Website Replica",
    tag: "Front-end",
    period: "Jan – Feb 2026",
    summary: "Front-end rebuild of the Finsire marketing site using React.",
    bullets: [
      "Reusable components (Navbar, Home, Blog, Media, About).",
      "SPA navigation simulating multiple pages.",
    ],
    stack: ["React", "JavaScript"],
  },
];
