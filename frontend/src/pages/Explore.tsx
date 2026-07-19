import { useEffect, useState } from "react";
import { getTopics } from "../api/topicService";

type Topic = {
  id: number;
  title: string;
  category: string;
  description: string;
  difficulty: string;
};

export default function Explore() {
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    loadTopics();
  }, []);

  const loadTopics = async () => {
    try {
      const data = await getTopics();
      setTopics(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-6">
        Explore Topics
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="border rounded-xl p-5 shadow"
          >
            <h2 className="text-xl font-semibold">
              {topic.title}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {topic.category}
            </p>

            <p className="mt-3">
              {topic.description}
            </p>

            <span className="inline-block mt-4 bg-blue-100 text-blue-700 px-3 py-1 rounded">
              {topic.difficulty}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}