import React from 'react'

function DestinationCard({destination}) {
  const {img,title,cost,location, time} = destination;
  return (
    <div className='bg-[#F0F0F073] w-72 rounded-2xl p-3 flex flex-col items-start justify-center'>
        <img className='rounded-2xl w-full' src={img} alt="" />
        <div className='ml-5 leading-10'>
          <div className='flex'>
            <img className=' mr-2 ' src="/sections/destinations/Location.svg" alt="" />
            <p className='text-[#8F8F8F] text-base'>{location}</p>
          </div>
          <h2 className='text-xl'>{title}</h2>
          <p className='text-base mb-2 text-[#636363] '>{time}</p>
          <span className='text-base  text-[#42A7C3]'>{cost}</span>
        </div>
    </div>
  )
}

export default DestinationCard