import React, { memo, useEffect, useState } from "react";
import "./login.scss";
import loginImg from "../../assets/images/login.png";
import axios from "../../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [username, setUsername] = useState("johnd");
  const [password, setPassword] = useState("m38rmF$");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let user = {
      username,
      password,
    };

    setLoading(true);

    axios
      .post(`/auth/login`, user)
      .then((res) => {
        console.log(res);
        localStorage.setItem("x-auth-token", res.data.token);
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
        toast.error("username or password is incorrect");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="login">
      <div className="login__container">
        <div className="login__left">
          <img src={loginImg} alt="img" />
        </div>
        <div className="container login__right">
          <h1 className="login__title">Log in to Exclusive</h1>
          <p className="login__desc">Enter your details below</p>
          <form onSubmit={handleSubmit} action="" className="form">
            <div className="input__group">
              <input
                className="form__email-input"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>
            <div className="input__group">
              <input
                className="form__password-input"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="login__btns">
              <button disabled={loading} className="login__btn" type="submit">
                {loading ? "Loading..." : "Log In"}
              </button>
              <a className="login__forget-link" href="#">
                Forget Password
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default memo(LoginComponent);
