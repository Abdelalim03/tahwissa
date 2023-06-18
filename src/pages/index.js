import { Inter } from 'next/font/google'
import Hero from '@/components/Sections/HomePage/Hero/Hero'
import Destinations from '@/components/Sections/HomePage/Destinations/Destinations'
import PlanVacation from '@/components/Sections/HomePage/PlanVacation/PlanVacation'
import ChooseUs from '@/components/Sections/HomePage/ChooseUs/ChooseUs'
import Footer from '@/components/shared/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home({initialCities}) {
  return (
    <>
    <Hero />
    <Destinations initialCities={initialCities} />
    <PlanVacation /> 
    <ChooseUs />
    <Footer />
    </>
  )

}

export async function getServerSideProps() {
  try {

    const response = await axios.get('http://127.0.0.1:8000/points-of-interest');

    const data = response.data;

    return {
      props: {
        initialCities:data
      }
    };
  } catch (error) {

    console.error('Error fetching data:', error);
    return {
      props: {
        data: null
      }
    };
  }
}