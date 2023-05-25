import { Inter } from 'next/font/google'
import Hero from '@/components/Sections/Hero/Hero'
import Destinations from '@/components/Sections/Destinations/Destinations'
import ChooseUs from '@/components/Sections/ChooseUs/ChooseUs'
import Footer from '@/components/shared/Footer'
import PlanVacation from '@/components/Sections/PlanVacation/PlanVacation'
import AnnonceFormPage from '@/components/shared/AddPointForm'
import AddPointForm from '@/components/shared/AddPointForm'

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
