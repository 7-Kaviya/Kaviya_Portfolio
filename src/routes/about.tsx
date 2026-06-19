import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kaviya V" },
      { name: "description", content: "About Kaviya V — IT undergrad at Loyola-ICAM, Chennai." },
      { property: "og:title", content: "About — Kaviya V" },
      { property: "og:description", content: "IT undergrad at Loyola-ICAM, Chennai." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">About</p>
      <h1 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
        A little about me.
      </h1>

      <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground">
        <p>
          I'm an IT Graduate from <span className="text-foreground">Loyola-ICAM College of Engineering and Technology</span>, Chennai — graduating April 2026 with a CGPA of <span className="text-foreground">8.94</span>.
        </p>
        <p>
          I enjoy full stack development, data analysis, and automation. So far that's meant building interactive websites, writing Playwright tests, and turning messy CSVs into Tableau stories.
        </p>
        <p>
          I'm a fresher looking for my first full-time role — open to jobs and entry-level opportunities where I can keep learning.
        </p>
      </div>

      {/* Education */}
      <section className="mt-14">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Education</p>
        <div className="mt-4 space-y-4">
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-display text-lg">Loyola-ICAM CET</p>
              <span className="font-mono text-xs text-muted-foreground">2022 – 2026</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">B.Tech, Information Technology · CGPA 8.94</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-display text-lg">Napac Matric Hr. Sec. School</p>
              <span className="font-mono text-xs text-muted-foreground">2022</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">HSC · 95.5%</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-baseline justify-between gap-4">
              <p className="font-display text-lg">Napac Matric Hr. Sec. School</p>
              <span className="font-mono text-xs text-muted-foreground">2020</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">SSLC · 96.8%</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-14">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Skills</p>
        <div className="mt-4 grid gap-6 sm:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.label}>
              <p className="text-sm font-medium text-accent">{g.label}</p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {g.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

const skillGroups = [
  { label: "Languages", items: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "HTML/CSS"] },
  { label: "Frameworks", items: ["React", "React Native", "Flutter", "Pandas", "NumPy"] },
  { label: "Tools", items: ["Playwright", "Tableau", "MySQL", "Figma", "Git"] },
];

