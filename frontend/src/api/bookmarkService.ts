import api from "../services/api";

export async function addBookmark(topicId: number) {

  const response = await api.post(
    "/bookmarks",
    {
      topic_id: topicId,
    }
  );

  return response.data;

}

export async function getBookmarks() {

  const response = await api.get(
    "/bookmarks"
  );

  return response.data;

}

export async function deleteBookmark(bookmarkId: number) {

  const response = await api.delete(
    `/bookmarks/${bookmarkId}`
  );

  return response.data;

}