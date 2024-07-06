import React from 'react'
import { SingleCard } from './SingleCard'
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

export const ContactCompo = () => {
  return (
    <>
   <div className="container">
   <div className="main flex gap-5 justify-center items-center">
    <SingleCard icon={<FaFacebookSquare className="text-sky-400" />} text= "Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
     <SingleCard icon={<FaWhatsappSquare className="text-sky-400" />} text= "Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
     <SingleCard icon={<FaLinkedin className="text-sky-400" />} text= "Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
     <SingleCard icon={<FaYoutube className="text-sky-400" />} text= "Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
    </div>
   </div>
    
    
    </>
  )
}
