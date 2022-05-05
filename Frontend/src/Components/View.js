import React from 'react'

const View = () => {

    const data= [
        {
            name : "sarath",
            address : "mh",
            location : "lat209348203f",
            contact : "9230198234",
        },
    ]

  return (
    <div className="p-3 border-dashed border-2 rounded-lg border-blue-300 m-3 shadow-lg">
       
        <h2 className="text-2xl font-semibold ">User Data</h2>
        <p>{data[0].name}</p>
      
    </div>
  )
}

export default View