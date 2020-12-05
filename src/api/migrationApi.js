import axios from "axios";

//CRUD Operations
export function createMigrationApi(data) {
  return axios.put("/migration", { data });
}

export function deleteMigrationApi(data) {
  return axios.delete("/migration", { data });
}

export function getMigrationApi(params) {
  return axios.get("/migration", { params });
}

export function updateMigrationApi(data) {
  return axios.post("/migration", { data });
}

//Query | Search Operation
export function getMigrationsApi(params) {
  return axios.get("/migrations", { params });
}
