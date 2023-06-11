import linkedin from '../../assets/icons/linkedin.svg'

export const Footer = () => {
   return(
      <footer className='footer'>
         <div className="footer-Area01 flex sbt w-50">
            <span className="text-light-blue w-50 bold">Copyright 2021 YDUQS</span>

            <span className='w-50 f sar'>Termos de Privacidade | Termos e Condições</span>
         </div>

         <div className="footer-Area02 flex sbt w-50">
            <span className='footer-Area02-a flex sar w-50'>
               <span>Trabalhe Conosco</span>
               <img src={ linkedin } alt="Linkedin" />
            </span>

            <span>Desenvolvido por: <span className="bold">RIWeb</span></span>
         </div>
      </footer>
   )
}