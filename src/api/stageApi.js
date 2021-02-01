import axios from "axios";

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