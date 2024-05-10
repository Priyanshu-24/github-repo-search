const RepoCard = ({ repo }) => {
  return (
    <div>
      <img src={repo?.owner?.avatar_url} alt="avatar" />
      <h2>{repo?.name}</h2>
      <p>Stars: {repo?.stargazers_count}</p>
      <p>Description:{repo?.description}</p>
      <p>Language: {repo?.language}</p>
    </div>
  );
};

export default RepoCard;
