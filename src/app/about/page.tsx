const focusAreas = [
  {
    title: 'Systems Engineering',
    copy: 'Designing scalable data services, observability pipelines, and resilient backend systems.',
  },
  {
    title: 'Product Delivery',
    copy: 'Partnering with stakeholders to turn fuzzy briefs into measurable outcomes and shipped software.',
  },
  {
    title: 'Developer Experience',
    copy: 'Building tooling that accelerates teams: CI/CD workflows, internal SDKs, and platform automations.',
  },
]

const updates = [
  'Exploring lightweight ML services for anomaly detection in trade data.',
  'Experimenting with Next.js Server Actions to simplify full-stack workflows.',
]

export default function AboutPage() {
  return (
    <main className="space-y-10 py-6">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold">About Me</h1>
        <p className="text-base leading-relaxed text-muted-foreground">
          I’m a Glasgow-based software engineer focusing on backend and
          full-stack development. I enjoy building efficient systems, learning
          new technologies, and exploring how software can create real-world
          impact.
        </p>
        <p className="text-base leading-relaxed text-muted-foreground">
          My wheelhouse spans Kotlin, Java, TypeScript, and Python, with a heavy
          dose of cloud infrastructure and data streaming. Whether it’s getting
          observability in shape or translating business goals into APIs, I try
          to keep the work practical and measurable.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {focusAreas.map((area) => (
          <article
            key={area.title}
            className="rounded-2xl border bg-card/80 p-6 shadow-sm shadow-primary/5"
          >
            <h2 className="text-xl font-semibold">{area.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {area.copy}
            </p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-dashed bg-muted/40 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Currently
        </p>
        <ul className="mt-4 space-y-3 divide-y divide-border text-sm text-foreground">
          {updates.map((note) => (
            <li key={note} className="pt-3 first:pt-0">
              {note}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
