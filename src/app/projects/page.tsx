export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-4xl p-8">
      <h1 className="mb-4 text-3xl font-semibold">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Example project card */}
        <div className="rounded-lg border p-4">
          <h2 className="mb-2 text-lg font-semibold">
            Risk & Trade Monitoring Dashboard
          </h2>
          <p className="text-muted-foreground text-sm">
            React + Spring Boot app for visualizing trade data and anomalies.
          </p>
        </div>
        <div className="rounded-lg border p-4">
          <h2 className="mb-2 text-lg font-semibold">PKCE Research App</h2>
          <p className="text-muted-foreground text-sm">
            Analysis of Proof Key for Code Exchange vulnerabilities with React
            front-end.
          </p>
        </div>
      </div>
    </main>
  )
}
