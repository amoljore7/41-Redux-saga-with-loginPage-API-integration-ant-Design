//* material-ui  /

// import React from "react";
// import { makeStyles, theme, createStyles } from "@material-ui/core/styles";
// import { Box, CircularProgress } from "@material-ui/core";

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     root: {
//       position: "fixed",
//       zIndex: 1000001,
//       left: 0,
//       top: 0,
//       background: "none repeat scroll 0 0 black",
//       opacity: 0.7,
//       height: "100%",
//       width: "100%",
//     },
//   })
// );

// const CircularProgressOverlay = () => {
//   const classes = useStyles();
//   return (
//     <Box
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       className={classes.root}
//     >
//       <CircularProgress />
//     </Box>
//   );
// };

// export default CircularProgressOverlay;

//* ant Design  /

import React from "react";
import { Spin, Space } from "antd";

const CircularProgressOverlay = () => {
  return (
    <Space
      size="middle"
      style={{
        position: "fixed",
        zIndex: 1000001,
        left: 0,
        top: 0,
        background: "none repeat scroll 0 0 black",
        opacity: 0.7,
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Spin size="large" />
    </Space>
  );
};

export default CircularProgressOverlay;
