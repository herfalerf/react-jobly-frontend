import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const ProfileForm = () => {
  const INITIAL_STATE = {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
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
    history.push("/profile");
  };

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label htmlFor="firstname">First Name</label>
        <input
          id="firstname"
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
        />
        <label htmlFor="lastname">Last name</label>
        <input
          id="lastname"
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
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

export default ProfileForm;
