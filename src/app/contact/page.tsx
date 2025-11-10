import { Github, Linkedin, Mail } from 'lucide-react'

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
]

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="mb-4 text-3xl font-semibold">Get in touch</h1>
      <p className="mb-6 text-muted-foreground">
        Feel free to reach out about opportunities, collaborations, or just to
        say hi.
      </p>
      <ul className="space-y-3">
        {links.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              className="hover:text-primary flex items-center gap-3 underline decoration-transparent transition hover:decoration-current"
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}
