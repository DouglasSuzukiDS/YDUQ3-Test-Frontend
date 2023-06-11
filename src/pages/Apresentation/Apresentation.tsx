import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"

import texture from '../../assets/icons/box-textura.svg'
import apresentacao from '../../assets/imgs/apresentacao.png'
import { Share } from "../../components/Share/Share"
import { DownloadItem } from "../../components/Download/Download"

export const Apresentation = () => {
   return(
      <>
         <Header />
         <main className="mainApresentationArea">

            <div className="banner-apresentation">
               <div className="banner-apresentation-area">
                  <img src={texture} alt="Textura" />
               </div>
            </div>
           
            < div className="banner-apresentation-img">
               <img src={ apresentacao } alt="Banner Apresentação" />
            </div>

            <section className="apresentationArea">
               <div className="apresentation-title">
                  <p>YDUQS / Canal / Página</p>
                  <p className="mt-1">Apresentações Institucionais e de Conferências</p>
               </div>

               <section className="apresentation-filter-area">
                  <div className="selectApresentationArea mt-5 mb-3 flex">
                     <label htmlFor="apresentation-filter">Filtrar por: </label>

                     <select name="apresentation-filter" id="apresentation-filter" >
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                     </select>

                  </div>

                  <div className="apresentation-downloads">
                     <DownloadItem date="18/06/2021" text="Apresentação - Aquisição da QConcursos" />
                     <DownloadItem date="07/04/2021" text="Apresentação - Bradesco BBI Investment Forum" />
                     <DownloadItem date="23/02/2021" text="Apresentação - Bradesco BBI Operação Premium " />
                     <DownloadItem date="12/01/2021" text="Apresentação - Bradesco BBI Group Meeting" />
                     <DownloadItem date="07/01/2021" text="Apresentação - Conferência Morgan Stanley" />
                  </div>

                  <div className="apresentation-pagination">
                     <button className="active-btn">1</button>
                     <button>2</button>
                     <button>3</button>
                     <button>4</button>
                     <button>Última</button>
                  </div>
               </section>

            </section>



            <Share />
         </main>



         <Footer />
      </>
   )
}