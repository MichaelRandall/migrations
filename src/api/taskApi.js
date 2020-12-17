import axios from "axios";

//CRUD Operations

export function createTaskApi(data) {
  return axios.put("/task", { data });
}

export function deleteTaskApi(data) {
  return axios.delete("/task", { data });
}

// gets one filtered
export function getTaskApi(params) {
  return axios.get("/task", { params });
}

export function updateTaskApi(data) {
  return axios.post("/task", { data });
}

//Query | Search Operation - Gets all
export function getTasksApi(params) {
  return axios.get("/tasks", { params });
}
