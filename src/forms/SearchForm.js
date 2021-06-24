import React, { useState } from "react";

const SearchForm = () => {
  const INITIAL_STATE = {
    search: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //ADD search FUNCTION HERE
    setFormData(INITIAL_STATE);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search"></label>
        <input
          id="search"
          type="text"
          name="search"
          placeholder="Enter search term..."
          value={formData.search}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchForm;
