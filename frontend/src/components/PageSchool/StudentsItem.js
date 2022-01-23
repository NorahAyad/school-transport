import axios from "axios";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
function StudentsItem({ students, setStudents }) {
  const state = useSelector((state) => {
    return {
      user: state.userReducer.user,
      token: state.userReducer.token,
    };
  });

  const deleteStudent = () => {
    console.log(" this" + students.id);
    const config = {
      headers: { Authorization: `Bearer ${state.token}` },
    };
    axios
      .delete(`http://localhost:8080/student/${students.id}`, config)
      .then((res) => {
        console.log(res.data);
        setStudents(res.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been delete",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="displayStudent">
      <li className="table-row">
        <div className="col col-1" data-label="Job Id">
          {students.id}
        </div>
        <div className="col col-1" data-label="Job Id">
          {students.user.username}
        </div>
        <div className="col col-1" data-label="Customer Name">
          {students.fName + " " + students.lName}
        </div>
        <div className="col col-1" data-label="Amount">
          {students.phone}
        </div>
        <div className="col col-1" data-label="Payment Status">
          {" "}
          <button className="field" onClick={deleteStudent}>
            {" "}
            Delete{" "}
          </button>{" "}
        </div>
      </li>
    </div>
  );
}

export default StudentsItem;
