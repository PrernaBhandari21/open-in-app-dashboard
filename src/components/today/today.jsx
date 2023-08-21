import React from 'react'

function today() {
  return (
    <div style={{width:"750px"}}>
        <p className='font-bold'>Today's Schedule</p>
        <div className='flex flex-col justify-between'>
            <div className='my-2 pl-3' style={{borderLeft:'8px solid #9bdd7c'}}>
                <p className='text-gray-700 font-bold' style={{fontSize:'14px'}}>Meeting with suppliers from Kuta Bali is delayed by 1 hour as mentioned by Supervisors</p>
                <p className='text-gray-500' style={{fontSize:'12px'}}>14:00 - 15:00</p>
                <p className='text-gray-500' style={{fontSize:'12px'}}>at Sunset Road, Kuta Bali</p>
            </div>

            <div className='pl-3 my-2' style={{borderLeft:'8px solid #6972c3'}}>
                <p className='text-gray-700 font-bold' style={{fontSize:'14px'}}>Check Operation at Giga Factory 1</p>
                <p className='text-gray-500' style={{fontSize:'12px'}}>18:00 - 20:00</p>
                <p className='text-gray-500' style={{fontSize:'12px'}}>at Central Jakarta</p>
            </div>

            <div className='pl-3' style={{borderLeft:'8px solid #1f72c3'}}>
                <p className='text-gray-700 font-bold' style={{fontSize:'14px'}}>Items delivered in Delhi 2 hours before the expecte time of delivery</p>
                <p className='text-gray-500' style={{fontSize:'12px'}}>20:00 - 21:00</p>
                <p className='text-gray-500' style={{fontSize:'12px'}}>at Delhi Airport</p>
            </div>
        </div>
    </div>
  )
}

export default today