export default async (url) => {
  const data = await
  fetch(url)
    .then(response => response.json())
    .then(json => json);

  return data;
};
