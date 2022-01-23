import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../reducars/user/actions";
import logout1 from "../../image/logout.png";
import axios from "axios";
import AccountInformation from "./AccountInformation";
import AdminStu from "./AdminStu";
import AdminDrivers from "./AdminDrivers";
function HomeAdmin() {
  const [toggleState, setToggleState] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [driver, setDriver] = useState({
    username: "",
    password: "",
  });
  const state = useSelector((state) => {
    return {
      user: state.userReducer.user,
      token: state.userReducer.token,
    };
  });

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const logout = (e) => {
    const action = removeUser();
    dispatch(action);
    navigate("/");
  };
  //
  const createDriver = () => {
    const data = {
      username: driver.username,
      password: driver.password,
      role: "driver",
    };
    const config = {
      headers: { Authorization: `Bearer ${state.token}` },
    };
    axios
      .post("http://localhost:8080/users/", data, config)

      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="main-Hrader">
        <div className="Logo">
          <img
            src={"https://vstedu.azureedge.net/v9/img/logo_latest.png?v=14"}
          />
        </div>
        <div className="logout">
          <p> logout</p>
          <img className="logout" src={logout1} onClick={logout} />
        </div>
      </div>
      <div className="main">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            My profile
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Students
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Drivers
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <AccountInformation />
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <AdminStu />
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <AdminDrivers />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeAdmin;
