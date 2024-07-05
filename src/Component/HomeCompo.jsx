import React from 'react'

export const HomeCompo = () => {
  return (
    <>
    <div className="container">
    <div className="banner flex justify-between items-center gap-10">
        <div className="image w-[400px] h-[400px]">
            <img className="w-full h-full rounded-full" src="public/images/banner.jpg" alt="banner image" />
        </div>
        <div className="text">
            <h1 className="text-3xl font-semibold mb-5 ">Elegant Essence</h1>
            <p className="w-[500px] font-normal text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat error ullam obcaecati nihil excepturi voluptas dolorum facere expedita tempore fugit sapiente, saepe consectetur adipisci sunt, illo ab earum, odio consequuntur!</p>
        </div>
    </div>
    </div>
    </>
  )
}
