import textura from '../../assets/icons/box-textura.svg'

import arrowLight from '../../assets/icons/left-light.svg'
import arrowDark from '../../assets/icons/right-dark.svg'

import box01 from '../../assets/icons/box01.svg'
import box02 from '../../assets/icons/box02.svg'
import box03 from '../../assets/icons/box03.svg'
import box04 from '../../assets/icons/box04.svg'
import box05 from '../../assets/icons/box05.svg'
import { CalendarItem } from '../CalendarItem/CalendarItem'
import { Link } from 'react-router-dom'

export const Investors = () => {
   return(
      <section className="investors f column">
         <div className="texture">
            <img src={textura } alt="Testura" />
         </div>

         <div className="investors-areas f pb-9">
            <div className="investors-results w-50">
               <p className='text-dark-blue'>Resultados</p>

               <div className="investors-results-info mt-3 flex w-100">
                  <img src={ arrowLight } alt="Anterior" className='mr-4' />
                  <span className='bold'>
                     1T21
                  </span>
                  <img src={ arrowDark } alt="Próximo" className='ml-4' />
               </div>

               <div className="investors-results-boxers my-5">
                  <img src={ box01 } alt="" />
                  <img src={ box02 } alt="" />
                  <img src={ box03 } alt="" />
                  <img src={ box04 } alt="" />
                  <img src={ box05 } alt="" />
               </div>
               
               <Link to='/results' className='text-dark-blue'>Ver resultados</Link>
            </div>

            <div className="investors-calender w-50 f sbt column ">
               <p className='text-dark-blue'>Calendário de eventos</p>

               <CalendarItem />
               <CalendarItem />
               <CalendarItem />

               <a href="#" className='text-dark-blue mt-3'>Ver todos os eventos</a>
            </div>
         </div>
      </section>
   )
}