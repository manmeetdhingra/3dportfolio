import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


const Footer = () => {

  return (
    <footer className='h-18 bg-black-500 text-white'>
        <div className='flex justify-evenly'>
            <div className='flex space-x-4 size-150 mt-1'>
           <a href="https://www.linkedin.com/in/manmeetdhingra/" target='blank'><CiLinkedin /></a> 
            <a href="https://github.com/manmeetdhingra" target='blank'><FaGithub /></a>
            </div>
            <p>Manmeet Dhingra's Portfolio</p>
            <a href="https://manmeetdhingra.com/contact">Contact me</a>
      </div>
    </footer>
  )
}

export default Footer
