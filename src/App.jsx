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

  console.log(repos);

  return (
    <div>
      <h1>Github Repo Search</h1>
      <Search onSearch={searchQueriedRepos} />
    </div>
  );
};

export default App;
