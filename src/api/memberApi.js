import axios from "axios";

//CRUD Operations
export function createMember(data) {
  return axios.put("/member", { data });
}

export function deleteMember(data) {
  return axios.delete("/member", { data });
}

// get all or one
export function getMember(params) {
  return axios.get("/member", { params });
}

export function updateMember(data) {
  return axios.post("/member", { data });
}

//Query | Search Operation - gets one or all
export function getMembers(params) {
  return axios.get("/members", { params });
}
