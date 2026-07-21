import { useEffect, useState } from "react";

import { getResources } from "../api/resourceService";

function Resources() {

  const [resources, setResources] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    async function loadResources() {

      try {

        const data = await getResources();

        console.log("Resources:", data);

        setResources(data);

      } catch (err) {

        console.error(err);

        setError("Failed to load resources");

      } finally {

        setLoading(false);

      }

    }

    loadResources();

  }, []);

  if (loading) {

    return (

      <h2 className="text-center text-2xl mt-20">

        Loading Resources...

      </h2>

    );

  }

  if (error) {

    return (

      <h2 className="text-center text-red-600 mt-20">

        {error}

      </h2>

    );

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

            <p className="mt-3 text-gray-600">

              Type : {resource.resource_type}

            </p>

            <a

              href={resource.url}

              target="_blank"

              rel="noreferrer"

            >

              <button className="mt-5 rounded bg-blue-600 px-4 py-2 text-white">

                Open Resource

              </button>

            </a>

          </div>

        ))}

      </div>

    </main>

  );

}

export default Resources;