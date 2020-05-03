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
        placeholder="This is the name of the team member."
      />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        name="email"
        placeholder="This is the email of the team meber."
        value={formState.email}
        onChange={changeHandler}
      />
      <label htmlFor="role">Role:</label>
      <input
        type="text"
        name="role"
        placeholder="This is the role of the team meber."
        value={formState.role}
        onChange={changeHandler}
      />
      <button type="submit">Join Team!</button>
    </form>
  );
};

export default LogForm;