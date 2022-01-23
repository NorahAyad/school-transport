import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import DriverItem from "./DriverItem";
import Popup from "reactjs-popup";
import Swal from "sweetalert2";

function TableDrivers({ addedDrivers }) {
  const [drivers, setDrivers] = useState([]);
  const state = useSelector((state) => {
    return {
      user: state.userReducer.user,
      token: state.userReducer.token,
    };
  });
  const [addStudent, setAddStudent] = useState({
    driveId: "",
    studentId: "",
  });
  const config = {
    headers: { Authorization: `Bearer ${state.token}` },
  };
  useEffect(() => {
    console.log("effect");
    axios
      .get(`http://localhost:8080/driver/`, config)
      .then((res) => {
        console.log(res.data);
        if (addedDrivers.id === undefined) {
          setDrivers(res.data);
        } else {
          setDrivers([...res.data]);
        }
        console.log(drivers);
        //   console.log(drivers[0].fName+" "+ drivers[0].lName);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [addedDrivers]);

  const AddStudent = async (e) => {
    e.preventDefault();
    const data = {
      drive: { id: addStudent.driveId },
      studentId: addStudent.studentId,
    };
    const config = {
      headers: { Authorization: `Bearer ${state.token}` },
    };
    await axios

      .post(`http://localhost:8080/driver/add_student `, data, config)
      .then(async (res) => {
        console.log(res.data);
        console.log("this" + drivers);
        setDrivers(res.data);
        Swal.fire({
          title: "Do you want to save the changes?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Saved!", "", "success");
          } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
          }
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        console.log(err);
      });
  };

  return (
    <>
      <Popup trigger={<button className="field"> Add Student </button>} modal>
        <span> Add Student </span>
        <br />
        <form className="popup_from">
          <label className="labelFrom" for="fname">
            {" "}
            Id Student:
          </label>
          <input
            type="email"
            id="email"
            name="text"
            onChange={(e) => {
              setAddStudent({ ...addStudent, studentId: e.target.value });
            }}
          />
          <label className="labelFrom" for="lname">
            Id driver:
          </label>
          <input
            type="text"
            id="password"
            name="password"
            onChange={(e) => {
              setAddStudent({ ...addStudent, driveId: e.target.value });
            }}
          />

          <br />
          <br />
          <br />

          <button className="field addFrom" onClick={(e) => AddStudent(e)}>
            {" "}
            Add{" "}
          </button>
        </form>
      </Popup>

      <div className="table">
        <h2>View All Drivers </h2>
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-1">Id</div>
            <div className="col col-1">user Name</div>
            <div className="col col-1"> Name</div>
            <div className="col col-1"> Phone</div>
            <div className="col col-1">Student</div>
            <div className="col col-1">Delete</div>
          </li>
          {drivers.map((drivers) => {
            return (
              <DriverItem
                key={drivers.id}
                drivers={drivers}
                setDrivers={setDrivers}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default TableDrivers;
