import React, { FC } from "react";
import { Link } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../theme";

import { Button } from "@material-ui/core";

const Main: FC<{}> = () => (
  <ThemeProvider theme={theme}>
    <Link to="/characters">
      <Button variant="contained" color="primary">
        Персонажі
      </Button>
    </Link>
    <Link to="/planets">
      <Button variant="contained" color="primary">
        Планети
      </Button>
    </Link>
  </ThemeProvider>
);

export default Main;
