import { Inter } from 'next/font/google'
import Hero from '@/components/Sections/HomePage/Hero/Hero'
import Destinations from '@/components/Sections/HomePage/Destinations/Destinations'
import PlanVacation from '@/components/Sections/HomePage/PlanVacation/PlanVacation'
import ChooseUs from '@/components/Sections/HomePage/ChooseUs/ChooseUs'
import Footer from '@/components/shared/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Hero />
    <Destinations />
    <PlanVacation /> 
    <ChooseUs />
    <Footer />
    </>
  )

}
