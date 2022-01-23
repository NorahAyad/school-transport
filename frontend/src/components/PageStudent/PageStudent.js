import InformationStu from "./InformationStu";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logout1 from "../../image/logout.png";
import { removeUser } from "../../reducars/user/actions";

function PageStudent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      user: state.userReducer.user,
      token: state.userReducer.token,
    };
  });

  const logout = (e) => {
    const action = removeUser();
    dispatch(action);
    navigate("/");
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
            <button className="tabs">My profile</button>
          </div>

          <div className="content-tabs">
            <div className="content  active-content">
              <InformationStu />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
export default PageStudent;
