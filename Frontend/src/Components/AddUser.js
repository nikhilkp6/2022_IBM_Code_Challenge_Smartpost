import React from 'react'
import { useState } from 'react'

const AddUser = () => {

  const [username, setUsername] = useState('')
  const [address, setAddress] = useState('')
  const [location, setLocation] = useState('')
  const [phone, setPhone] = useState('')


  const submit = () => {
    console.log("UserName : ", username, "\nAddress : ", address,"\nLocation: ", location,"\nPhone : ", phone)
  }

  return (
    <div className=" border-dashed border-2 rounded-lg border-blue-300 m-3 shadow-lg">
        <div className="grid grid-col-3 p-3 m-3 gap-4">
        <h2 className="text-2xl font-semibold ">Add User</h2>
        <input className="p-2 border-slate-400 border-2 rounded-sm" type='text' placeholder='Name' value={username} onChange={(e) => setUsername(e.target.value)} ></input>
        <input className="p-2 border-slate-400 border-2 rounded-sm" type='text' placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)}></input>
        <input className="p-2 border-slate-400 border-2 rounded-sm" type='text' placeholder='Location' value={location} onChange={(e) => setLocation(e.target.value)}></input>
        <input className="p-2 border-slate-400 border-2 rounded-sm" type='text' placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)}></input>
        <button className="p-3 bg-green-300 rounded-lg font-bold hover:bg-green-400" onClick={submit}>Add</button>
        </div>
    </div>
  )
}

export default AddUser