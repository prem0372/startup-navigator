import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTopics } from "../api/topicService";
import { addBookmark } from "../api/bookmarkService";


type Topic = {
  id: number;
  title: string;
  category: string;
  description: string;
  difficulty: string;
};

export default function Explore() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [search, setSearch] = useState("");
  const [searchParams] = useSearchParams();

  useEffect(() => {

  const query = searchParams.get("search");

  if (query) {

    setSearch(query);

  }

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

async function handleBookmark(topicId: number) {

  try {

    await addBookmark(topicId);

    alert("Bookmark Added Successfully ✅");

  } catch (error: any) {

    if (error.response) {

      alert(error.response.data.detail);

    } else {

      alert("Server Error");

    }

  }

}

const filteredTopics = topics.filter((topic) =>
  topic.title
    .toLowerCase()
    .includes(search.toLowerCase())
);

  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-6">
        <input
          type="text"
          placeholder="Search topics..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg p-3 mb-8"
        />
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTopics.map((topic) => (
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
            <button
              onClick={() => handleBookmark(topic.id)}
              className="mt-5 w-full rounded-lg bg-blue-600 py-2 text-white"
          >
            Bookmark
        </button>
          </div>
        ))}
      </div>
    </div>
  );
}