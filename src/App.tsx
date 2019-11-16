import * as React from "react";
import PlayersContainer from "./containers/PlayersContainer";
import { Typography } from '@material-ui/core';

export const App: React.FC<{}> = () => {
  return (
    <>
      <PlayersContainer/>
    </>
  );
};