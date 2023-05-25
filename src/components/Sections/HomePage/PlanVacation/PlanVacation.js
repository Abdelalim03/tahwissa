import React from 'react'

function PlanVacation() {
  return (
    <div className='vacation flex lg:px-28 py-20 justify-around font-display'>
        <div className='flex lg:gap-3 flex-col mx-auto'>
            <p className='text-center text-3xl font-semibold'>
                Plan Your Vacation
            </p> 
            <p className='text-center text-base text-gray-500'>
                For many people a trip is a headache. Register to be able to jointly <br/>
                determine vacation destinations an dates
            </p>
        </div>
        <div className='map'>

        </div>
    </div>
  )
}

export default PlanVacation