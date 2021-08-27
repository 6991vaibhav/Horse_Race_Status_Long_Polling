import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "../redux/react-redux-hooks";
import {
  loginToRaceDashboard,
  updateLoginToken,
} from "../redux/actions/loginActions";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const loginCred = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    loginToRaceDashboard(loginCred).then((res) => {
      dispatch(
        updateLoginToken({
          ...loginCred,
          token: res.data.token,
        })
      );
      history.push("/race");
    });
  };

  return (
    <div className="login-wrapper">
      <h3>Login</h3>
      <form onSubmit={handleLogin}>
        <div className="login-cred-wrapper">
          <label>Email: </label>
          <input
            type="email"
            ref={emailRef}
            placeholder="Enter email address..."
            required
          />
        </div>
        <div className="login-cred-wrapper">
          <label>Password: </label>
          <input
            type="password"
            ref={passwordRef}
            placeholder="Enter password..."
            required
          />
        </div>
        <div className="btn-wrapper">
          <button type="submit" className="btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
