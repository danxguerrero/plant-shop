const { VITE_API_BASE_URL, VITE_API_KEY } = import.meta.env;

const apiFetch = (method: string, path: string, body: {[key: string]: string } | null = null) => {
  const options: { method: string; credentials: RequestCredentials; headers: { Authorization: string; "Content-Type": string }; body?: string } = {
    method,
    credentials: "include",
    headers: {
      Authorization: "Bearer " + VITE_API_KEY,
      "Content-Type": "application/json",
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  return fetch(VITE_API_BASE_URL + path, options);
};

export default apiFetch;