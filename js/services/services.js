const postData = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: data,
  });

  return await res.json();
};

const getMenuCards = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Cold not fetch url:${url}, staatus ${res.status}`);
  }
  return await res.json();
};

export { postData };
export { getMenuCards };
