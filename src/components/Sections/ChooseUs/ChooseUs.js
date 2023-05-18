import React from 'react'

function ChooseUs() {
  const services = [
    {
      id:1,
      title:"Flight Ticket",
      description:"Vitae donec pellentesque a aliquam et ultricies auctor. ",
      img:"/sections/chooseUs/plane.svg"
    },
    {
      id:2,
      title:"Accomodation",
      description:"Vitae donec pellentesque a aliquam et ultricies auctor. ",
      img:"/sections/chooseUs/hotel.svg"
    },
    {
      id:3,
      title:"Packaged Tour",
      description:"Vitae donec pellentesque a aliquam et ultricies auctor. ",
      img:"/sections/chooseUs/valise.svg"
    },
  ]
  return (
    <div className='  voyagers flex lg:px-28 py-20 justify-around items-center font-display'>
      <div className='hidden lg:block lg:w-[40%]'>
        <img src="/sections/chooseUs/chooseUs.svg" alt="" />
      </div>
           <div className='text-[#121212] container lg:w-[40%]'>
              <h2 className=' text-4xl mb-4'>Why Choose Us</h2>
              <p className='text-xl mb-8'>Enjoy different experiences in every place you visit and<br/> discover new and affordable adventures of course.</p>
              <div className='services flex flex-col gap-5'>
                  {services.map(service=>{
                    return <div key={service.id} className={`flex justify-center gap-6 p-4 items-center rounded-lg ${service.id==1 && "bg-white"}`}>
                        <div className='bg-white flex justify-center items-center h-16 w-16 rounded-lg'>
                          <img className='w-[70%] h-[70%]' src={service.img} alt="" />
                        </div>
                      <div className='flex flex-col gap-1'>
                        <h2 className='mb-1 text-xl'>{service.title}</h2>
                        <p className='text-[#636363] text-base'>{service.description}</p>
                      </div>
                    </div>
                  })}
              </div>
              <button className='text-2xl mt-6'>Another Service &gt;</button>
           </div>
    </div>
  )
}

export default ChooseUs