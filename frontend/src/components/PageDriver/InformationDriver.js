import Location from "../Location";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
function InformationDriver() {
  const [currentPosition, setCurrentPosition] = useState({});

  const [driver, setDriver] = useState({
    phone: "",
  });
  const state = useSelector((state) => {
    return {
      user: state.userReducer.user,
      token: state.userReducer.token,
    };
  });
  const config = {
    headers: { Authorization: `Bearer ${state.token}` },
  };

  const update = async (e) => {
    e.preventDefault();
    const data = {
      latitude: currentPosition.lat,
      longitude: currentPosition.lng,
      phone: driver.phone,
    };

    await axios

      .put(`http://localhost:8080/driver/${driver.id} `, data, config)
      .then(async (res) => {
        // setSchool(res.data)
        console.log(res.data);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log("effect");
    axios
      .get(
        `http://localhost:8080/driver/getuser/${state.user.username}`,
        config
      )
      .then((res) => {
        setDriver(res.data);
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
          <label> Name driver :</label>
          <input
            className="input"
            type="text"
            value={driver.fName + " " + driver.lName}
          />
        </div>
        <div className="div-labal">
          <label> UserName: </label>
          <input className="input" type="text" value={state.user.username} />
        </div>

        <div className="div-labal">
          <label>phone </label>
          <input
            className="input"
            type="text"
            value={driver.phone}
            onChange={(e) => {
              setDriver({ ...driver, phone: e.target.value });
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
export default InformationDriver;
