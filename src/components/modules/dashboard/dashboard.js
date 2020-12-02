import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import ListItemText from "@material-ui/core/ListItemText";
import CircularProgressOverlay from "../../utils/circular-progress-overlay";

import { getEmployeeList } from "../../../actions/employee/employeeActions";

const Dashboard = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (Object.keys(props.employee.employeeList).length > 0) {
      setData(props.employee.employeeList);
    }
  }, [props.employee.employeeList]);

  const listItems = data.map((d) => <li key={d.originCity}>{d.originCity}</li>);

  const getData = () => {
    props.getEmployeeList();
  };
  if (props.employee.loading) {
    return (
      <div>
        <CircularProgressOverlay />
      </div>
    );
  } else {
    return (
      <div className="my-3">
        <h3>Dashboard</h3>
        <Button variant="contained" color="primary" onClick={getData}>
          Get Data
        </Button>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem>
            <ListItemText primary={listItems} />;
          </ListItem>
        </List>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  employee: state.employee,
  messages: state.messages,
});

export default connect(mapStateToProps, { getEmployeeList })(Dashboard);
