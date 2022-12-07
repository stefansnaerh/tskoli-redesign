

const url=window.location.href
const apiurl=url.includes("localhost")?"http://localhost:3001/api/v1":"https://tskoli-intranet-api-h7.vercel.app/api/v1"
console.log(url)
const api = {
  
  get: (path) =>
    fetch(`${apiurl}${path}`, {
      method: "GET",
      credentials: "include",
      headers: {},
    }).then(async (res) => ({ data: await res.json(), status: res.status })),

  post: (path, body) =>
    fetch(`${apiurl}${path}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : "",
    }).then(async (res) => {
      return {
        data: await res.json(),
        status: res.status,
      };
    }),

  patch: (path, body) =>
    fetch(`${apiurl}${path}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : "",
    }).then(async (res) => ({ data: await res.json(), status: res.status })),

  delete: (path, body) =>
    fetch(`${apiurl}${path}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : "",
    }).then(async (res) => ({ data: await res.json(), status: res.status })),
};

export default api;
// Vercel