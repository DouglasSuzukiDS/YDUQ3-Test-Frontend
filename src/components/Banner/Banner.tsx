import banner from '../../assets/imgs/banner-img.png'
import arrowLeft from '../../assets/icons/left.svg'
import arrowRight from '../../assets/icons/right.svg'

export const Banner = () => {
   return(
      <section className="banner pt-3 f sbt">
         <div className="text-banner-area f jcc column">
            <p className='text-white bold mb-2'>Divulgação de Resultados</p>

            <div className='f column'>
               <span className='text-light-blue bold mb-4'>3T21</span>

               <div className="banner-actions flex sbt">
                  <button className='py-1 px-2'>Saiba mais</button>

                  <div className="banner-slide-arrows flex">
                     <img src={ arrowLeft } alt="Anterior" className='mr-2' />
                     <img src={ arrowRight } alt="Próximo" />
                  </div>
               </div>

            </div>

         </div>

         <div className="banner-area-img">
            <img src={ banner } alt="Banner" />
         </div>
      </section>
   )
}