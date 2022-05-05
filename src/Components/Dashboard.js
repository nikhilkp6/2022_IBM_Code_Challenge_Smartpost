import React from 'react'
import { useState } from 'react'
import Search from './Search'
import View from './View'
import AddUser from './AddUser'

import { useNavigate } from "react-router-dom"

const Dashboard = () => {
    const [search, setSearch] = useState(false)
    const [adduser, setAddUser] = useState(false)
    const [view, setViewUser] = useState(false)
    const logout = () => {
        console.log("Logged out")
    }
    const navigate = useNavigate();
    return (
        <div>
            <h2 className="text-4xl bg-slate-300 rounded-lg p-3 m-3">Dashboard</h2>
            <div className="flex">
                <div className=" font-semibold flex-col bg-slate-300 p-3 m-3 rounded-lg w-72 h-screen">
                    <ul className="m-2 bg-slate-400 rounded-lg shadow-lg p-2" onClick={() => (setSearch(!search),setAddUser(false),setViewUser(false))}>Search</ul>
                    <ul className="m-2 bg-slate-400 rounded-lg shadow-lg p-2" onClick={() => (setAddUser(!adduser),setSearch(false),setViewUser(false))}>Add User</ul>
                    <ul className="m-2 bg-slate-400 rounded-lg shadow-lg p-2" onClick={() => (setViewUser(!view),setAddUser(false),setSearch(false))}>View User Details</ul>
                    
                    <ul className="m-2 bg-slate-400 rounded-lg shadow-lg p-2" onClick={() => (logout, navigate("/login"))}>Logout</ul>
                </div>
                <div className="grid place-items-center bg-slate-300 p-3 m-3 rounded-lg w-screen" >
                
                    <ul>{search ? <Search /> : ""}</ul>
                    <ul>{adduser ? <AddUser /> : ""}</ul>
                    <ul>{view ? <View /> : ""}</ul>
                </div>
            </div>
        </div>
    )
}

export default Dashboard