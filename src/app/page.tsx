import { ThemeToggle } from "./theme-toggle";

const ArrowUpRight = () => (
  <svg
    aria-hidden="true"
    className="size-4"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path
      d="M4 12 12 4m0 0H5m7 0v7"
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth="1.5"
    />
  </svg>
);

export default function Home() {
  return (
    <main className="factory-grid min-h-screen overflow-hidden bg-background text-foreground transition-colors">
      <header className="border-b border-foreground/15">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
        >
          <a className="flex items-center gap-3" href="#top">
            <span className="grid size-9 place-items-center bg-accent text-sm font-bold text-white">
              F/
            </span>
            <span className="text-sm font-semibold tracking-[-0.02em]">
              Factory Starter
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium sm:flex">
            <a className="transition-colors hover:text-accent" href="#overview">
              Overview
            </a>
            <a className="transition-colors hover:text-accent" href="#stack">
              Stack
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <a
              className="flex items-center gap-2 border border-foreground px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] transition-colors hover:bg-foreground hover:text-background sm:px-4"
              href="https://github.com/pixawna/Factory-Starter-App"
            >
              GitHub
              <ArrowUpRight />
            </a>
          </div>
        </nav>
      </header>

      <section
        className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-12 lg:py-20"
        id="top"
      >
        <div>
          <div className="mb-8 flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted">
            <span className="size-2 bg-accent" />
            System ready / v0.1
          </div>

          <h1 className="max-w-3xl text-[clamp(3.5rem,9vw,7.5rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
            Built to
            <br />
            <span className="text-accent">make</span> things.
          </h1>

          <p
            className="mt-9 max-w-xl text-lg leading-8 text-muted sm:text-xl"
            id="overview"
          >
            A focused Next.js foundation for turning ideas into dependable
            products, without spending day one rebuilding the basics.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center gap-3 bg-foreground px-6 py-4 text-sm font-semibold text-background transition-colors hover:bg-accent hover:text-white"
              href="https://github.com/pixawna/Factory-Starter-App"
            >
              Start building
              <ArrowUpRight />
            </a>
            <a
              className="inline-flex items-center justify-center border border-foreground/25 px-6 py-4 text-sm font-semibold transition-colors hover:border-foreground"
              href="#stack"
            >
              Explore the stack
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:justify-self-end">
          <div className="absolute -left-8 -top-8 hidden size-24 border-l border-t border-foreground/20 sm:block" />
          <div className="border border-foreground bg-panel p-3 shadow-[12px_12px_0_var(--foreground)] transition-colors sm:p-4">
            <div className="flex items-center justify-between border border-foreground/25 bg-foreground px-4 py-3 text-background">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em]">
                Production line
              </span>
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#a7f3a0]">
                <span className="size-1.5 rounded-full bg-[#60e851]" />
                Online
              </span>
            </div>

            <div className="mt-3 border border-foreground/25 bg-surface p-5 sm:p-7">
              <div className="flex items-center gap-3" aria-hidden="true">
                <div className="grid size-11 shrink-0 place-items-center border border-foreground bg-tile font-mono text-xs font-bold">
                  01
                </div>
                <div className="h-px flex-1 bg-foreground/35" />
                <div className="grid size-11 shrink-0 place-items-center border border-foreground bg-tile font-mono text-xs font-bold">
                  02
                </div>
                <div className="h-px flex-1 bg-foreground/35" />
                <div className="grid size-11 shrink-0 place-items-center bg-accent font-mono text-xs font-bold text-white">
                  03
                </div>
              </div>

              <div className="mt-10 grid grid-cols-[1fr_auto] items-end gap-6">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    Current output
                  </p>
                  <p className="mt-2 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                    Ship-ready
                  </p>
                </div>
                <div className="grid size-16 place-items-center rounded-full border border-foreground/25 font-mono text-xs font-bold">
                  100%
                </div>
              </div>

              <div className="mt-8 h-2 bg-track">
                <div className="h-full w-full bg-accent" />
              </div>
            </div>

            <div
              className="mt-3 grid grid-cols-3 divide-x divide-foreground/25 border border-foreground/25 bg-surface"
              id="stack"
            >
              {[
                ["Next.js", "16"],
                ["React", "19"],
                ["TypeScript", "TS"],
              ].map(([label, value]) => (
                <div className="px-3 py-4 sm:px-4" key={label}>
                  <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted sm:text-[10px]">
                    {label}
                  </p>
                  <p className="mt-1 text-lg font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-12 -right-6 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted sm:block [writing-mode:vertical-rl]">
            Designed for momentum
          </div>
        </div>
      </section>
    </main>
  );
}
