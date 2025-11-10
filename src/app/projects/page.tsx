const placeholders = ['Project 01', 'Project 02']

export default function ProjectsPage() {
  return (
    <main className="space-y-8 py-6">
      <header className="space-y-2">
        <p className="text-accent text-sm font-semibold uppercase tracking-wide">
          Work in progress
        </p>
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          I’m curating case studies that break down the architecture, tooling,
          and measurable outcomes behind the systems I’ve shipped. Check back
          soon, or reach out if you’d like a walkthrough.
        </p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2">
        {placeholders.map((label) => (
          <article
            key={label}
            className="rounded-2xl border border-dashed bg-muted/30 p-6 text-center"
          >
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              {label}
            </h2>
            <p className="text-muted-foreground mt-3 text-sm">
              Reserved for a future deep dive.
            </p>
          </article>
        ))}
      </div>
    </main>
  )
}
