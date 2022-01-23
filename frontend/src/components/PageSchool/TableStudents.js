import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import StudentsItem from "./StudentsItem";

function TableStudents({ addedStudents }) {
  const [students, setStudents] = useState([]);
  const state = useSelector((state) => {
    return {
      user: state.userReducer.user,
      token: state.userReducer.token,
    };
  });
  const config = {
    headers: { Authorization: `Bearer ${state.token}` },
  };
  useEffect(() => {
    console.log("effect");
    axios
      .get(`http://localhost:8080/student`, config)
      .then((res) => {
        console.log(res.data);
        if (addedStudents.id === undefined) {
          setStudents(res.data);
        } else {
          setStudents([...res.data]);
        }
        console.log(students);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [addedStudents]);

  return (
    <div className="table">
      <h2>View All Students </h2>
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1">Id</div>
          <div className="col col-1">user Name</div>
          <div className="col col-1"> Name</div>
          <div className="col col-1"> Phone </div>
          <div className="col col-1">Delete</div>
        </li>
        {students.map((students) => {
          return (
            <StudentsItem
              key={students.id}
              students={students}
              setStudents={setStudents}
            />
          );
        })}
      </ul>
    </div>
  );
}
export default TableStudents;
