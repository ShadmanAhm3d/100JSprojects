import React, { useContext, useState } from "react";
import { useAuth as shadman } from "../context/AuthContext";
import { PewContext } from "../context/Pew";

const DashBoard = () => {
  const pewContext = useContext(PewContext);
  const { favfootballteams, setTeams } = pewContext;
  const [newteam, setNewTeam] = useState("");

  const { user } = shadman();

  const onChangeHandler = (e) => {
    const newteams = e.target.value;
    if (newteams.trim()) {
      // <-- correct usage
      setNewTeam(newteams);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("inside submitHandler....");
    if (newteam.trim()) {
      // <-- correct usage
      setTeams(newteam);
    }
    setNewTeam("");
  };
  return (
    <>
      <div>THis is dashboard for {user.name}</div>

      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="team">New Team</label>
          <input
            type="text"
            placeholder="newteam"
            value={newteam}
            onChange={onChangeHandler}
          />
        </div>

        <button type="submit">Add new Twam</button>
      </form>

      <div>
        {favfootballteams.map((team, idx) => {
          return <p key={idx}>{team}</p>;
        })}
      </div>
    </>
  );
};

export default DashBoard;
