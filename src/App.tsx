import * as React from "react";
import PlayersContainer from "./containers/PlayersContainer";

export const App: React.FC<{}> = () => {
  return (
    <>
      <h1>Savage Shadowrun Initiative Tracker</h1>
      <PlayersContainer/>
    </>
  );
};