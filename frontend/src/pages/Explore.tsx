function Explore() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">

      <div className="mb-10">

        <h1 className="text-5xl font-bold">
          Explore Startup Topics
        </h1>

        <p className="mt-4 text-gray-600">
          Browse startup guides and business resources.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {[
          "Company Registration",
          "Funding",
          "Legal Compliance",
          "Hiring",
          "Marketing",
          "Branding",
          "Taxation",
          "AI Tools",
          "Business Growth",
        ].map((topic) => (

          <div
            key={topic}
            className="rounded-xl border bg-white p-6 shadow transition hover:shadow-lg"
          >

            <h2 className="text-2xl font-semibold">
              {topic}
            </h2>

            <p className="mt-3 text-gray-600">
              Learn everything about {topic.toLowerCase()}.
            </p>

            <button className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-white">
              View Details
            </button>

          </div>

        ))}

      </div>

    </main>
  );
}

export default Explore;