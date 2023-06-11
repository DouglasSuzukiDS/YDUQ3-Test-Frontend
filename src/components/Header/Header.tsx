import logo from '../../assets/imgs/logo.png'
import icon from '../../assets/icons/icon.svg'
import contraste from '../../assets/icons/contraste.svg'
import aumentar from '../../assets/icons/aumentar.svg'
import diminuir from '../../assets/icons/diminuir.svg'

import enSquare from '../../assets/icons/en-square.svg'
import sinoHover from '../../assets/icons/sino-hover.svg'
import busca from '../../assets/icons/busca.svg'
import nav2 from '../../assets/icons/nav-2.svg'

import { Link } from 'react-router-dom'

export const Header = () => {
   return(
      <header className="containerArea py-3 flex sbt">
         <div className="header-left flex sbt w-50">
            <Link to='/'>
               <img src={ logo } alt="Logo" />
            </Link>

            <div className="header-left-box flex">

               <span>
                  <span className='text-white bold mr-1'>YDUQ3:</span>
                  <span className="text-light-blue bold">R$ 35,13</span>
               </span>

               <span className='mx-3'>
                  <span className='text-white bold mr-1'>YDUQ3:</span>
                  <span className="text-light-blue bold">R$ 35,13</span>
               </span>

               <img src={ icon } alt="icon" />
   
            </div>
         </div>

         <div className="header-right flex w-50">

            <div className="header-right-box01 flex w-50">
               <span className='mr-1 text-white'>Acessibilidade: </span>
               <img src={ contraste } alt="Contrate" className='mr-1'/>
               <img src={ aumentar } alt="Aumentar" className='mr-1'/>
               <img src={ diminuir } alt="Diminuir" />
            </div>

            <div className="header-right-box02 w-50 flex sbt">
               <img src={ enSquare } alt="English"  />
               <img src={ sinoHover } alt="Sino"  />
               <img src={ busca } alt="Busca"  />
               <img src={ nav2 } alt="Nav"  />
            </div>
            
         </div>
      </header>
   )
}