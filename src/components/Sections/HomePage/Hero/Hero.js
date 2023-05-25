import HeroButton from '@/components/shared/HeroButton'

function Hero() {
  return (
    <main
      className="hero"
    >
      <div className='flex flex-col  gap-2 lg:gap-7'>
        <div className='font-bold text-3xl lg:text-5xl text-[#333333]'>
        Start your journey<br/>
        by one click, explore<br/> beautiful world!
        </div>
        <p className='text-base lg:text-lg mb-4'>
        Plan and book your perfect trip with expert advice, travel tips,<br className='hidden lg:block'/> destination information and inspiration from us!
        </p>
        <div className='flex gap-4'>
          <HeroButton title="GET IN ON" app="Google Play" img="/sections/hero/playstore.svg" />
          <HeroButton title="Downlod on the " app="App Store" img="/sections/hero/appstore.svg" />
          
        </div>
      </div>
      <div className='zella '>
        <img src={"/sections/hero/zella.svg"} alt="" />
      </div>
    </main>
  )
}

export default Hero