import React from 'react'
import { FaGamepad } from "react-icons/fa";
import { CiMusicNote1 } from "react-icons/ci";
import { IoAirplaneOutline } from "react-icons/io5";
import { CiFootball } from "react-icons/ci";
import { MdOutlineNoteAlt } from "react-icons/md";




function Intrests() {
  return (
    <div>
         <div className="p-3 py-0">
            <h5 className="bg-danger text-white p-2">INTERESTS</h5>
            <div className='mt-4'>
            <p>
                <FaGamepad className='fs-1 mx-2'/>
            <CiMusicNote1 className='fs-1 mx-2'/>
            <IoAirplaneOutline  className='fs-1 mx-2'/>
            <CiMusicNote1 className='fs-1 mx-2' />

            </p>
            <p>
            <CiFootball className='fs-1 mx-2'/>
            <MdOutlineNoteAlt className='fs-1 mx-2'/>
            <FaGamepad className='fs-1 mx-2'/>
            </p>
            </div>
          </div>
    </div>
  )
}

export default Intrests