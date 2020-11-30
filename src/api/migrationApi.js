import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/migrations/";

export function getMigrations() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveMigration(migration) {
  return fetch(baseUrl + (migration.id || ""), {
    method: migration.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(migration),
  })
    .then(handleResponse)
    .catch(handleError);
}

// export function deleteCourse(courseId) {
//   return fetch(baseUrl + courseId, { method: "DELETE" })
//     .then(handleResponse)
//     .catch(handleError);
// }
