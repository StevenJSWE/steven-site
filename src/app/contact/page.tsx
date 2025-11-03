export default function ContactPage() {
  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="mb-4 text-3xl font-semibold">Get in touch</h1>
      <p className="text-muted-foreground mb-6">
        Feel free to reach out about opportunities, collaborations, or just to
        say hi.
      </p>
      <ul className="space-y-2">
        <li>
          <a href="mailto:youremail@example.com" className="underline">
            Email
          </a>
        </li>
        <li>
          <a href="https://github.com/StevenJSWE" className="underline">
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/stevenjbaird"
            className="underline"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </main>
  )
}
