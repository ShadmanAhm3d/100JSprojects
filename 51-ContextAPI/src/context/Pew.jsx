import { createContext, useState } from "react";

export const PewContext = createContext();

export const PewProvider = (props) => {
  const [favfootballteams, setFavfootballTeams] = useState([
    "madrid",
    "united",
  ]);

  // function now accepts a team argument
  const setTeams = (team) => {
    setFavfootballTeams((prev) => [...prev, team]);
    console.log("inside setTeams...")
  };

  const value = {
    favfootballteams,
    setTeams,
  };

  return (
    <PewContext.Provider value={value}>
      {props.children}
    </PewContext.Provider>
  );
};

