import SearchBar from "./SearchBar";

function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 text-center">

        <h1 className="text-5xl font-extrabold text-slate-900 leading-tight">
          Launch & Grow Your Startup
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
          Startup Navigator helps entrepreneurs learn Company Registration,
          Funding, Legal Compliance, Hiring, Branding, Marketing,
          Taxation, AI Tools and Business Growth.
        </p>

        <div className="mt-10">
          <SearchBar />
        </div>

      </div>
    </section>
  );
}

export default Hero;