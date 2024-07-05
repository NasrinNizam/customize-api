import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const CartCompo = () => {

  const data = useSelector((state)=>state.counter.value )
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleAdd = ()=>{
    navigate('/order')
  }
  const rate = data.price*15/100
  
  
    const handelShow = ()=>{
    navigate('/product')
  }
  return (
    <>

<section className="w-full h-screen">
    <div className="container flex flex-col items-center pt-20">
    <div className="w-[500px] h-[160px] bg-sky-100 flex gap-5">
        <div className="w-[200px] h-[150px]">
            <img className="w-full h-full" src={data.image} alt="photo" />
        </div>
        <div className="text mt-5">
            <h4 className=" text-blue-950 text-[16px] font-bold mb-3">ID : {data.id}</h4>
            <h4 className="text-blue-950 text-[16px] font-bold mb-3">Price : {data.price}</h4>
            <h4 className="text-blue-950 text-[16px] font-bold mb-3">Vat : {rate}</h4>
            <h4 className="text-blue-950 text-[16px] font-bold">Total price : {data.price+rate} </h4>
        </div>
    </div>
    <div className="flex gap-5">
    <button onClick={()=> handelShow()} className="p-5 rounded-lg bg-sky-200 mt-5 text-pink-600 font-extrabold hover:bg-pink-400 hover:text-white transition-all hover:rounded-lg">Continue Shopping</button>
    <button onClick={()=> handleAdd()} className="p-5 rounded-lg bg-sky-200 mt-5 text-pink-600 font-extrabold hover:bg-pink-400 hover:text-white transition-all hover:rounded-lg">Confirm Order</button>
    </div>
    </div>
    </section>

    </>
  )
}
