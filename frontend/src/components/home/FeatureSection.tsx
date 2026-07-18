import {
  Bot,
  BookOpen,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

import Card from "../ui/Card";

const features = [
  {
    title: "AI Powered Search",
    description:
      "Ask startup related questions in natural language and get instant AI-powered answers.",
    icon: Bot,
  },
  {
    title: "Startup Knowledge Base",
    description:
      "Access curated articles, guides, checklists and startup resources from one place.",
    icon: BookOpen,
  },
  {
    title: "Business Growth",
    description:
      "Learn marketing, branding, hiring and scaling strategies for your startup.",
    icon: TrendingUp,
  },
  {
    title: "Legal & Compliance",
    description:
      "Understand company registration, GST, taxation and legal compliance.",
    icon: ShieldCheck,
  },
];

function FeatureSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold">
          Why Startup Navigator?
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-center text-gray-600">
          Everything an entrepreneur needs to launch and grow a startup.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (
              <Card key={feature.title}>

                <Icon
                  className="mb-5 text-blue-600"
                  size={38}
                />

                <h3 className="text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {feature.description}
                </p>

              </Card>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default FeatureSection;