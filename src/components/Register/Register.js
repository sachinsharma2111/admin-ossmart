import React from "react";
import Logo1 from "../../Assets/Logo1.png";
import "./Register.css";

function Register() {
  return (
    <div>
      <div className="wholebody01">
        <div className="wrapper">
          <div className="logo">
            <img src={Logo1} className="img-fluid" alt="" />
          </div>
          <div className="text-center mt-4 name">OSmart Electronics</div>
          <form className="p-3 mt-3">
            <div className="form-field d-flex align-items-center">
              <span className="far fa-user" />
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Full Name"
              />
            </div>

            <div className="form-field d-flex align-items-center">
              <span className="far fa-envelope" />
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Email Id"
              />
            </div>

            <div className="form-field d-flex align-items-center">
              <span className="fa fa-phone" />
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Mobile"
              />
            </div>

            <div className="form-field d-flex align-items-center">
              <span className="fas fa-key" />
              <input
                type="password"
                name="password"
                id="pwd"
                placeholder="Password"
              />
            </div>

            <div className="form-field d-flex align-items-center">
              <span className="fas fa-key" />
              <input
                type="password"
                name="Re-Enter password"
                id="pwd"
                placeholder="Re-Enter password"
              />
            </div>
            <button className="btn mt-3">Register</button>
          </form>
          <div className="text-center fs-6">
             <a href="#">Sign In</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
