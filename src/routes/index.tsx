import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kaviya V — Portfolio" },
      { name: "description", content: "Kaviya V — IT Graduate from Loyola-ICAM. Front-end, data, and automation projects." },
      { property: "og:title", content: "Kaviya V — Portfolio" },
      { property: "og:description", content: "IT Graduate from Loyola-ICAM. Front-end, data, and automation projects." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-24">
      {/* Intro */}
      <section>
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Open to full-time jobs
        </div>
        <h1 className="mt-6 font-display text-3xl leading-tight sm:text-4xl md:text-5xl">
          Hi, I'm Kaviya — an <em className="text-accent">IT undergrad</em> who likes building things for the web.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          IT Graduate from Loyola-ICAM, Chennai. I work mostly with React & TypeScript, dabble in Python for data, and write Playwright tests when something needs automating.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            See my work →
          </Link>
          <Link to="/contact" className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
            Get in touch
          </Link>
        </div>
      </section>

      {/* Quick facts */}
      <section className="mt-16 grid gap-8 border-t border-border pt-10 sm:grid-cols-2 md:mt-20 md:grid-cols-3">
        {[
          { k: "Education", v: "B.Tech IT, Loyola-ICAM", sub: "CGPA 8.94 · 2022 – 2026" },
          { k: "Based in", v: "Tamil Nadu, India", sub: "Open to remote / relocate" },
          { k: "Currently", v: "Looking for jobs", sub: "Full stack · Data · QA" },
        ].map((f) => (
          <div key={f.k}>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{f.k}</p>
            <p className="mt-2 font-display text-lg">{f.v}</p>
            <p className="text-sm text-muted-foreground">{f.sub}</p>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mt-16">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Toolbox</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {["React", "TypeScript", "JavaScript", "Python", "Java", "SQL", "Django", "Tailwind", "Playwright", "Tableau", "Figma"].map((s) => (
            <span key={s} className="rounded-full border border-border bg-card px-3 py-1 text-sm">{s}</span>
          ))}
        </div>
      </section>

      {/* Recent work preview */}
      <section className="mt-20">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="min-w-0">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Recent work</p>
            <h2 className="mt-2 font-display text-2xl md:text-3xl">A few things I've built</h2>
          </div>
          <Link to="/work" className="text-sm text-muted-foreground underline-offset-4 hover:text-accent hover:underline">
            All projects →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {featured.map((p) => (
            <Link
              key={p.title}
              to="/work"
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent"
            >
              <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <span>{p.tag}</span>
                <span>{p.year}</span>
              </div>
              <h3 className="mt-4 font-display text-xl group-hover:text-accent">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

const featured = [
  { title: "Language Translator", tag: "Full stack", year: "2026", blurb: "Django-based multilingual translator that converts text across multiple languages." },
  { title: "Nexus Platform", tag: "Full stack", year: "2026", blurb: "Angular + Node.js + Express + TypeScript with role-based authentication and JWT security." },
  { title: "Fraud Detection", tag: "ML Project", year: "2026", blurb: "Online-learning model that flags suspicious transactions." },
  { title: "OrangeHRM Tests", tag: "Automation", year: "2026", blurb: "End-to-end Playwright test suites — internship work." },
];
