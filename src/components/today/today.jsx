import React from 'react'

function today() {
  return (
    <div style={{width:"500px"}}>
        <p className='font-bold'>Today's Schedule</p>
        <div className='flex flex-col justify-between'>
            <div className='my-2 pl-3' style={{borderLeft:'8px solid #9bdd7c'}}>
                <p className='text-gray-700 font-bold' style={{fontSize:'14px'}}>Meeting with suppliers from Kuta Bali</p>
                <p className='text-gray-500' style={{fontSize:'12px'}}>14:00 - 15:00</p>
                <p className='text-gray-500' style={{fontSize:'12px'}}>at Sunset Road, Kuta Bali</p>
            </div>

            <div className='pl-3' style={{borderLeft:'8px solid #6972c3'}}>
                <p className='text-gray-700 font-bold' style={{fontSize:'14px'}}>Check Operation at Giga Factory 1</p>
                <p className='text-gray-500' style={{fontSize:'12px'}}>18:00 - 20:00</p>
                <p className='text-gray-500' style={{fontSize:'12px'}}>at Central Jakarta</p>
            </div>
        </div>
    </div>
  )
}

export default today