import React from 'react'
import {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [newpass, setNewPass] = useState("");
    const [confirmnewpass, setConfirmNewPass] = useState("");
    const [success, setSuccess] = useState(true);
    const submit = () => {
      console.log("EMail ID :",email, "NewPass : ", newpass, "\nConfirmNewPassword : ", confirmnewpass);
      setSuccess(false);
    };
  
    const navigate = useNavigate();
  
    return (
      <div className="grid place-items-center">
        <div className=" w-1/2 border-dashed border-2 rounded-lg border-blue-300 m-3 shadow-lg">
          <div className="grid grid-col-3 p-3 m-3 gap-4">
            <h2 className="text-2xl font-semibold ">Forgot Password</h2>
            <input
              className="p-2 border-slate-400 border-2 rounded-sm"
              type="text"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              className="p-2 border-slate-400 border-2 rounded-sm"
              type="text"
              placeholder="New Password"
              value={newpass}
              onChange={(e) => setNewPass(e.target.value)}
            ></input>
            <input
              className="p-2 border-slate-400 border-2 rounded-sm"
              type="text"
              placeholder="Confirm New Password"
              value={confirmnewpass}
              onChange={(e) => setConfirmNewPass(e.target.value)}
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
  )
}

export default ForgotPassword