const RepoCard = ({ repo }) => {
  return (
    <div className="repo-card">
      <img src={repo?.owner?.avatar_url} alt="Avatar" className="avatar" />
      <div className="repo-info">
        <h2 className="repo-name">{repo?.name}</h2>
        <p className="stars">Stars: {repo?.stargazers_count}</p>
        <p className="language">Language: {repo?.language}</p>
        <div>
          <div className="description-title">Description:</div>
          <div className="description">{repo?.description}</div>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
