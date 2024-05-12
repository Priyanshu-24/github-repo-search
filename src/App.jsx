import Repos from "./components/Repos/Repos";
import Search from "./components/Search";
import { getQueriedRepos } from "./utils/services";
import { useState } from "react";

const App = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noRepoPresent, setNoRepoPresent] = useState(false);

  const searchQueriedRepos = (query, sortValue) => {
    setLoading(true);
    setNoRepoPresent(false);
    getQueriedRepos(query, sortValue)
      .then((res) => {
        setRepos(res?.data);
        if (!res?.data?.items?.length) setNoRepoPresent(true);
      })
      .catch((err) => {
        console.log({ err });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="container">
      <div className="title">Github Repo Search</div>
      <Search onSearch={searchQueriedRepos} />
      {loading ? (
        <div className="loading-container">
          <div className="loading-title">Loading Repos...</div>
        </div>
      ) : noRepoPresent ? (
        <div className="loading-container">
          <div className="loading-title">
            No Repos found for the given keyword
          </div>
        </div>
      ) : (
        <Repos repos={repos} />
      )}
    </div>
  );
};

export default App;
