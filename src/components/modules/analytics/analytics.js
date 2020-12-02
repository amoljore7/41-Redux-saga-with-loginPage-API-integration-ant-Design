import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const Analytics = (props) => {
  return (
    <div className="my-3">
      <h3>Analytics</h3>
    </div>
  );
};

const mapStateToProps = (state) => ({
  employee: state.employee,
  messages: state.messages,
});

export default connect(mapStateToProps, {})(Analytics);
