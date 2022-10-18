import React, { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();

    handleValidation();
  };

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleValidation = () => {
    const { username, email, password, confirmPassword } = values;

    console.log(password, confirmPassword, "find me here");
    if (password !== confirmPassword) {
      toast.error("Password and confirm password must be the same");
      return false;
    }

    if (username.length <= 3) {
      toast.error("username must be greater than 3 characters", toastOptions);
      return false;
    }

    if (password.length <= 6) {
      toast.error("Password must be more than 6 characters long", toastOptions);
      return false;
    }

    if (email.length === 0) {
      toast.error("Please provide an email address", toastOptions);
      return false;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  return (
    <>
      <FormContainer>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src="logo.svg" alt="logo" width={200} height={200} />

            <h1>TestChat</h1>
          </div>

          <input
            type="text"
            placeholder="username "
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            // value={email}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            // value={password}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="confirm password"
            name="confirmPassword"
            // value={confirmPassword}
            onChange={(e) => handleChange(e)}
          />

          <button type="submit"> Create User</button>
          <span>
            Already have an account? <Link to={"/login"}> Login</Link>
          </span>
        </form>
        <ToastContainer />
      </FormContainer>
    </>
  );
};

const FormContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #131324;

  .brand {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }

    h1 {
      color: white;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    background-color: #0a0a13;
    padding: 3rem 5rem;
    gap: 20px;
    min-width: 300px;
    color: white;
    border-radius: 2rem;

    input {
      padding: 0.5rem;
      background-color: transparent;
      border: 0.1rem solid #4e0eff;
      border-radius: 0.4rem;
      width: 100%;
      color: #eee;
      font-size: 1rem;

      &:focus {
        border: 0.1rem solid #997af0;
        outline: none;
      }
    }

    button {
      background-color: #997af0;
      padding: 1rem;
      color: white;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.4rem;
      transition: 0.5s ease-in-out;

      &:hover {
        background-color: #4e0eff;
      }
    }

    span {
      text-transform: uppercase;
      color: white;
      a {
        color: #4e0eff;
        font-weight: bold;
        text-decoration: none;
      }
    }
  }
`;

export default Register;
