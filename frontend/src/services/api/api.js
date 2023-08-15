const api_url = "http://localhost:4000/api";

const headers = {
  "Content-Type": "application/json",
};

export const apiGet = async (endpoint) => {
  const res = await fetch(`${api_url}/${endpoint}`);
  return res.json();
};

export const apiPost = async (data, endpoint) => {
  const res = await fetch(`${api_url}/${endpoint}`, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });
  return res.json();
};

export const apiPatch = async (data, endpoint, id) => {
  const res = await fetch(`${api_url}/${endpoint}/${id}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify(data),
  });
  return res.json();
};

export const apiDelete = async (endpoint, id) => {
  const res = await fetch(`${api_url}/${endpoint}/${id}`, {
    method: "DELETE",
  });
  return res.json();
};
