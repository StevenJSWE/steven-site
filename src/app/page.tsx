import Link from 'next/link'

const highlights = [
  { label: 'Experience', value: '4+ years' },
  { label: 'Focus', value: 'Big data & APIs' },
  { label: 'Based in', value: 'Glasgow, UK' },
]

const placeholders = ['Case Study 01', 'Case Study 02']

export default function HomePage() {
  return (
    <main className="space-y-10 py-6">
      <section className="rounded-3xl border bg-card/60 p-8 shadow-lg shadow-primary/5">
        <p className="text-sm font-medium uppercase tracking-wide text-accent">
          Software Engineer · Backend & Data
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
          Hey, I’m Steven — I build reliable systems and thoughtful products.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Currently at JPMorgan Chase working on trade surveillance and big-data
          platforms. I love marrying clean engineering with business impact.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            View projects
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-transparent bg-accent px-5 py-2 text-sm font-medium text-accent-foreground transition hover:bg-accent/90"
          >
            Get in touch
          </Link>
        </div>
        <dl className="mt-8 grid gap-4 text-muted-foreground sm:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-dashed px-4 py-3"
            >
              <dt className="text-xs uppercase tracking-wide">{item.label}</dt>
              <dd className="text-lg font-semibold text-foreground">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="space-y-4">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            Projects
          </p>
          <h2 className="text-2xl font-semibold">Case studies in progress</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            I’m packaging a few recent builds into proper write-ups. Until
            they’re ready, these slots stay intentionally blank.
          </p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2">
          {placeholders.map((label) => (
            <article
              key={label}
              className="rounded-2xl border border-dashed bg-muted/30 p-6 text-center"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {label}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Reserved for a future deep dive.
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
