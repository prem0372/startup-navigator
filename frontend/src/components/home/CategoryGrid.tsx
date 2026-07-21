import { useNavigate } from "react-router-dom";
import {
  Building2,
  Landmark,
  Briefcase,
  Scale,
  Megaphone,
  BrainCircuit,
  BadgeIndianRupee,
  Users,
} from "lucide-react";

import Card from "../ui/Card";

const categories = [
  {
    title: "Company Registration",
    icon: Building2,
  },
  {
    title: "Funding",
    icon: Landmark,
  },
  {
    title: "Hiring",
    icon: Users,
  },
  {
    title: "Legal",
    icon: Scale,
  },
  {
    title: "Marketing",
    icon: Megaphone,
  },
  {
    title: "Business",
    icon: Briefcase,
  },
  {
    title: "Taxation",
    icon: BadgeIndianRupee,
  },
  {
    title: "AI Tools",
    icon: BrainCircuit,
  },
];

function CategoryGrid() 
{
  const navigate = useNavigate();

  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold">

          Explore Startup Topics

        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center text-gray-600">

          Everything you need to build a successful startup.

        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {categories.map((item) => {

            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                onClick={() =>
                  navigate(
                    `/explore?search=${encodeURIComponent(item.title)}`
          )
  }
  className="cursor-pointer hover:shadow-xl transition"
>
                <Icon
                  className="mb-5 text-blue-600"
                  size={36}
                />

                <h3 className="text-xl font-semibold">

                  {item.title}

                </h3>

                <p className="mt-3 text-gray-600">

                  Learn about {item.title.toLowerCase()}.

                </p>

              </Card>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default CategoryGrid;