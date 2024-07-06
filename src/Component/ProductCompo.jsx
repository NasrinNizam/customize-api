import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { IoCartOutline } from "react-icons/io5";
import { singleCard } from '../counter/CounterSlice';

export const ProductCompo = () => {
  const [productData, setProductData] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(()=>{
    axios.get('https://api.jsonbin.io/v3/b/66884ad5e41b4d34e40da2eb')
    .then((res)=> setProductData(res.data.record))
    .catch((err)=> console.log(err))
  
   } , [])
  
   const handelAdd = (pera)=>{
    navigate('/detail')
    dispatch(singleCard(pera))
   }
  
   const handleshow =(pera2)=>{
    navigate('/cart')
    dispatch(singleCard(pera2))
   }
   console.log(productData)
  
  return (
    <>
    <div className="container">
      <div className="products flex flex-wrap gap-7 justify-center items-center">

        {
          productData.map((item , i)=>(
            <div key={i} className="single-product bg-lime-50 rounded-2xl p-5 flex flex-col items-center">
            <div className="image w-[130px] h-[130px] mb-5">
                <img className="w-full h-full" src={item.image} alt="serum" />
            </div>
            <div className="text flex flex-col gap-2 mb-10">
                <h3 className="text-[14px] text-blue-950 font-medium">Name : {item.title} </h3>
                <h3 className="text-[14px] text-blue-950 font-medium mt-1 mb-3">Brand : {item.brand} </h3>
                <h3 className="text-xl text-orange-400 font-bold">Price : {item.price} </h3>
            </div>
           <div className="buttons flex justify-center items-center gap-5">
           <button onClick={()=>handelAdd(item)} className="px-4 py-1 rounded-lg bg-orange-500 text-lg text-white font-semibold">Details</button>
           <button onClick={()=>handleshow(item)} className="px-4 py-2 bg-transparent text-3xl text-orange-500 font-black"><IoCartOutline /></button>
           </div>
        </div>
        
            ))
        }


      </div>  
    </div>
    </>
  )
}
