import axios from "axios";

<<<<<<< HEAD
//Query | Search Operation - Gets all
export function getStagesApi(params) {
    return axios.get("/stages", { params });
  }

  export function updateStagesApi(data) {
    return axios.post("/stages", { data });
  }

  export function resetStagesApi(data) {
    return axios.post("/stages", { data });
  }
=======
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
>>>>>>> dc40e60b314feae765b3bc7fcd8cff6ee6409bb6
