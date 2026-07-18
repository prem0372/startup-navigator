function Resources() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">

      <h1 className="text-5xl font-bold">
        Startup Resources
      </h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {[
          "Business Plan Template",
          "Funding Checklist",
          "Startup Pitch Deck",
          "GST Guide",
          "Marketing Checklist",
          "Hiring Guide",
        ].map((item) => (

          <div
            key={item}
            className="rounded-xl border p-6 shadow"
          >

            <h2 className="text-xl font-semibold">
              {item}
            </h2>

            <button className="mt-5 rounded bg-blue-600 px-4 py-2 text-white">
              Download
            </button>

          </div>

        ))}

      </div>

    </main>
  );
}

export default Resources;