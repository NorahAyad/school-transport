import Location from "../Location";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
function AccountInformation() {
  const [currentPosition, setCurrentPosition] = useState({});
  const [school, setSchool] = useState({
    name: "",
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
      name: school.name,
    };
    const config = {
      headers: { Authorization: `Bearer ${state.token}` },
    };
    await axios

      .put(`http://localhost:8080/school/1 `, data, config)
      .then(async (res) => {
        setSchool(res.data);
        console.log(res.data);

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
        console.log(err);
      });
  };

  return (
    <div className="wrapper">
      <div className="title">Account Information</div>
      <form action="#">
        <div className="div-labal">
          <label>Name School:</label>
          <input
            className="input"
            type="text"
            onChange={(e) => {
              setSchool({ ...school, name: e.target.value });
            }}
          />
        </div>
        <div className="div-labal">
          <label> UserName: </label>
          <input
            className="input"
            type="text"
            required
            value={state.user.username}
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
export default AccountInformation;
