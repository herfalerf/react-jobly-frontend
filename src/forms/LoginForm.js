import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const INITIAL_STATE = {
    username: "",
    password: "",
  };

  const history = useHistory();
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
    //ADD LOGIN FUNCTION HERE
    setFormData(INITIAL_STATE);
    history.push("/login");
  };

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="text"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
