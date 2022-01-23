import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import TableStudentsPm from "./TableStudentsPm";
import { useNavigate } from "react-router-dom";
function InformationStudentsAm() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
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
      .get(`http://localhost:8080/student/availablePm/`, config)
      .then((res) => {
        setStudents(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const view = () => {
    navigate("/locationAllStudent");
  };
  return (
    <div>
      <div className="table">
        <h2>Students in pm </h2>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Id</div>
            <div className="col col-1"> Name</div>
            <div className="col col-1"> Number</div>
          </li>

          {students.map((students) => {
            return <TableStudentsPm key={students.id} students={students} />;
          })}
        </ul>
      </div>
      <button className="field update" onClick={view}>
        {" "}
        view lacation
      </button>
    </div>
  );
}
export default InformationStudentsAm;
