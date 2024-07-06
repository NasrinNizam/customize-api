import React from 'react'

export const SingleCard = ({icon , text}) => {
  return (
    <>
       
       <div className="div w-[200px] h-[200px] bg-lime-100 rounded-3xl flex flex-col justify-center items-center gap-4">
        <div className="icon text-[50px] text-center">
            {icon}
        </div>
        <div className="text-lg text-center">
            {text}
        </div>
       </div>
       

    </>
  )
}
