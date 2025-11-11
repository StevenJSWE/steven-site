import Image from 'next/image'
import Link from 'next/link'

const highlights = [
  {
    label: 'Current role',
    value: 'Software Engineer · JPMorgan Chase (since 2025)',
  },
  { label: 'Based in', value: 'Glasgow, UK' },
]

const placeholders = ['Project 01', 'Project 02']

const experience = [
  {
    title: 'JPMorgan Chase',
    detail: 'Software Engineer · Corporate Data Premiere platform',
    period: 'Sep 2025 — Present',
  },
  {
    title: 'University of Strathclyde',
    detail: 'BSc (Hons) Computer Science',
    period: 'Graduated Jun 2025',
  },
]

export default function HomePage() {
  return (
    <main className="space-y-12 py-6">
      <section className="rounded-3xl border bg-card/60 p-6 shadow-lg shadow-primary/5 sm:p-8">
        <div className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            Software Engineer
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Hi, I’m Steven
          </h1>
          <p className="text-lg text-muted-foreground">
            I work within Corporate Technology at JPMorgan Chase and spend most
            of my time working on Big Data Platforms.
          </p>
          <div className="flex justify-center sm:justify-start">
            <div className="relative h-32 w-32 overflow-hidden rounded-[1.75rem] border border-dashed border-border/70 bg-muted/40 shadow-sm shadow-primary/10 sm:h-40 sm:w-40 lg:h-48 lg:w-48">
              <Image
                src="/7524D48D-7194-4F22-9CFD-7B2F3D66C8BD.jpeg"
                alt="Steven Baird portrait"
                fill
                sizes="(max-width: 640px) 8rem, (max-width: 1024px) 10rem, 12rem"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              View projects
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-transparent bg-accent px-5 py-2 text-sm font-medium text-accent-foreground transition hover:bg-accent/90"
            >
              Get in touch
            </Link>
          </div>
          <dl className="grid gap-4 text-muted-foreground sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-dashed px-4 py-3"
              >
                <dt className="text-xs uppercase tracking-wide">
                  {item.label}
                </dt>
                <dd className="text-lg font-semibold text-foreground">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="rounded-3xl border bg-card/70 p-6 shadow-sm shadow-primary/5">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            Experience
          </p>
          <h2 className="text-2xl font-semibold">Recent work & education</h2>
          <p className="text-sm text-muted-foreground">
            A quick snapshot of where I currently build things and where I
            learned the fundamentals.
          </p>
        </header>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {experience.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border bg-background/70 p-4"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.detail}</p>
              <p className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">
                {item.period}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <header className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            Projects
          </p>
          <h2 className="text-2xl font-semibold">Projects in progress</h2>
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
