const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Vym3MQ2HShVJKO6rzIvG/books';

export const getApi = async () => {
  const response = await fetch(api, { method: 'GET' }).catch(
    (error) => error.message,
  );
  const resRead = await response.json();
  const books = Object.keys(resRead).map((id) => {
    const book = resRead[id][0];
    book.id = id;
    return book;
  });
  return books;
};

export const postApi = async (title, author, category, id) => {
  await fetch(api, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: id,
      title,
      author,
      category,
    }),
  }).catch((error) => error.message);
};

export const removeApi = async (id) => {
  await fetch(`${api}/${id}`, {
    method: 'DELETE',
  }).catch((error) => error.message);
};
