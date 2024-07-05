import React from 'react'
import { useSelector } from 'react-redux'


export const DetailCompo = () => {
    const data = useSelector((state)=> state.counter.value)
    console.log(data)



  return (
    <>
    <div className="container">
        <div className="flex justify-center items-center gap-20">
            <div className="image w-[300px] h-[400px]">
                <img src={data.image} alt="photo" />
            </div>
            <div className="details bg-lime-100 p-7 rounded-lg">
                <h4 className="text-lg text-orange-600 font-semibold">Description :</h4>
                <ul className="flex flex-col gap-3">
                    <li className="text-lg font-medium ">ID : {data.id}</li>
                    <li className="text-lg font-medium ">Name : {data.title} </li>
                    <li className="text-lg font-medium ">Brand : {data.brand} </li>
                    <li className="text-lg font-medium ">Usage : {data. usage} </li>
                    <li className="text-lg font-medium ">Benefit : {data.benefit} </li>
                    <li className="text-lg font-medium text-orange-600 ">Price : {data.price} </li>
                </ul>
            </div>
        </div>
    </div>

    </>
  )
}
