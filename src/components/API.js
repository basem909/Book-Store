const api =
  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/:Vym3MQ2HShVJKO6rzIvG/books";

const getApi = async () => {
  const response = await fetch(api, { method: "GET" }).catch(
    (error) => error.message
  );
  resRead = await response.json();
  const books = Object.keys(resRead).map((id) => {
    const book = resRead[id][0];
    book.id = id;
    return book;
  });
  return books;
};
const postApi = async (book) => {
  await fetch(urlAPI, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: book.topic,
    }),
  }).catch((error) => error.message);
}

const deleteApi = async (id) => {
  await fetch(api + ":" + id, {
    method: "DELETE",
  }).catch((error) => error.message);
}