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

                    Topic ID : {bookmark.topic_id}

                  </h2>

                  <button

                    onClick={() =>
                      removeBookmark(bookmark.id)
                    }

                    className="mt-4 rounded bg-red-600 px-4 py-2 text-white"

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