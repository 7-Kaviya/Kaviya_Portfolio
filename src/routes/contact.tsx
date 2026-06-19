import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kaviya V" },
      { name: "description", content: "Get in touch with Kaviya V." },
      { property: "og:title", content: "Contact — Kaviya V" },
      { property: "og:description", content: "Get in touch with Kaviya V." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Contact</p>
      <h1 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
        Let's get in touch.
      </h1>
      <p className="mt-4 max-w-xl text-base text-muted-foreground">
        I'm a fresher looking for jobs and entry-level roles. Email is the quickest way to reach me.
      </p>

      <div className="mt-10 space-y-2">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-widest opacity-60">{c.label}</p>
              <p className="mt-0.5 font-medium">{c.handle}</p>
            </div>
            <span className="text-lg opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:opacity-100">↗</span>
          </a>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-border bg-card p-6">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Resume</p>
        <p className="mt-2 text-sm text-muted-foreground">
          The full PDF version, with everything in one place.
        </p>
        <a
          href="/Kaviya-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Download resume (PDF)
        </a>
      </div>
    </main>
  );
}

const channels = [
  { label: "Email", handle: "kaviya0733@gmail.com", href: "mailto:kaviya0733@gmail.com" },
  { label: "Phone", handle: "+91 93604 11321", href: "tel:+919360411321" },
  { label: "LinkedIn", handle: "in/kaviya-v", href: "https://www.linkedin.com/in/kaviya-v-034648256/" },
  { label: "GitHub", handle: "@7-Kaviya", href: "https://github.com/7-Kaviya" },
];
