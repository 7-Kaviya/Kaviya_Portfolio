import { createFileRoute } from "@tanstack/react-router";
import { Building2 } from "lucide-react";

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
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Work</p>
      <h1 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
        Projects & internships.
      </h1>
      <p className="mt-4 text-base text-muted-foreground">
        A mix of projects and internship work.
      </p>

      {/* Internships */}
      <section className="mt-12">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Internships</p>
        <div className="mt-4 space-y-4">
          {experience.map((e) => (
            
            <article key={e.role} className="rounded-xl border border-border bg-card p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-secondary text-accent">
                    {e.logo ? (
                      <img src={e.logo} alt={`${e.company} logo`} className="h-full w-full object-cover" />
                    ) : (
                      <Building2 className="h-5 w-5" />
                    )}
                  </span>
                  <div>
                    <h3 className="font-display text-lg">{e.role}</h3>
                    <p className="text-sm text-accent">{e.company}</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-muted-foreground sm:pt-2">{e.period}</span>
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
            <article key={p.title} className="flex gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent">
              {p.image && (
                <a
                  href={p.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-40 shrink-0 self-center overflow-hidden rounded-lg border border-border bg-secondary sm: w-44"
                  aria-label={`Open ${p.title}`}
                >
                  <img src={p.image} alt={`${p.title} preview`} className="h-flex w-flex object-cover" />
                </a>
              )}
              <div className="min-w-0 flex-1">
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
    role: "Test Automation Intern",
    company: "Tech Mahindra",
    period: "Jan – Feb 2026",
    logo: "/tech mahindra.jpg",
    points: [
      "Reduced manual regression testing time by automating 20+ browser test cases for OrangeHRM using Playwright across Chrome, Firefox, and WebKit environments.",
      "Accelerated test script development by integrating GitHub Copilot into the workflow, cutting average script authoring time by ~40% through AI-assisted code generation.",
      "Strengthened test coverage by building end-to-end suites covering form validation, navigation flows, and UI state assertions — replicating real user journeys across all tested modules.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "TVS Next",
    period: "Jun – Jul 2025",
    logo: "/tvs next.webp",
    points: [
      "Analyzed datasets to find patterns and useful insights.",
      "Built interactive dashboards in Tableau Public.",
      "Turned raw data into clear visuals for non-technical readers.",
    ],
  },
];

const projects = [
  {
    title: "Nexux Platform",
    tag: "Web App",
    image: "/nexus.png",
    url: "https://github.com/7-Kaviya/SPA-Application---Angular",
    period: "Jun 2026",
    summary: "A personal finance dashboard for tracking income and expenses.",
    bullets: [
      "Orchestrated a full-stack web application using Angular 14, Node.js, Express, and TypeScript with role-based authentication and JWT security.",
      "Crafted responsive dashboard and admin modules with reusable Angular components, routing, and interceptors.",
      "Implemented RESTful APIs for user management, authentication, and record handling with CRUD operations.",
      "Designed modular frontend structure and backend middleware for authentication and request handling."
    ],
    stack: ["Angular", "TypeScript", "Node.js", "Express"],
  },
  {
    title: "Lead Management — Mini CRM",
    tag: "Web App",
    image: "/lead.png",
    url: "https://lead-management-system.kaviya0733.workers.dev/",
    period: "May 2026",
    summary: "A lightweight CRM for capturing leads and tracking them through a sales pipeline.",
    bullets: [
      "Built a full-stack CRM using React 19, TanStack Start, and TypeScript with Supabase-backed PostgreSQL storage.",
      "Implemented lead capture, inline status updates (New → Interested → Not Interested → Converted), search, and source-based filtering with optimistic UI.",
      "Designed a dashboard with stat cards, status doughnut chart, and source bar chart using recharts for real-time pipeline insights.",
      "Modeled a secure `leads` schema with enums, RLS policies, and auto-generated REST APIs via Lovable Cloud."
    ],
    stack: ["React", "TanStack Start", "TypeScript", "Tailwind CSS", "Supabase"],
  },
  {
    title: "Lumina Interiors — Interior Design Firm Website",
    tag: "WordPress Theme",
    image: "lumina.png",
    url: "https://github.com/7-Kaviya/Interior-Design---WordPress",
    period: "May 2026",
    summary: "A luxury editorial WordPress theme for an interior design firm, featuring a full-screen hero, portfolio grid, and contact form with a warm ivory and terracotta design system.",
    bullets: [
      "Built a custom WordPress theme from scratch with PHP template files and a fully responsive CSS design system.",
      "Registered custom post types for Portfolio Projects and Testimonials with meta boxes for location, area, year, and client details, plus taxonomy support for project categories.",
      "Implemented a WordPress Customizer panel for live editing of hero content, about section, contact info, social links, and footer — no code changes needed.",
      "Designed a luxury editorial UI with Cormorant Garamond + Jost typography, scroll-reveal animations, marquee ticker, image hover effects, and a sticky shrinking nav.",
    ],
    stack: ["WordPress", "PHP", "CSS3", "JavaScript", "Contact Form 7"],
  },
  {
    title: "Financial Fraud Detection",
    tag: "Machine Learning",
    image: "/fraud.jpeg",
    url: "https://github.com/7-Kaviya/One-Pass-Online-Learning",
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
    title: "Finalysis — Finance Dashboard",
    tag: "Web App",
    image: "/finalysis.png",
    url: "https://financial-dashboard-ui-eta.vercel.app/",
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
    title: "Finsire Website Replica",
    tag: "Front-end",
    image: "/finsire.png",
    url: "https://finsirewebsitereplication.netlify.app/",
    period: "Jan – Feb 2026",
    summary: "Front-end rebuild of the Finsire marketing site using React.",
    bullets: [
      "Reusable components (Navbar, Home, Blog, Media, About).",
      "SPA navigation simulating multiple pages.",
    ],
    stack: ["React", "JavaScript"],
  },
  {
    title: "Exam Registration System",
    tag: "Web App",
    image: "exam.png",
    url: "https://github.com/7-Kaviya/Exam-Registration-System",
    period: "Feb - Mar 2025",
    summary: "A full-stack web application that streamlines exam registration, fee payment tracking, and hall ticket generation for students and administrators.",
    bullets: [
      "Developed a complete exam registration platform using Node.js, Express.js, MongoDB, and EJS for seamless student enrollment.",
      "Implemented exam management features including exam creation, registration tracking, and fee payment status management.",
      "Built automated hall ticket generation with PDFKit, enabling students to download exam admit cards after successful registration and payment.",
      "Designed MongoDB schemas for exams, registrations, and student records, with dynamic EJS views for real-time data rendering and administration."
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS", "PDFKit", "JavaScript"]
  },
  {
    title: "Training Management System",
    tag: "Web App",
    image: "train.png",
    url: "https://trainingm.netlify.app/",
    period: "Feb 2026",
    summary: "A responsive Training Management System built with React to manage subjects, courses, batches, and students through a centralized dashboard with validation, dynamic relationships, and local data persistence.",
    bullets: [
      "Developed CRUD modules for Subject, Course, Batch, and Student Management using React functional components and Hooks.",
      "Implemented business validations including duplicate prevention, minimum subject requirements for courses, batch time validation, and dynamic batch filtering based on selected courses.",
      "Built an interactive dashboard displaying real-time statistics for subjects, courses, batches, and students with seamless navigation between modules.",
      "Added LocalStorage persistence, responsive UI design, user-friendly error handling, and dark mode support to enhance usability and maintain state across browser sessions."
    ],
    stack: ["React.js", "JavaScript", "HTML5", "CSS3", "LocalStorage"],
  },
  {
    title: "Article Application - Ruby on Rails",
    tag: "Web App",
    period: "Jun 2025",
    summary: "A responsive Article application with HTML templates and backend logic for a full-stack Rails application.",
    bullets: [
      "Developed CRUD modules to enter, read, change and delete article details",
    ],
    stack: ["Ruby on Rails", "HTML"],
}
];