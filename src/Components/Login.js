import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(true);
  const submit = () => {
    console.log("UserName : ", username, "\nPassword : ", password);
    setSuccess(false);
  };

  const navigate = useNavigate();

  return (
    <div className="grid place-items-center">
      <div className=" w-1/2 border-dashed border-2 rounded-lg border-blue-300 m-3 shadow-lg">
        <div className="grid grid-col-3 p-3 m-3 gap-4">
          <h2 className="text-2xl font-semibold ">Login</h2>
          <input
            className="p-2 border-slate-400 border-2 rounded-sm"
            type="text"
            placeholder="Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            className="p-2 border-slate-400 border-2 rounded-sm"
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            className="p-3 bg-green-300 rounded-lg font-bold hover:bg-green-400"
            onClick={() => (submit, navigate("/dashboard"))}
          >
            Submit
          </button>
          <h3 className="text-center">
            New User? <Link to="/register" className="text-blue-700">Sign up</Link>
          </h3>
          <h3 className="text-center">
            <Link to="/forgotpassword" className="text-blue-700">Forgot Password</Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
