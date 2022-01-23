import { useState } from "react";
import Popup from "reactjs-popup";
import { useSelector } from "react-redux";
import TableStudents from "./TableStudents";
import axios from "axios";
import Swal from "sweetalert2";
function AdminStu() {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({
    fName: "",
    lName: "",
    phone: "",
    isActiveAm: true,
    isActivePm: true,
  });
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const state = useSelector((state) => {
    return {
      user: state.userReducer.user,
      token: state.userReducer.token,
    };
  });
  // createUser
  const createUser = async (e) => {
    e.preventDefault();
    const data = {
      username: user.username,
      password: user.password,
      role: "student",
    };
    const config = {
      headers: { Authorization: `Bearer ${state.token}` },
    };
    await axios
      .post("http://localhost:8080/users/", data, config)
      .then(async (res) => {
        setUser(res.data);
        console.log(res.data);
        console.log("this" + students);
        createStudent(res.data.id);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Username already in use!",
        });

        console.log(err);
      });
  };

  //  create Driver
  const createStudent = (id) => {
    const data = {
      fName: student.fName,
      lName: student.lName,
      phone: student.phone,
      school: {
        id: 1,
      },
      user: {
        id: id,
      },
    };

    const config = {
      headers: { Authorization: `Bearer ${state.token}` },
    };

    axios
      .post("http://localhost:8080/student", data, config)
      .then((res) => {
        console.log(res.data);
        setStudents(res.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been save",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Popup trigger={<button className="field"> create user </button>} modal>
        <span> create user </span>
        <form className="popup_from">
          <label className="labelFrom" for="fname">
            {" "}
            User Name:
          </label>
          <input
            type="email"
            id="email"
            name="text"
            placeholder="User Name"
            onChange={(e) => {
              setUser({ ...user, username: e.target.value });
            }}
          />

          <label className="labelFrom" for="lname">
            password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />

          <label className="labelFrom" for="fname">
            {" "}
            Frist Name:
          </label>
          <input
            type="text"
            id="email"
            name="text"
            placeholder="Frist Name"
            onChange={(e) => {
              setStudent({ ...student, fName: e.target.value });
            }}
          />

          <label className="labelFrom" for="fname">
            {" "}
            Last Name:
          </label>
          <input
            type="text"
            id="email"
            name="text"
            placeholder="Last Name"
            onChange={(e) => {
              setStudent({ ...student, lName: e.target.value });
            }}
          />
          <label className="labelFrom" for="fname">
            {" "}
            Phone:
          </label>
          <input
            type="text"
            id="email"
            name="text"
            placeholder="Phone"
            onChange={(e) => {
              setStudent({ ...student, phone: e.target.value });
            }}
          />

          <button
            className="field addFromCreate"
            onClick={(e) => createUser(e)}
          >
            {" "}
            create{" "}
          </button>
        </form>
      </Popup>
      <TableStudents addedStudents={students} />
    </div>
  );
}
export default AdminStu;
