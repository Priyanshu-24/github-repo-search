const Sort = ({ sortBy, handleSortChange }) => {
  const sortOptions = [
    { value: "", label: "---Select---" },
    { value: "stars", label: "Stars" },
    { value: "watchers_count", label: "Watchers Count" },
    { value: "score", label: "Score" },
    { value: "name", label: "Name" },
    { value: "created_at", label: "Created At" },
    { value: "updated_at", label: "Updated At" },
  ];

  return (
    <div className="sort-container">
      <label className="sort-label" htmlFor="sort">
        Sort By:
      </label>
      <select
        className="sort-select"
        id="sort"
        value={sortBy}
        onChange={handleSortChange}
      >
        {sortOptions.map((option) => (
          <option key={option?.value} value={option?.value}>
            {option?.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Sort;
