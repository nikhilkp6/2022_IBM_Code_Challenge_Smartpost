import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const submit = () => {
    console.log(
      "UserName : ",
      username,
      "\nPassword1 : ",
      password1,
      "\nPassword2 : ",
      password2,
      "\nPostal code : ",
      postalcode,
      "\nEmail : ",
      email
    );
  };
  const navigate = useNavigate();
  return (
    <div className="grid place-items-center">
      <div className="w-1/2 border-4 rounded-lg border-blue-400 m-3 shadow-lg">
        <div className="grid grid-col-3 p-3 m-3 gap-4">
          <h2 className="text-2xl font-semibold ">Register</h2>
         
          <input
            className="p-2 border-slate-400 border-2 rounded-sm"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            className="p-2 border-slate-400 border-2 rounded-sm"
            type="text"
            placeholder="Postal Code"
            value={postalcode}
            onChange={(e) => setPostalcode(e.target.value)}
          ></input>
          <input
            className="p-2 border-slate-400 border-2 rounded-sm"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            className="p-2 border-slate-400 border-2 rounded-sm"
            type="text"
            placeholder="Password"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
          ></input>
          <input
            className="p-2 border-slate-400 border-2 rounded-sm"
            type="text"
            placeholder="Confirm Password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          ></input>
          <button
            className="p-3 bg-green-300 rounded-lg font-bold hover:bg-green-400"
            onClick={() => (submit, navigate("/login"))}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
