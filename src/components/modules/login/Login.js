// import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import { userLogin } from "../../../actions/auth/authActions";
// import { withRouter } from "react-router-dom";
// import { createStyles, makeStyles } from "@material-ui/core/styles";
// import {
//   Button,
//   Typography,
//   Box,
//   TextField,
//   Link,
//   Grid,
// } from "@material-ui/core";
// // import { isCurrentUserCookie } from "../../../utils/app-cookies";
// // import AcmeLogo from "../../../assets/img/acme-logo.png";
// import CircularProgress from "@material-ui/core/CircularProgress";

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     paper: {
//       marginTop: theme.spacing(8),
//       flexDirection: "column",
//       alignItems: "center",
//     },
//     title: {
//       fontSize: "1.6rem",
//       fontWeight: "bold",
//       flexGrow: 1,
//       color: "white",
//       display: "inline",
//     },
//     form: {
//       width: "100%",
//       marginTop: theme.spacing(1),
//     },
//     submit: {
//       margin: theme.spacing(3, 0, 2),
//       backgroundColor: "#E8AB4C",
//       color: "white",
//       height: "60px",
//       fontSize: "20px",
//       "&:hover": {
//         backgroundColor: "#E8AB4C",
//       },
//       "&:disabled": {
//         color: "white",
//         backgroundColor: "#EDC078",
//       },
//     },
//     // AcmeLogo: {
//     //   display: "inline",
//     //   height: "50px",
//     //   marginLeft: "20px",
//     //   marginRight: "10px",
//     // },
//     logoSection: {
//       height: "100vh",
//       backgroundColor: "#2e5bff",
//     },
//     logoText: {
//       color: "#ffffff",
//       paddingLeft: "6rem",
//       paddingTop: "2rem",
//       fontWeight: "bold",
//     },
//     // errorMessage: {
//     //   color: "red",
//     // },
//     circularProgress: {
//       marginLeft: 0,
//       color: "white",
//       marginRight: "20px",
//     },
//     link: {
//       fontSize: "20px",
//     },
//     textField: {
//       paddingBottom: "3vh",
//     },
//     typography: {
//       font: "normal normal bold 45px / 58px Calibri",
//       paddingBottom: "8vh",
//     },
//     box: {
//       marginTop: "5rem",
//       display: "grid",
//       justifyContent: "center",
//     },

//     box1: {
//       display: "flex",
//       justifyContent: "center",
//       marginTop: "30px",
//     },
//     box2: {
//       display: "flex",
//       alignItems: "center",
//       marginTop: "10px",
//     },
//     img: {
//       width: "60vh",
//       height: "70vh",
//     },
//   })
// );

// const Login = (props) => {
//   const { userLogin } = props;
//   const [submitbtnDisabled, setSubmitBtnDisabled] = useState(false);
//   const classes = useStyles();
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });
//   const inputChangeHandler = (e) => {
//     const { name, value } = e.target;
//     setFormData((formData) => ({ ...formData, [name]: value }));
//     if (!formData.username.trim() || !value.trim()) {
//       setSubmitBtnDisabled(true);
//     } else {
//       setSubmitBtnDisabled(false);
//     }
//   };

//   const formSubmitHandler = (event) => {
//     event.preventDefault();
//     userLogin(formData);
//   };

//   useEffect(() => {
//     setSubmitBtnDisabled(true);
//   }, []);

//   return (
//     <>
//       <Grid container spacing={0}>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={6}
//           lg={6}
//           className={classes.logoSection}
//         >
//           <Box className={classes.box2}>
//             {/* <img src={AcmeLogo} className={classes.AcmeLogo} /> */}
//             <Typography variant="h6" className={classes.title}>
//               MACE
//             </Typography>
//           </Box>
//           <Box className={classes.box1}>
//             {/* <img
//               src={require("../../../assets/img/unlock-400px.png")}
//               alt="My Login Page"
//               className={classes.img}
//             ></img> */}
//           </Box>
//         </Grid>
//         <Grid item xs={12} sm={12} md={6} lg={6}>
//           <Box className={classes.box}>
//             <Typography component="h1" className={classes.typography}>
//               Sign in
//             </Typography>
//             <form onSubmit={formSubmitHandler} noValidate={true}>
//               <TextField
//                 variant="outlined"
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="username"
//                 label="Username"
//                 name="username"
//                 autoComplete="username"
//                 className={classes.textField}
//                 onChange={inputChangeHandler}
//                 value={formData.username}
//               />
//               <TextField
//                 variant="outlined"
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="password"
//                 className={classes.textField}
//                 onChange={inputChangeHandler}
//                 value={formData.password}
//               />
//               {/* <Box>
//                 <Typography className={classes.errorMessage}>
//                   {ErrorString(error) || error}
//                 </Typography>
//               </Box> */}
//               <Box>
//                 <Link href="#" variant="body2" className={classes.link}>
//                   Forgot password?
//                 </Link>
//               </Box>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 disabled={submitbtnDisabled}
//                 className={classes.submit}
//               >
//                 {props.auth.loading ? (
//                   <CircularProgress
//                     className={classes.circularProgress}
//                     size={30}
//                   />
//                 ) : (
//                   "Login"
//                 )}
//               </Button>
//             </form>
//           </Box>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

// export default connect(mapStateToProps, { userLogin })(withRouter(Login));

import React, { useState, useEffect } from "react";
import { Form, Input, Button, Card, Col, Row } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.scss";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { userLogin } from "../../../actions/auth/authActions";
import { withRouter } from "react-router-dom";
import acme from "../../../images/acme-main.png";

const Login = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (props.auth.isAuthenticated) {
      props.history.push("/dashboard");
    }
  }, [props.auth]);

  const loginHandler = (values) => {
    const user = {
      username: name,
      password: password,
    };
    props.userLogin(user);
  };

  const cardTitle = (
    <div
      className="d-flex justify-content-center"
      style={{ padding: "6px 0 0 0", marginLeft: "20px" }}
    >
      <img width="110" height="80" src={acme} />
    </div>
  );

  return (
    <div className="container login">
      <Row justify="center">
        <Col sm={16} md={12} lg={8}>
          <Card title={cardTitle} bordered={true} className="my-3">
            <Form
              name="login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={loginHandler}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                  size="large"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Password"
                  size="large"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  block
                  id="submit"
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
Login.propTypes = {
  userLogin: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { userLogin })(withRouter(Login));
