import React, { useState } from "react";

const LogForm = props => {


  const [formState, setFormState] = useState({
    name: "",
    email: "",
    role: ""
  });
  console.log(formState);

  const changeHandler = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    props.addForm({
      ...formState,
      id: Date.now()
    });

    setFormState({
      name: "",
      email: "",
      role: ""
    });
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        value={formState.name}
        onChange={changeHandler}
        placeholder="Enter Name."
      />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        name="email"
        placeholder="Enter Email."
        value={formState.email}
        onChange={changeHandler}
      />
      <label htmlFor="role">Role:</label>
      <input
        type="text"
        name="role"
        placeholder="What Is Their Role."
        value={formState.role}
        onChange={changeHandler}
      />
      <button type="submit">Join Team!</button>
    </form>
  );
};

export default LogForm;