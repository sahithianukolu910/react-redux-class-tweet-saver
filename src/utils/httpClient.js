import axios from "axios";

export function get(url) {
  return axios.get(url);
}

export function post(url, request) {
  return axios.post(url, request);
}
