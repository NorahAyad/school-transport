import InformationDriver from "./InformationDriver";
import InformationStudentsAm from "./InformationStudentsAm";
import InformationStudentsPm from "./InformationStudentsPm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logout1 from "../.././image/logout.png";
import { removeUser } from "../../reducars/user/actions";

function PageDriver() {
  const [toggleState, setToggleState] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    navigate("/login");
  };
  return (
    <div>
      <>
        <div className="main-Hrader">
          <div className="Logo">
            <img
              src={"https://vstedu.azureedge.net/v9/img/logo_latest.png?v=14"}
            />
          </div>
          <div className="logout">
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
              Students Am
            </button>

            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              Students Pm
            </button>
          </div>

          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <InformationDriver />
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <InformationStudentsAm />
            </div>
            <div
              className={
                toggleState === 3 ? "content  active-content" : "content"
              }
            >
              <InformationStudentsPm />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
export default PageDriver;
