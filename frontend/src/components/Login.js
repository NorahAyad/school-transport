import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, addToken } from "../reducars/user/actions";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Swal from "sweetalert2";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const state = useSelector((state) => {
    return {
      user: state.userReducer.user,
    };
  });

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    const data = {
      username: email,
      password,
    };

    axios
      .post("http://localhost:8080/login", data)
      .then((res) => {
        console.log(res.data);
        console.log(res.data.access_token);
        const token = res.data.access_token;
        const decoded = jwt_decode(token);
        console.log(decoded);
        // add to redux
        const user_action = addUser({
          id: decoded.id,
          username: decoded.sub,
        });
        const token_action = addToken(token);
        dispatch(user_action);
        dispatch(token_action);

        if (decoded.roles === "school") {
          navigate("/home");
        } else if (decoded.roles === "driver") {
          navigate(`/driver/${decoded.sub}`);
        } else {
          navigate(`/student/${decoded.sub}`);
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "The username or password is incorrect",
        });
        console.log(err);
      });
  };

  return (
    <>
      <div className="wrapper-login wrapper">
        <div className="title">Login </div>
        <form>
          <div className="div-labal">
            <label> UserName: </label>
            <input className="input" type="text" onChange={handleChangeEmail} />
          </div>
          <div className="div-labal">
            <label>Password: </label>
            <input
              className="input"
              type="Password"
              onChange={handleChangePassword}
            />
          </div>
          <div className="div-labal"></div>

          <button className="field buttonLogin" onClick={addTodo}>
            {" "}
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
