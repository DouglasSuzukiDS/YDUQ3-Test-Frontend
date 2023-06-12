import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"

import bannerResults from '../../assets/imgs/results.png'
import texture from '../../assets/icons/box-textura.svg'
import tableResult from '../../assets/imgs/table-content.png'

import externo from '../../assets/icons/externo.svg'
import { Share } from "../../components/Share/Share"

export const Results = () => {
   return(
      <>
         <Header />

         <div className="mainResultArea">
            
            <div className="banner-results f">
               <div className="banner-result-area">
                  <img src={ texture } alt="Textura" />
               </div>

            </div>

            <div className="banner-result-img">
               <img src={ bannerResults } alt="Banner Results" />
            </div>

            <div className="resultsArea">
               <span className="result-title">
                  <p>YDUQS / Canal / Página</p>
                  <p className="mt-1">Central de Resultados</p>
               </span>

               <span className="result-filter">

                  <div className="selectArea mt-2 mb-3 flex">
                     <label htmlFor="result-filter">Filtrar por: </label>
                     <select name="result-filter" id="result-filter" >
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                     </select>
                  </div>

                  <div className="tableArea">
                     <img src={ tableResult } alt="Tabela de reultados" />
                  </div>

                  <p className="mt-3 f aic">
                     <span className="mx-1">
                        <a href="#">Clique aqui </a>
                        para ouvir o último cal de Resultados
                     </span>

                     <img src={ externo } alt="Site externo"/>
                  </p>
               </span>
            </div>

            <Share />
         </div>

         <Footer />
      </>
   )
}