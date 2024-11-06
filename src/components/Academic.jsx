import React from 'react'

function Academic() {
  return (
    <div>
         <div className="p-3 py-0  ">
            <h5 className="bg-danger text-white p-2 text-start ">ACADEMIC BACKGROUND</h5>
            <p className='text-start ps-4  '>
              <strong>Master's Degree</strong> <br />BS Information Technology,<br />
              University of Chicago
            </p>
            <ul className='list-unstyled text-start ps-4'>
              <li>
                Member of Academic Degree Holders of Information Technology
                Professionals
              </li>
              <li>Managed special team training of 50+ IT professionals</li>
            </ul>
            <p className='text-start ps-4'>
              <strong>Bachelor's Degree</strong><br /> BS Information Technology,<br />
              University of Chicago
            </p>
            <ul className='list-unstyled text-start ps-4'>
              <li>Graduated Summa Cum Laude</li>
              <li>
                Member of Academic Students Association of Information
                Technology
              </li>
              <li>
                Managed student project to organize conference of 50+ IT
                professionals
              </li>
            </ul>
            <p className='list-unstyled text-start ps-4'>
              <strong>Diploma Course</strong><br />Information Management,<br />
              University of Chicago
            </p>
          </div>
    </div>
  )
}

export default Academic