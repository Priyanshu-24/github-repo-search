import Repos from "./components/Repos/Repos";
import Search from "./components/Search";
import { getQueriedRepos } from "./utils/services";
import { useState } from "react";

const App = () => {
  const [repos, setRepos] = useState([]);

  const searchQueriedRepos = (query) => {
    getQueriedRepos(query).then((res) => {
      setRepos(res?.data);
    });
  };

  return (
    <div>
      <h1>Github Repo Search</h1>
      <Search onSearch={searchQueriedRepos} />
      <Repos repos={repos} />
    </div>
  );
};

export default App;
