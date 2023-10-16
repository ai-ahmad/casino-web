// SignIn.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const SignIn = () => {
  const { login } = useAuth();
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const [ error , setError] = useState("");
  const navigate = useNavigate();

  function tekshirish() {
    axios
      .get("http://localhost:3000/accounts")
      .then((response) => {
        const users = response.data;
        const user = users.find(
          (u) => u.email === info.email && u.password === info.password
        );

        if (user) {
          localStorage.setItem("user", JSON.stringify({ authenticated: true }));
          alert("Log In successfully");
          setInfo({
            email: "",
            password: "",
          });
          setError("");
          navigate("/main-menu");
          login(true);
        } else {
          setError("Log In not successful");
        }
      })
      .catch(( error ) => {
        console.error("Error fetching user data:", error);
        setError("An error occurred while logging in.");
      });
  }

  return (
    <div className="w-[500px] mx-auto flex items-center justify-center h-full">
      <div class="flex flex-col items-center mt-[10vh]">
        <h2 class="mb-5 text-gray-900 font-mono font-bold text-xl">Log In</h2>
        <button class="flex items-center mb-2 justify-center transition ease-in-out delay-50 px-3 py-2.5 space-x-2 bg-white border border-slate-600 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:ring-opacity-50">
          <span class="text-gray-700 font-medium">Continue with Google</span>
        </button>
        <span class="mb-2 text-gray-900">Or</span>
        <form>
          <input
            value={info.email}
            type="text"
            class="w-full px-6 py-3 mb-4 border border-slate-600 rounded-lg font-medium"
            placeholder="Email"
            onChange={(e) => {
              setInfo((prevInfo) => ({
                ...prevInfo,
                email: e.target.value,
              }));
            }}
          />

          <input
            value={info.password}
            type="password"
            class="w-full px-6 py-3 mb-4 border border-slate-600 rounded-lg font-medium"
            placeholder="Password"
            onChange={(e) => {
              setInfo((prevInfo) => ({
                ...prevInfo,
                password: e.target.value,
              }));
            }}
          />

          <button
            type="button"
            class="bg-slate-500 hover:bg-slate-700 text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]"
            onClick={tekshirish}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;