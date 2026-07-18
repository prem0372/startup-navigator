import Button from "../ui/Button";

function CTASection() {
  return (
    <section className="bg-blue-600 py-20 text-center text-white">
      <h2 className="text-4xl font-bold">
        Ready to Build Your Startup?
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-lg">
        Explore startup guides, AI assistance, legal resources,
        funding opportunities and business growth strategies.
      </p>

      <div className="mt-8">
        <Button>
          Get Started
        </Button>
      </div>
    </section>
  );
}

export default CTASection;