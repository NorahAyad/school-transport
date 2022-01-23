import Location from "../Location";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
function InformationStu() {
  const [currentPosition, setCurrentPosition] = useState({});

  const [student, setStudent] = useState({
    isActiveAm: "",
    isActivePm: "",
    phone: "",
  });
  const state = useSelector((state) => {
    return {
      user: state.userReducer.user,
      token: state.userReducer.token,
    };
  });
  const update = async (e) => {
    e.preventDefault();
    const data = {
      latitude: currentPosition.lat,
      longitude: currentPosition.lng,
      isActiveAm: student.isActiveAm,
      isActivePm: student.isActivePm,
      phone: student.phone,
    };

    await axios

      .put(`http://localhost:8080/student/${student.id} `, data, config)
      .then(async (res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const config = {
    headers: { Authorization: `Bearer ${state.token}` },
  };
  useEffect(() => {
    console.log("effect");
    axios
      .get(
        `http://localhost:8080/student/getuser/${state.user.username}`,
        config
      )
      .then((res) => {
        setStudent(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="wrapper">
      <div className="title">Account Information</div>
      <form action="#">
        <div className="div-labal">
          <label> Name Student :</label>
          <input
            className="input"
            type="text"
            value={student.fName + " " + student.lName}
          />
        </div>
        <div className="div-labal">
          <label> UserName: </label>
          <input className="input" type="text" value={state.user.username} />
        </div>

        <label className="labal-Active"> ActiveAm: </label>

        <label> true </label>
        <input
          type="radio"
          id="ActiveAm"
          name="ActiveAm"
          value="ActiveAm"
          onClick={(e) => {
            setStudent({ ...student, isActiveAm: "true" });
          }}
        />
        <label> false </label>
        <input
          type="radio"
          id="ActiveAm"
          name="ActiveAm"
          value="ActiveAm"
          onClick={(e) => {
            setStudent({ ...student, isActiveAm: "false" });
          }}
        />

        <div className="">
          <label className="labal-Active"> ActivePm: </label>
          <label> true </label>
          <input
            type="radio"
            id="ActivePm"
            name="ActivePm"
            value="ActivePm"
            onClick={(e) => {
              setStudent({ ...student, isActivePm: "true" });
            }}
          />
          <label> false </label>
          <input
            type="radio"
            id="ActivePm"
            name="ActivePm"
            value="ActivePm"
            onClick={(e) => {
              setStudent({ ...student, isActivePm: "false" });
            }}
          />
        </div>

        <Location
          currentPosition={currentPosition}
          setCurrentPosition={setCurrentPosition}
        />

        <button className="field update" onClick={(e) => update(e)}>
          {" "}
          update
        </button>
      </form>
    </div>
  );
}
export default InformationStu;
