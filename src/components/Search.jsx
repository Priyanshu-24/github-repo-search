import Sort from "./Sort";
import { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [sortValue, setSortValue] = useState("");

  const handleChange = (e) => {
    setQuery(e?.target?.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query, sortValue);
  };

  const handleSortChange = (e) => {
    setSortValue(e?.target?.value);
    onSearch(query, e?.target?.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for repositories"
        />
        <button type="submit" disabled={!query?.length}>
          Search
        </button>
        <Sort sortBy={sortValue} handleSortChange={handleSortChange} />
      </form>
    </>
  );
};

export default Search;
