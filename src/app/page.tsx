export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-24">
      <section className="max-w-2xl text-center">
        <p className="mb-4 font-mono text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Next.js + TypeScript
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          Factory Starter App
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          The application is ready. Start building by editing the home page in
          <code className="ml-1 rounded bg-zinc-100 px-1.5 py-1 font-mono text-sm text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
            src/app/page.tsx
          </code>
          .
        </p>
      </section>
    </main>
  );
}
