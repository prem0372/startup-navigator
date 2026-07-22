import { useEffect, useState } from "react";

import {
  getBookmarks,
  deleteBookmark,
} from "../api/bookmarkService";

function Bookmarks() {

  const [bookmarks, setBookmarks] = useState<any[]>([]);

  async function loadBookmarks() {

    try {

      const data = await getBookmarks();

      setBookmarks(data);

    } catch (error) {

      console.log(error);

    }

  }

  useEffect(() => {

    loadBookmarks();

  }, []);

  async function removeBookmark(id: number) {

    try {

      await deleteBookmark(id);

      alert("Bookmark Removed");

      loadBookmarks();

    } catch (error) {

      alert("Unable to remove bookmark");

    }

  }

  return (

    <main className="max-w-6xl mx-auto py-10 px-6">

      <h1 className="text-4xl font-bold mb-8">

        My Bookmarks

      </h1>

      {

        bookmarks.length === 0 ? (

          <p>No Bookmarks Found.</p>

        ) : (

          <div className="grid gap-5">

            {

              bookmarks.map((bookmark) => (

                <div
                  key={bookmark.id}
                  className="border rounded-xl p-5 shadow"
                >

                  <h2 className="text-xl font-semibold">

                    Topic : {bookmark.topic.title}

                  </h2>

                  <p className="mt-2 text-gray-600">
                    {bookmark.topic.category}
                  </p>

                  <p className="mt-2">
                    {bookmark.topic.description}
                  </p>

                  <span className="inline-block mt-3 rounded bg-blue-100 px-3 py-1 text-blue-700">
                    {bookmark.topic.difficulty}
                  </span>

                  <button

                    onClick={() =>
                      removeBookmark(bookmark.id)
                    }

                      className="mt-8 w-full rounded-lg bg-red-600 py-2 text-white hover:bg-red-700"
                  >

                    Remove Bookmark

                  </button>

                </div>

              ))

            }

          </div>

        )

      }

    </main>

  );

}

export default Bookmarks;