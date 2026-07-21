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

      <h1 className="text-5xl font-bold">

        AI Startup Assistant

      </h1>

      <div className="mt-10">

        <textarea

          rows={6}

          placeholder="Ask anything about startups..."

          value={prompt}

          onChange={(e) => setPrompt(e.target.value)}

          className="w-full rounded-lg border p-5"

        />

        <button

          onClick={handleAskAI}

          disabled={loading}

          className="mt-5 rounded-lg bg-blue-600 px-6 py-3 text-white"

        >

          {

            loading

              ? "Thinking..."

              : "Ask AI"

          }

        </button>

      </div>

      {

        error && (

          <p className="mt-6 text-red-600">

            {error}

          </p>

        )

      }

      <div className="mt-10 rounded-xl border p-6">

        <h2 className="text-xl font-semibold">

          AI Response

        </h2>

        <p className="mt-4 whitespace-pre-line text-gray-700">

          {

            answer ||

            "Your AI generated answer will appear here."

          }

        </p>

      </div>

    </main>

  );

}

export default AISearch;