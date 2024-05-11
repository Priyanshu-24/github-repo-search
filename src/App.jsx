import Repos from "./components/Repos/Repos";
import Search from "./components/Search";
import { getQueriedRepos } from "./utils/services";
import { useState } from "react";

const App = () => {
  const [repos, setRepos] = useState([]);

  const searchQueriedRepos = (query, sortValue) => {
    getQueriedRepos(query, sortValue).then((res) => {
      setRepos(res?.data);
    });
  };

  return (
    <div className="container">
      <div className="title">Github Repo Search</div>
      <Search onSearch={searchQueriedRepos} />
      <Repos repos={repos} />
    </div>
  );
};

export default App;
