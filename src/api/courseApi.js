import axios from "axios";

//CRUD Operations
export function createCourseApi(data) {
  return axios.put("/course", { data });
}

export function deleteCourseApi(data) {
  return axios.delete("/course", { data });
}

export function getCourseApi(params) {
  return axios.get("/course", { params });
}

export function updateCourseApi(data) {
  return axios.post("/course", { data });
}

//Query | Search Operation
export function getCoursesApi(params) {
  return axios.get("/courses", { params });
}
