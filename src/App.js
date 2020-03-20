import React, { useState } from "react";
import ReactDOM from "react-dom";
import Teams from "./team-members";
import LogForm from "./log-form";
import "./App.css";

function App() {
  const [formState, setFormState] = useState([
    {
      id: 1,
      name: "Jose Paquian",
      email: "alostnight1993@outlook.com",
      role: "React"
    }
  ]);

  const addFormHandler = newForm => {
    console.log("adding team memeber", newForm);
    setFormState([...formState, newForm]);
  };

  return (
    <div className="App">
      <h1>My Team</h1>
      <LogForm addForm={addFormHandler} />
      <Teams teams={formState} />
    </div>
  );
}

export default App;
