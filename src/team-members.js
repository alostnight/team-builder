import React from "react";

const Teams = props => {
  return (
    <div className="member-list">
      {props.teams.map(team => (
        <div className="team" key={team.id}>
          <h2>{team.name}</h2>
          <p>{team.email}</p>
          <p>{team.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Teams;