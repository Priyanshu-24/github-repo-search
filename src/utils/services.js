import axios from "axios";

export const getQueriedRepos = (query, sortValue) =>
  axios.get(
    `${
      import.meta.env.VITE_BASE_URL
    }/search/repositories?q=${query}&sort=${sortValue}`
  );
