import { useEffect, useState } from "react";
import { getResources } from "../api/resourceService";

type Resource = {
  id: number;
  title: string;
  url: string;
  resource_type: string;
};

function Resources() {

  const [resources, setResources] = useState<Resource[]>([]);

  useEffect(() => {

    loadResources();

  }, []);

  async function loadResources() {

    try {

      const data = await getResources();

      setResources(data);

    } catch (error) {

      console.log(error);

    }

  }

  return (

    <main className="mx-auto max-w-7xl px-6 py-16">

      <h1 className="text-5xl font-bold">

        Startup Resources

      </h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {resources.map((resource) => (

          <div
            key={resource.id}
            className="rounded-xl border p-6 shadow"
          >

            <h2 className="text-xl font-semibold">

              {resource.title}

            </h2>

            <p className="mt-3 text-gray-500">

              {resource.resource_type}

            </p>

            <a

              href={resource.url}

              target="_blank"

              rel="noreferrer"

              className="mt-5 inline-block rounded bg-blue-600 px-4 py-2 text-white"

            >

              Open Resource

            </a>

          </div>

        ))}

      </div>

    </main>

  );

}

export default Resources;