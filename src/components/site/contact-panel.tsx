import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const links = [
  {
    label: 'Email',
    href: 'mailto:steven.baird.dev@gmail.com',
    Icon: Mail,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/StevenJSWE',
    Icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/steven-j-baird-b226aa290',
    Icon: Linkedin,
  },
  {
    label: 'Twitter',
    href: 'https://x.com/SJBairdSWE',
    Icon: Twitter,
  },
]

export function ContactPanel() {
  return (
    <section
      id="contact"
      className="rounded-3xl border bg-card/70 p-6 shadow-sm shadow-primary/5"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-accent">
        Stay in touch
      </p>
      <p className="mt-3 text-sm text-muted-foreground">
        I’m always happy to chat about backend systems, data platforms, or new
        opportunities. Reach out through whichever channel works best.
      </p>
      <ul className="mt-6 space-y-3">
        {links.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              className="flex items-center gap-3 rounded-full px-3 py-2 text-sm font-medium transition hover:text-primary"
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
