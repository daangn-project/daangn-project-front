export const fetchPostByJson = async (url, body) => {
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      dataType: "json",
    },
    body: JSON.stringify(body),
  });
};

export const fetchPostByForm = async (url, body) => {
  return await fetch(url, {
    method: "POST",
    headers: {},
    body: body,
  });
};

export const fetchGet = async (url) => {
  return await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "aplication/json",
    },
  });
};
