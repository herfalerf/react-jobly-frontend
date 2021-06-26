import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//LoginForm component, displays a login form.  Receives the login function form App component.

const LoginForm = ({ login }) => {
  const INITIAL_STATE = {
    username: "",
    password: "",
  };

  const history = useHistory();
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [formErrors, setFormErrors] = useState([]);

  console.debug(
    "LoginForm",
    "login=",
    typeof login,
    "formData=",
    formData,
    "formErrors",
    formErrors
  );

  //function for handling change in form data.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  //function for handling submit of form data.
  async function handleSubmit(e) {
    e.preventDefault();
    let result = await login(formData);
    if (result.success) {
      //Pushes /companies route to history.
      history.push("/companies");
    } else {
      setFormErrors(result.errors);
    }
  }

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
          type="password"
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
