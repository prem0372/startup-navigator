import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

function Hero() {

  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="max-w-4xl">

          <p className="mb-4 rounded-full bg-white/20 px-4 py-2 inline-block">
            🚀 AI Powered Startup Platform
          </p>

          <h1 className="text-6xl font-extrabold leading-tight">
            Launch.
            <br />
            Build.
            <br />
            Scale Your Startup.
          </h1>

          <p className="mt-8 text-xl text-blue-100">
            Learn everything from Company Registration,
            Legal Compliance, Funding,
            Marketing, Branding,
            Taxation and AI Tools.
          </p>

          <div className="mt-10">
            <SearchBar />
          </div>

          <div className="mt-12 flex flex-wrap gap-3">

            {[
              "Company Registration",
              "Funding",
              "GST",
              "Marketing",
              "AI",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-white/20 px-4 py-2"
              >
                {item}
              </span>
            ))}

          </div>

          <button
            onClick={() => navigate("/explore")}
            className="mt-12 flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-700"
          >
            Explore Startup Guides
            <ArrowRight size={20} />
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;