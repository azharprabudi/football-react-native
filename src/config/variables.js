import axios from "axios";
export const _axios = axios.create({
  baseURL: "https://api.football-data.org/v1/",
  timeout: 2000,
  headers: {
    "X-Auth-Token": "{API_KEY_FOOTBALL_ORG}"
  }
});
