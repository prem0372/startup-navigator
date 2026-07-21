import { useState } from "react";

import { askAI } from "../api/aiService";

function AISearch() {

  const [prompt, setPrompt] = useState("");

  const [answer, setAnswer] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleAskAI() {

    if (!prompt.trim()) {

      alert("Please enter your question");

      return;

    }

    try {

      setLoading(true);

      setError("");

      const data = await askAI(prompt);

      setAnswer(data.response);

    }

    catch (err: any) {

      if (err.response) {

        setError(err.response.data.detail);

      }

      else {

        setError("Server Error");

      }

    }

    finally {

      setLoading(false);

    }

  }

  return (

    <main className="mx-auto max-w-5xl px-6 py-20">

      <h1 className="text-5xl font-bold text-center">
        🚀 AI Startup Assistant
      </h1>

    <p className="mt-4 text-center text-gray-600">
      Ask anything about startups, funding, legal, marketing, GST, or business ideas.
    </p>

      <div className="mt-10">

        <textarea
          rows={7}
          placeholder="Example: How do I register a startup in India?"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="mt-8 w-full rounded-xl border border-gray-300 p-5 shadow-sm focus:border-blue-500 focus:outline-none"
        />
        <button
          onClick={handleAskAI}
          disabled={loading}
          className="mt-5 rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      </div>

      {

        error && (

          <p className="mt-6 text-red-600">

            {error}

          </p>

        )

      }

      <div className="mt-10 rounded-2xl border bg-white p-8 shadow">

  <h2 className="text-2xl font-bold text-blue-700">
    AI Response
  </h2>

  <div className="mt-6 whitespace-pre-wrap leading-8 text-gray-700">

    {answer
      ? answer
      : "Your AI generated answer will appear here."}

  </div>

</div>

    </main>

  );

}

export default AISearch;