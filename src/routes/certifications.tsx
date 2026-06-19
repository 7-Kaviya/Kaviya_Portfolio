import { createFileRoute } from "@tanstack/react-router";
import { Award } from "lucide-react";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Kaviya V" },
      { name: "description", content: "Courses and certifications earned by Kaviya V." },
      { property: "og:title", content: "Certifications — Kaviya V" },
      { property: "og:description", content: "Courses and certifications earned by Kaviya V." },
    ],
  }),
  component: Certifications,
});

function Certifications() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Certifications</p>
      <h1 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
        Courses & credentials.
      </h1>
      <p className="mt-4 text-base text-muted-foreground">
        A list of programs I've completed to keep learning.
      </p>

      <section className="mt-12 space-y-4">
        {certifications.map((c) => (
          <article key={c.title} className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-background">
                {c.logo ? (
                  <img src={c.logo} alt={`${c.issuer} logo`} className="h-full w-full object-contain" />
                ) : (
                  <Award className="h-6 w-6 text-muted-foreground" aria-hidden />
                )}
              </div>
              <div className="flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="font-display text-lg">{c.title}</h3>
                    <p className="text-sm text-accent">{c.issuer}</p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{c.year}</span>
                </div>
                {c.note && <p className="mt-3 text-sm text-muted-foreground">{c.note}</p>}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

const certifications = [
  {
    title: "Web Development Fundamentals",
    issuer: "IBM",
    logo: "/ibm.png",
    year: "Jun 2026",
    note: "HTML, CSS, Javascript, web design, testing, and deployment.",
  },
  {
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    logo: "/microsoft.png",
    year: "Jun 2026",
    note: "Core concepts and functionalities of generative AI, and benefits of using Copilot for workflow automation.",
  },
  {
    title: "What Is Generative AI?",
    issuer: "LinkedIn",
    logo: "/linkedin.jpg",
    year: "Jun 2026",
    note: "Generative AI, Generative AI Tools and Artificial Intelligence.",
  },
  {
    title: "Fundamentals of Prompt Engineering",
    issuer: "AWS",
    logo: "/aws.jpg",
    year: "Jun 2026",
    note: "Various prompt techniques, and various LLM models and how to write efficient prompt for them..",
  },
  {
    title: "Oracle Certified AI Foundations Associate",
    issuer: "Oracle",
    logo: "/oracle.jpg",
    year: "Mar 2026",
    note: "Intro to foundational concepts of Artificial Intelligence and Machine Learning with a focus on their practical applications in Oracle Cloud Infrastructure (OCI).",
  },
  {
    title: "The Complete Ruby on Rails Developer Course",
    issuer: "Udemy",
    logo: "/udemy.jpg",
    year: "Jun 2025",
    note: "Full-stack web development using Ruby on Rails, including building, deploying, and managing web applications.",
  },
  {
    title: "Advanced Agile: Software Project Management",
    issuer: "Infosys",
    logo: "/infosys.jpg",
    year: "Mar 2025",
    note: "How to transform organizations using Agile principles, compare Agile frameworks, and build a strong Agile culture for organization-wide success.",
  },
  {
    title: "Agile Software Development: Agile Development Life Cycle",
    issuer: "Infosys",
    logo: "/infosys.jpg",
    year: "Feb 2025",
    note: "Fundamentals of Agile software development, including Agile project management, Agile lifecycle stages, collaboration techniques,and Agile tools and artifacts.",
  },
  {
    title: "Introduction to Data Science",
    issuer: "Infosys",
    logo: "/infosys.jpg",
    year: "Oct 2023",
    note: "Basics of Python and Data Science in a practical way.",
  },
];
