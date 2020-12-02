import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import "./App.css";
import { Layout, message } from "antd";
import Home from "./components/modules/home/home";
import Dashboard from "./components/modules/dashboard/dashboard";
import Patients from "./components/modules/patients/patients";
import Resources from "./components/modules/resources/resources";
import Analytics from "./components/modules/analytics/analytics";
import Login from "./components/modules/login/Login";
import PrivateRoute from "./components/utils/PrivateRoute";
import Navbar from "./components/modules/navbar/navbar";
import CircularProgressOverlay from "./components/utils/circular-progress-overlay";

const { Content } = Layout;
const App = (props) => {
  useEffect(() => {
    if (props.messages.success.length) {
      props.messages.success.map((msg) => message.success(msg.text));
    }
    if (props.messages.error.length) {
      props.messages.error.map((msg) => message.error(msg.text));
    }
  }, [props.messages]);
  return (
    <div className="App">
      {props.auth.isAuthenticated ? <Navbar /> : ""}
      <Route
        exact
        path="/"
        render={() =>
          props.auth.isAuthenticated ? <Redirect to="/home" /> : <Login />
        }
      />
      <Layout className="container">
        <Content
          className="site-layout-background"
          style={
            props.auth.isAuthenticated
              ? {
                  padding: 24,
                  margin: 0,
                  minHeight: "90vh",
                }
              : {}
          }
        >
          <Suspense fallback={<CircularProgressOverlay />}>
            <Switch>
              <PrivateRoute exact path="/home" component={Home} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/patients" component={Patients} />
              <PrivateRoute exact path="/resources" component={Resources} />
              <PrivateRoute exact path="/analytics" component={Analytics} />
            </Switch>
          </Suspense>
        </Content>
      </Layout>
    </div>
  );
};

App.propTypes = {
  auth: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  messages: state.messages,
});

export default connect(mapStateToProps, {})(App);
