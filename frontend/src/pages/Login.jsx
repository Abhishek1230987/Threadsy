import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [currentState, setCurrentState] = useState("login"); // 'login' or 'register'
  const { token, setToken, backendUrl } = useContext(ShopContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "register") {
        const response = await axios.post(`${backendUrl}/api/user/register`, {
          name,
          email,
          password,
        });

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Account created successfully");
          navigate("/", { replace: true }); // move to home immediately
        } else {
          toast.error(response.data.message || "Registration failed");
        }
      } else {
        const response = await axios.post(`${backendUrl}/api/user/login`, {
          email,
          password,
        });

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Login successful");
          navigate("/", { replace: true }); // move to home immediately
        } else {
          toast.error(response.data.message || "Invalid credentials");
        }
      }
    } catch (error) {
      console.error("Error during login/register:", error);
      toast.error(
        error.response?.data?.message || "Something went wrong. Try again!"
      );
    }
  };

  // Optional: handle auto-login on refresh if token already exists
  useEffect(() => {
    if (token && typeof token === "string") {
      navigate("/", { replace: true });
    }
  }, [token, navigate]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">
          {currentState === "login" ? "Sign In" : "Sign Up"}
        </p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState !== "login" && (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="px-1.5 w-full py-2 border-3 border-gray-800"
          style={{ borderColor: "#cccac2" }}
          placeholder="Name:"
          required
        />
      )}

      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        className="px-1.5 w-full py-2 border-3 border-gray-800"
        style={{ borderColor: "#cccac2" }}
        placeholder="Email:"
        required
      />

      <div className="relative w-full">
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type={showPassword ? "text" : "password"}
          className="px-1.5 w-full py-2 pr-10 border-3 border-gray-800"
          style={{ borderColor: "#cccac2" }}
          placeholder="Password:"
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          {showPassword ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          )}
        </button>
      </div>

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="text-gray-500 cursor-pointer">Forgot Password?</p>
        {currentState === "login" ? (
          <p
            onClick={() => setCurrentState("register")}
            className="text-gray-500 cursor-pointer"
          >
            Create an account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("login")}
            className="text-gray-500 cursor-pointer"
          >
            Already have an account?
          </p>
        )}
      </div>

      <button className="px-8 my-2 mt-4 py-2 bg-black rounded text-gray-400">
        {currentState === "login" ? "Sign-In" : "Sign-Up"}
      </button>
    </form>
  );
};

export default Login;
