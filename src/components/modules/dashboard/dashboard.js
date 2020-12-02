import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CircularProgressOverlay from "../../utils/circular-progress-overlay";
import { List, Button, Typography, Divider } from "antd";

import { getEmployeeList } from "../../../actions/employee/employeeActions";

const Dashboard = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (Object.keys(props.employee.employeeList).length > 0) {
      setData(props.employee.employeeList);
    }
  }, [props.employee.employeeList]);

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
        <Button type="primary" onClick={getData}>
          {" "}
          Get Data
        </Button>
        <List
          size="small"
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={(item) => <List.Item>{item.originCity}</List.Item>}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  employee: state.employee,
  messages: state.messages,
});

export default connect(mapStateToProps, { getEmployeeList })(Dashboard);
