function About() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">

      <h1 className="text-5xl font-bold">
        About Startup Navigator
      </h1>

      <p className="mt-8 text-lg text-gray-700 leading-8">
        Startup Navigator is an AI-powered platform that helps aspiring
        entrepreneurs discover startup resources, explore learning topics,
        bookmark useful content, and receive AI-generated guidance for
        launching and growing their businesses.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">

        <div className="rounded-xl border p-6 shadow">
          <h2 className="text-xl font-bold">
            🚀 AI Guidance
          </h2>

          <p className="mt-3 text-gray-600">
            Get startup recommendations using AI.
          </p>
        </div>

        <div className="rounded-xl border p-6 shadow">
          <h2 className="text-xl font-bold">
            📚 Learning Topics
          </h2>

          <p className="mt-3 text-gray-600">
            Explore startup concepts from beginner to advanced.
          </p>
        </div>

        <div className="rounded-xl border p-6 shadow">
          <h2 className="text-xl font-bold">
            ⭐ Bookmarks
          </h2>

          <p className="mt-3 text-gray-600">
            Save important startup topics for quick access.
          </p>
        </div>

      </div>

    </main>
  );
}

export default About;