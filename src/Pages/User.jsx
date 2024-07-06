import React, { useEffect, useState } from 'react'

export const User = () => {
  const [data , setData] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setData(json))
  } , [])
  return (
    <>
     <div className="container">
      <h1 className="text-3xl font-semibold pb-10 text-center">Our Beautiful Clients</h1>
      <div className="main flex flex-wrap gap-10">
        {
          data.map((item)=>{
            return(
              <div className="single w-[350px] h-[300px] bg-[#FFD3B6] bg-opacity-100 rounded-[20px] p-5 flex items-center flex-col gap-5">
            <div className="img-col w-[150px] h-[150px] rounded-full overflow-hidden ">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST3aytOJVrftZbvKV5vSxnnHqbkYp7btnT8Q&s" alt="img" />
            </div>
            <div className='text flex flex-col justify-center items-center gap-3'>
              <p className='text-lg font-bold text-black'>Name :{item.name} </p>
              <h1 className='text-xl font-semibold text-black'>Phone :{item.phone} </h1>
              <p className='text-lg font-semibold text-black'>Email :{item.email} </p>
            </div>
          </div>
           )
          })
        }
      </div>
    
     </div>
    </>
  )
}
