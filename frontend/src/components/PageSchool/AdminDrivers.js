import { useState } from "react";
import Popup from "reactjs-popup";
import { useSelector } from "react-redux";
import TableDrivers from "./TableDrivers";
import axios from "axios";
import Swal from "sweetalert2";
function AdminDrivers() {
  const [drivers, setDrivers] = useState([]);
  const [driver, setDriver] = useState({
    fName: "",
    lName: "",
    phone: "",
  });
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [addStudent, setAddStudent] = useState({
    driveId: "",
    studentId: "",
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
      role: "driver",
    };
    const config = {
      headers: { Authorization: `Bearer ${state.token}` },
    };
    await axios
      .post("http://localhost:8080/users/", data, config)
      .then(async (res) => {
        setUser(res.data);
        console.log(res.data);
        console.log("this" + drivers);
        createDriver(res.data.id);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Username already in use",
          footer: '<a href="">Why do I have this issue?</a>',
        });
        console.log(err);
      });
  };

  //  create Driver
  const createDriver = (id) => {
    const data = {
      fName: driver.fName,
      lName: driver.lName,
      phone: driver.phone,
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
      .post("http://localhost:8080/driver/", data, config)
      .then((res) => {
        console.log(res.data);
        setDrivers(res.data);

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
    <>
      <div className="divButton">
        <Popup
          trigger={<button className="field buttonPopup"> create user </button>}
          modal
        >
          <div className="title">create user</div>

          <form className="popup_from">
            <label className="labelFrom" for="fname">
              {" "}
              User Name:
            </label>
            <input
              type="email"
              onChange={(e) => {
                setUser({ ...user, username: e.target.value });
              }}
            />

            <label className="labelFrom" for="lname">
              password:
            </label>
            <input
              type="password"
              value={driver.password}
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
              name="text"
              value={driver.username}
              onChange={(e) => {
                setDriver({ ...driver, fName: e.target.value });
              }}
            />

            <label className="labelFrom" for="fname">
              {" "}
              Last Name:
            </label>
            <input
              type="text"
              value={driver.lName}
              onChange={(e) => {
                setDriver({ ...driver, lName: e.target.value });
              }}
            />

            <label className="labelFrom" for="fname">
              {" "}
              Phone:
            </label>
            <input
              type="text"
              value={driver.username}
              onChange={(e) => {
                setDriver({ ...driver, phone: e.target.value });
              }}
            />

            <button
              className="field addFromCreate"
              onClick={(e) => createUser(e)}
            >
              create user{" "}
            </button>
          </form>
        </Popup>
        <TableDrivers addedDrivers={drivers} />
      </div>
    </>
  );
}
export default AdminDrivers;
