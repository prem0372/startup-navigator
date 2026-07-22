function About() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">

      <h1 className="text-5xl font-bold text-center">
        About Startup Navigator
      </h1>

      <p className="mx-auto mt-8 max-w-4xl text-center text-lg leading-8 text-gray-700">
        Startup Navigator is an AI-powered web application designed to help
        aspiring entrepreneurs build, launch, and grow successful startups.
        The platform provides curated learning resources, startup guidance,
        AI-powered recommendations, bookmarking, and a centralized knowledge
        base to simplify the startup journey.
      </p>

      {/* Mission */}

      <section className="mt-16">
        <h2 className="text-3xl font-bold">
          Our Mission
        </h2>

        <p className="mt-4 text-gray-600 leading-8">
          Our mission is to make startup knowledge accessible to everyone by
          combining modern AI technologies with high-quality learning resources.
          Whether you are planning your first startup or scaling an existing
          business, Startup Navigator provides practical guidance every step
          of the way.
        </p>
      </section>

      {/* Features */}

      <section className="mt-16">

        <h2 className="text-3xl font-bold mb-8">
          Key Features
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-xl border p-6 shadow">
            <h3 className="text-xl font-bold">
              🚀 AI Guidance
            </h3>

            <p className="mt-3 text-gray-600">
              Ask startup-related questions and receive AI-powered guidance.
            </p>
          </div>

          <div className="rounded-xl border p-6 shadow">
            <h3 className="text-xl font-bold">
              📚 Startup Topics
            </h3>

            <p className="mt-3 text-gray-600">
              Learn company registration, funding, taxation, marketing,
              branding and more.
            </p>
          </div>

          <div className="rounded-xl border p-6 shadow">
            <h3 className="text-xl font-bold">
              ⭐ Bookmarks
            </h3>

            <p className="mt-3 text-gray-600">
              Save useful startup topics and access them anytime.
            </p>
          </div>

          <div className="rounded-xl border p-6 shadow">
            <h3 className="text-xl font-bold">
              📈 Dashboard
            </h3>

            <p className="mt-3 text-gray-600">
              Monitor bookmarks, resources and AI search activity.
            </p>
          </div>

        </div>

      </section>

      {/* Tech Stack */}

      <section className="mt-16">

        <h2 className="text-3xl font-bold">
          Technology Stack
        </h2>

        <div className="mt-6 rounded-xl border bg-slate-50 p-6">

          <ul className="space-y-3 text-gray-700">

            <li>✅ React + TypeScript</li>

            <li>✅ Tailwind CSS</li>

            <li>✅ FastAPI</li>

            <li>✅ SQLite Database</li>

            <li>✅ JWT Authentication</li>

            <li>✅ AI Powered Search</li>

          </ul>

        </div>

      </section>

    </main>
  );
}

export default About;