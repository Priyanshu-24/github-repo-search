import axios from "axios";

const BASE_URL = "https://api.github.com";

export const getQueriedRepos = (query) =>
  axios.get(`${BASE_URL}/search/repositories?q=${query}`);
