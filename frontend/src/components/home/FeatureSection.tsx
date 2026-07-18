import Card from "../ui/Card";

const features = [
  {
    title: "AI Powered Search",
    description:
      "Ask startup questions in natural language and get instant answers.",
  },
  {
    title: "Startup Roadmaps",
    description:
      "Step-by-step guidance from idea to company launch.",
  },
  {
    title: "Funding Resources",
    description:
      "Learn about investors, grants and fundraising strategies.",
  },
  {
    title: "Business Growth",
    description:
      "Marketing, branding, hiring and scaling guides.",
  },
];

function FeatureSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Why Choose Startup Navigator?
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title}>
              <h3 className="mb-3 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;