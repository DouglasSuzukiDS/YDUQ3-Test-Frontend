import { Banner } from "../../components/Banner/Banner"
import { Cards } from "../../components/Cards/Cards"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { Investors } from "../../components/Investors/Investors"

export const Home = () => { 
   return(
      <>
         <Header />
         <Banner />
         <Cards />
         <Investors />
         <Footer />
      </>
   )
}