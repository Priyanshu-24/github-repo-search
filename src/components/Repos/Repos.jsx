import RepoCard from "./RepoCard";

const Repos = ({ repos }) => {
  return (
    <div className="repo-container">
      {repos?.items?.map((repo) => (
        <RepoCard key={repo?.id} repo={repo} />
      ))}
    </div>
  );
};

export default Repos;
