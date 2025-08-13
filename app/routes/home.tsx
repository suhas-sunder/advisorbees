export function meta() {
  return [
    { title: "AdvisorBees — Advice, Tools, and Knowledge Hub" },
    {
      name: "description",
      content:
        "AdvisorBees is a practical knowledge hub with clear how-tos and simple online tools for developers, creators, and productivity fans. Clean design, useful ideas, and a growing library you can rely on.",
    },
  ];
}

export function loader({ request }: { request: Request }) {
  const origin = new URL(request.url).origin;
  return {
    origin,
    generatedAt: new Date().toISOString(),
    // List items are plain text (no links) to avoid 404s until routes exist
    plannedTools: [
      "Image → SVG (outline) converter",
      "Word & character counter",
      "JSON formatter / validator",
      "UTM link builder",
      "QR code generator",
    ],
    plannedTopics: [
      "Software development basics",
      "Algorithms explained simply",
      "Content creation workflows",
      "Productivity tips that actually help",
    ],
  };
}

export default function Landing({
  loaderData,
}: {
  loaderData: {
    origin: string;
    generatedAt: string;
    plannedTools: string[];
    plannedTopics: string[];
  };
}) {
  const { origin, generatedAt, plannedTools, plannedTopics } = loaderData;

  // Minimal Organization JSON-LD for richer indexing without adding links
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AdvisorBees",
    url: origin,
    logo: `${origin}/favicon.ico`,
    sameAs: [] as string[],
    description:
      "AdvisorBees is a practical knowledge hub offering clear how-tos and simple online tools for developers, creators, and productivity fans.",
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-yellow-600">AdvisorBees</h1>
        <p className="mt-2 text-lg text-gray-700">
          Practical advice, clear tutorials, and simple tools for everyday
          problem solving. Built for developers, creators, and anyone who wants
          to work smarter.
        </p>
      </header>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold">What this site is</h2>
        <p className="leading-relaxed text-gray-800">
          AdvisorBees is a growing knowledge hub focused on useful, no-fluff
          guidance. Articles cover coding fundamentals, algorithms, content
          creation, and productivity. Alongside the writing, you will find small
          online tools that make common tasks faster. The aim is simple: keep
          things clear, lightweight, and actually helpful.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold">Tools planned</h2>
        <ul className="list-inside list-disc space-y-1 text-gray-800">
          {plannedTools.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <p className="mt-3 text-sm text-gray-600">
          These tools will appear here as they are finished. No links yet to
          avoid broken pages.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold">Topics you can expect</h2>
        <ul className="list-inside list-disc space-y-1 text-gray-800">
          {plannedTopics.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-2xl font-semibold">Why it matters</h2>
        <p className="leading-relaxed text-gray-800">
          Most tasks do not need complex tools or long tutorials. AdvisorBees
          focuses on fast answers, clear steps, and small utilities you can use
          in seconds. The goal is to help you get unstuck, ship work, and move
          on with your day.
        </p>
      </section>

      <footer className="mt-12 border-t pt-4 text-sm text-gray-600">
        <p>Page generated: {new Date(generatedAt).toUTCString()}</p>
        <p>© {new Date().getFullYear()} AdvisorBees</p>
      </footer>

      {/* JSON-LD for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
