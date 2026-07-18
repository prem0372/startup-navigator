function AISearch() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">

      <h1 className="text-5xl font-bold">
        AI Startup Assistant
      </h1>

      <div className="mt-10">

        <input
          placeholder="Ask anything about startups..."
          className="w-full rounded-lg border p-5"
        />

        <button className="mt-5 rounded-lg bg-blue-600 px-6 py-3 text-white">
          Ask AI
        </button>

      </div>

      <div className="mt-10 rounded-xl border p-6">

        <h2 className="text-xl font-semibold">
          AI Response
        </h2>

        <p className="mt-4 text-gray-600">
          Your AI generated answer will appear here.
        </p>

      </div>

    </main>
  );
}

export default AISearch;