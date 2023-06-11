import { Link } from 'react-router-dom'
import card1 from '../../assets/imgs/card1.png'
import card2 from '../../assets/imgs/card2.png'
import card3 from '../../assets/imgs/card3.png'
import card4 from '../../assets/imgs/card4.png'


import resultados from '../../assets/imgs/icon-resultados.png'
import apresentacoes from '../../assets/imgs/icon-apresentações.png'
import comunicados from '../../assets/imgs/icon-comunicados.png'
import day from '../../assets/imgs/icon-day.png'
import fale from '../../assets/imgs/icon-fale.png'
import mailing from '../../assets/imgs/icon-mailing.png'

export const Cards = () => {
   return(
      <section className="cards w-100">
         
         {/* <Link to='/'>
            <img src={ card1 } alt="Quem somos" />
         </Link>

         <Link to='/'>
            <img src={ card2 } alt="Nossas unidades de negócio" />
         </Link>

         <Link to='/'>
            <img src={ card3 } alt="Nossa estratégia" />
         </Link>

         <Link to='/'>
            <img src={ card4 } alt="Nosso Impacto (ESG)" />
         </Link> */}

         <div className="cards-area-01">
            <img src={ card1 } alt="Quem somos" />
            <img src={ card2 } alt="Nossas unidades de negócio" />
            <img src={ card3 } alt="Nossa estratégia" />

            <Link to='/ecg'>
               <img src={ card4 } alt="Nosso Impacto (ESG)" />
            </Link>
         </div>

         <div className="cards-area-02 flex">
            <Link to='/results'>
               <img src={ resultados } alt="Resultados" />
            </Link>

            <Link to='/apresentation'>
               <img src={ apresentacoes } alt="Apresentações" />
            </Link>
`
            <img src={ comunicados } alt="Comunicados" />
            <img src={ day } alt="Day" />
            <img src={ fale } alt="Fale Conosco" />
            <img src={ mailing } alt="Email" />
         </div>

         
      </section>
   )
}