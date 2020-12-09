import axios from "axios";

//CRUD Operations
export function createAuthorApi(data) {
  return axios.put("/author", { data });
}

export function deleteAuthorApi(data) {
  return axios.delete("/author", { data });
}

export function getAuthorApi(params) {
  return axios.get("/author", { params });
}

export function updateAuthorApi(data) {
  return axios.post("/author", { data });
}

//Query | Search Operation
export function getAuthorsApi(params) {
  return axios.get("/authors", { params });
}
