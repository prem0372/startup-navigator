import Card from "../ui/Card";

const categories = [
  "Company Registration",
  "Funding",
  "Legal Compliance",
  "Hiring",
  "Branding",
  "Marketing",
  "Taxation",
  "AI Tools",
];

function CategoryGrid() {
  return (
    <section className="py-20">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-10 text-center text-4xl font-bold">
          Explore Topics
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {categories.map((item) => (

            <Card key={item}>

              <h3 className="text-lg font-semibold">
                {item}
              </h3>

            </Card>

          ))}

        </div>

      </div>

    </section>
  );
}

export default CategoryGrid;