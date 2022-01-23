import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
function TableStudentsPm({ students }) {
  const state = useSelector((state) => {
    return {
      user: state.userReducer.user,
      token: state.userReducer.token,
    };
  });

  return (
    <div className="displayStudent">
      <li className="table-row">
        <div className="col col-1" data-label="Job Id">
          {students.id}
        </div>
        <div className="col col-1" data-label="Customer Name">
          {students.fName + " " + students.lName}
        </div>
        <div className="col col-1" data-label="Amount">
          {students.phone}
        </div>
      </li>
    </div>
  );
}

export default TableStudentsPm;
