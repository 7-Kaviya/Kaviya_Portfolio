import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-light text-foreground">404</h1>
        <h2 className="mt-4 font-display text-2xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This page wandered off. Let's get you back.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kaviya V — Developer & Designer" },
      { name: "description", content: "Portfolio of Kaviya V — Information Technology student, full-stack developer, and data enthusiast based in Tamil Nadu, India." },
      { name: "author", content: "Kaviya V" },
      { property: "og:title", content: "Kaviya V — Developer & Designer" },
      { property: "og:description", content: "Portfolio of Kaviya V — Information Technology student, full-stack developer, and data enthusiast." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Inter+Tight:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-display text-base text-primary-foreground transition-transform group-hover:rotate-12">
            K
          </span>
          <span className="font-display text-lg tracking-tight">Kaviya V</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/work", label: "Work" },
            { to: "/contact", label: "Contact" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "rounded-full px-4 py-2 text-sm bg-secondary text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href="/Kaviya-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground transition-transform hover:scale-105 md:inline-flex"
        >
          Resume ↗
        </a>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-6 py-8 md:flex-row md:items-center md:px-10">
        <p className="font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} Kaviya V · Tamil Nadu, India</p>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <a href="mailto:kaviya0733@gmail.com" className="hover:text-accent">Email</a>
          <a href="https://github.com/7-Kaviya" target="_blank" rel="noopener noreferrer" className="hover:text-accent">GitHub</a>
          <a href="https://linkedin.com/in/kaviya-v" target="_blank" rel="noopener noreferrer" className="hover:text-accent">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
