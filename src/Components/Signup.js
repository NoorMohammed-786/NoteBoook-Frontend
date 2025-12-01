import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const { showAlert } = props;
  const [Credentials, setCredentials] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const handlesubmit = (e) => {
    e.preventDefault();
    signupUser();
  };
  const onchange = (e) => {
    setCredentials({ ...Credentials, [e.target.name]: e.target.value });
  };
  const host = "http://localhost:5000";
  const navigate = useNavigate();
  const signupUser = async () => {
    const response = await fetch(`${host}/api/auth/CreateUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: Credentials.name,
        email: Credentials.email,
        password: Credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      showAlert("Account Created Successfully", "success");
      navigate("/");
    } else {
      showAlert("Invalid Credentials", "danger");
    }
  };

  return (
    <div>
      <>
        <form className="container mt-3" onSubmit={handlesubmit}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Name
            </label>
            <input
              type="name"
              className="form-control"
              id="exampleFormControlInput1"
              onChange={onchange}
              name="name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput2" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput2"
              onChange={onchange}
              name="email"
              required
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
            required
            minLength={5}
          />

          <div className="col-12 mt-3">
            <button type="submit" className="btn btn-primary">
              Sign-Up
            </button>
          </div>
        </form>
      </>
    </div>
  );
};

export default Signup;
