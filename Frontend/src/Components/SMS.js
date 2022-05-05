import React from 'react'

const SMS = () => {

  const direction = () => {
    console.log('direction clicked')
  }

  return (
    <div>
      <select className="p-1 m-3 ml-24 rounded-md" name="slot" placeholder='Select Time Slot'>
    <option value="Select slot">Select slot</option>
    <option value="10 - 10:30">10 - 10:30</option>
    <option value="10:30 - 11">10:30 - 11</option>
    <option value="11 - 11:30">11 - 11:30</option>
    <option value="11:30 - 12">11:30 - 12</option>
    <option value="12 - 12:30">12 - 12:30</option>
    <option value="12:30 - 1">12:30 - 1</option>
    <option value="2 - 2:30">2 - 2:30</option>
    <option value="2:30 - 3">2:30 - 3</option>
    <option value="3 - 3:30">3 - 3:30</option>
    <option value="3:30 - 4">3:30 - 4</option>
    <option value="4 - 4:30">4 - 4:30</option>
    <option value="4:30 - 5">4:30 - 5</option>
  </select>
  <div className="flex">
  <button className="p-3 m-3 text-white bg-black rounded-lg font-bold hover:bg-slate-700" onClick={direction}>Direction</button>
  <button className="p-3 m-3 text-white bg-black rounded-lg font-bold hover:bg-slate-700" onClick={direction}>Send Notification</button>
  </div>
  </div>
  )
}

export default SMS