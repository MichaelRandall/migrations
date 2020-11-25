import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/members/";

export function getMembers() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
