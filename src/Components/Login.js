import React from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const { showAlert } = props;
  const [Credentials, setCredentials] = React.useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const host = "http://localhost:5000";
  const loginUser = async () => {
    const response = await fetch(`${host}/api/auth/LoginUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: Credentials.email,
        password: Credentials.password,
      }),
    });

    const json = await response.json();
    //console.log(json);
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem("token", json.AuthToken);
      showAlert("Logged in Successfully", "success");
      navigate("/");
    } else {
      showAlert("Invalid Credentials", "danger");
    }
  };

  const onchange = (e) => {
    setCredentials({ ...Credentials, [e.target.name]: e.target.value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    loginUser();
  };
  return (
    <>
      <form className="container mt-3" onSubmit={handlesubmit}>
        <div className="mb-3">
          <div className="my-3">
            <h2>Please Login to use the notes</h2>
          </div>
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={onchange}
            name="email"
            value={Credentials.email}
          />
        </div>

        <label htmlFor="inputPassword5" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="inputPassword5"
          className="form-control"
          aria-describedby="passwordHelpBlock"
          onChange={onchange}
          name="password"
          value={Credentials.password}
        />

        <div className="col-12 mt-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
