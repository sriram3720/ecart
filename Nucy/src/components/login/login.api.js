export const userLogin = (userData) => {
  return fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/login`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};
