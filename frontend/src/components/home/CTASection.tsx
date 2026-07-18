import Button from "../ui/Button";

function CTASection() {
  return (
    <section className="bg-blue-700 py-24 text-white">

      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-5xl font-bold">
          Ready to Start Your Startup?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
          Explore AI powered startup guidance, funding resources,
          legal compliance, taxation and business growth strategies.
        </p>

        <div className="mt-10">

          <Button>
            Start Exploring
          </Button>

        </div>

      </div>

    </section>
  );
}

export default CTASection;