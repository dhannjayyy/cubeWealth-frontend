import React, { useRef, useState } from "react";
import AsyncFetch from "../helper/AsyncFetch";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getUser, setUser } from "../helper/userSlice";
import { useDispatch, useSelector } from "react-redux";
import appStore from "../helper/Store";
import useLogin from "../helper/useLogin";

const LoginForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/login";
  const dispatch = useDispatch();
  const formResult = useRef();
  const user = useSelector(getUser);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleFormStateChange = (name, value) => {
    setFormState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleFormSubmitRequest = async (e) => {
    e.preventDefault();
    try {
      const [resultStatus, message] = await useLogin(formState);
      //checking result by status code
      if (resultStatus == 200) {
        dispatch(setUser({ email: formState.email, accessToken: message }));
        appStore.getState().user?.email
          ? navigate("/tasks")
          : navigate(from, { replace: true });
      } else {
        formResult.current.innerText = message;
        formResult.current.style.color = "red";
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-theme-black-700 mx-auto mt-32 p-5 rounded-lg w-[90%] max-w-[400px]">
      <form method="post" onSubmit={(e) => handleFormSubmitRequest(e)}>
        <h2 className="text-xl font-bold text-center mb-5"> Login</h2>
        <div className="flex flex-col">
          <input
            type="email"
            required
            placeholder="Enter email"
            className="text-xl px-2 py-1 bg-slate-700 outline-none"
            id="email-input"
            value={formState.email}
            name="email"
            onChange={(e) =>
              handleFormStateChange(e.target.name, e.target.value)
            }
          />
        </div>
        <div className="flex flex-col mt-2">
          <input
            type="password"
            required
            placeholder="Enter password"
            className="text-xl px-2 py-1 bg-slate-700 outline-none"
            id="password-input"
            value={formState.password}
            name="password"
            onChange={(e) =>
              handleFormStateChange(e.target.name, e.target.value)
            }
          />
        </div>
        <button
          type="submit"
          className="theme-background-green py-2 px-4 text-black font-bold rounded-lg uppercase mx-auto block mt-6"
        >
          Submit
        </button>
        <p ref={formResult} className="text-center font-bold mt-5"></p>
      </form>
      <p className="text-center">
        New User ?{" "}
        <Link
          className="text-blue font-semibold underline cursor-pointer"
          to={"/"}
        >
          Signup
        </Link>{" "}
        Instead
      </p>
    </div>
  );
};

export default LoginForm;
