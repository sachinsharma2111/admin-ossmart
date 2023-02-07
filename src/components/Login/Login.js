import React, { useState } from "react";
import "./Login.css";
import Logo1 from "../../Assets/Logo1.png";
import { login } from "../../redux/features/auth/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";

function Login() {
  const [initialValues, setInitialValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const onChangeLogin = (e) => {
    const { name, value } = e.target;
    setInitialValues({ ...initialValues, [name]: value });
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();

    const errors = {};
    if (!initialValues.email) {
      errors.email = "Email is required";
    }
    if (!initialValues.password) {
      errors.password = "Password is required";
    }

    if (Object.keys(errors).length === 0) {
      dispatch(login(initialValues)).then((res) => {
        if (res) {
          navigate("/");
          window.location.reload();
        }
      });
    } else {
      for (var key in errors) {
        console.log(key);
        toast.error(errors[key]);
      }
    }
  };

  return (
    <div>
      <ToastContainer />

      <div className="wholebody">
        <div className="wrapper">
          <div className="logo">
            <img src={Logo1} className="img-fluid" alt="" />
          </div>
          <div className="text-center mt-4 name">OSmart Electronics</div>
          <form className="p-3 mt-3">
            <div className="form-field d-flex align-items-center">
              <span className="far fa-user" />
              <input
                type="email"
                name="email"
                id="email"
                onChange={onChangeLogin}
                placeholder="email"
              />
            </div>
            <div className="form-field d-flex align-items-center">
              <span className="fas fa-key" />
              <input
                type="password"
                name="password"
                id="pwd"
                onChange={onChangeLogin}
                placeholder="Password"
              />
            </div>
            <button className="btn mt-3" onClick={onSubmitLogin}>
              Login
            </button>
          </form>
          <div className="text-center fs-6">
            <a>Forget password?</a> or <a href="#">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
