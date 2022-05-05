import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SMS from './SMS'

const Search = () => {

  const [username, setUsername] = useState('')
  const [address, setAddress] = useState('')
  const [exists, reaction] = useState(false)

  const submit = () => {
    console.log("UserName : ", username,"\nAddress : ", address)
    reaction(true)
  }

  const direction = () => {
    console.log("Direction clicked")
  }
  const navigate = useNavigate()


  return (
    <div className="grid place-items-center">
    <div className=" border-dashed border-2 rounded-lg border-blue-300 m-3 shadow-lg">
        <div className="grid grid-col-3 p-3 m-3 gap-4">
        <h2 className="text-2xl font-semibold ">Search User</h2>
        <input className="p-2 border-slate-400 border-2 rounded-sm" type='text' placeholder='Username'  value={username} onChange={(e) => setUsername(e.target.value)}></input>
        <input className="p-2 border-slate-400 border-2 rounded-sm" type='text' placeholder='Address'  value={address} onChange={(e) => setAddress(e.target.value)}></input>
        
        <button className="p-3 bg-green-300 rounded-lg font-bold hover:bg-green-400" onClick={submit}>Search</button>
        </div>
        
        </div>

      {exists ? <SMS/> : "Enter User Details"}
    </div>
  )

}

export default Search