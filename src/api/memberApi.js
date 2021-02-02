import axios from "axios";

//CRUD Operations
export function createMemberApi(data) {
  return axios.put("/member", { data });
}

export function deleteMemberApi(data) {
  return axios.delete("/member", { data });
}

// get all or one
export function getMemberApi(params) {
  return axios.get("/member", { params });
}

export function updateMemberApi(data) {
  return axios.post("/member", { data });
}

//Query | Search Operation - gets one or all
export function getMembersApi(params) {
  return axios.get("/members", { params });
}
