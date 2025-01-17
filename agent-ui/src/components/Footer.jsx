import React from 'react'
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className='flex flex-row  text-a h-8 w-full text-xl py-1 px-10 overflow-hidden'>
     <div className="mb-4 sm:mb-0 text-sm mr-auto mx-4">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
     <div className='flex flex-row gap-8 mx-4 ml-auto'>
     <div className='flex flex-row gap-4'>
      <FaDiscord />
        <FaGithub />
        <FaXTwitter />
      </div>
      <div className='text-sm'><ul className='flex flex-row  gap-5 list-disc'><li>Help Center</li>
      <li>Terms & Privacy</li>
     </ul></div>

     </div>
    </div>
  )
}

export default Footer