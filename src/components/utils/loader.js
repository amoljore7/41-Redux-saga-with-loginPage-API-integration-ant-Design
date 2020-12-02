import React from "react";
import { makeStyles, theme, createStyles } from "@material-ui/core/styles";
import { Box, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      position: "absolute",
      height: "100%",
      width: "100%",
      zIndex: 1000001,
      left: 0,
      top: 0,
      background: "white",
      opacity: 0.7,
    },
  })
);

const Loader = () => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
