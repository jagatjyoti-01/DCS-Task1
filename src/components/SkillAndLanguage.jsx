import React from 'react'
import SkillsList from './SkillsList'

function SkillAndLanguage() {
  return (
    <div>
        <div className="p-3 py-0  ">
            <h5 className="bg-danger text-white p-2">SKILLS</h5>
            <SkillsList/>
          </div>

         
          <div className="p-3  mt-3">
            <h5 className="bg-danger text-white p-2">LANGUAGES</h5>
            <div className='d-flex  justify-content-around pt-2'>

                <ul className='list-unstyled text-start ps-4'>
                    <li className='pt-2'>java</li>
                    <li className='pt-2'>SQL</li>
                    <li className='pt-2'>c#</li>
                    <li className='pt-2'>JavaScript</li>
                </ul>
                <ul className='list-unstyled text-start ps-4'>
                    <li className='pt-2'>c++</li>
                    <li className='pt-2'>IOS</li>
                    <li className='pt-2'>PHP</li>
                    <li className='pt-2'>PYTHON</li>
                </ul>
            </div>
          </div>
    </div>
  )
}

export default SkillAndLanguage