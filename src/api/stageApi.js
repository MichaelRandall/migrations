import axios from "axios";

//CRUD Operations

export function createStageApi(data) {
  return axios.put("/stage", { data });
}

export function deleteStageApi(data) {
  return axios.delete("/stage", { data });
}

// gets one filtered
export function getStageApi(params) {
  return axios.get("/stage", { params });
}

export function updateStageApi(data) {
  return axios.post("/stage", { data });
}

//Query | Search Operation - Gets all
export function getStagesApi(params) {
  return axios.get("/stages", { params });
}
