import linkedin from '../../assets/icons/linkedin.svg'

export const Footer = () => {
   return(
      <footer className='footer'>
         <div className="footer-Area01 flex sbt w-50">
            <p className="text-light-blue w-50 bold">Copyright 2021 YDUQS</p>

            <p className='w-50 f sar'>Termos de Privacidade | Termos e Condições</p>
         </div>

         <div className="footer-Area02 flex sbt w-50">
            <p className='footer-Area02-a flex sar w-50'>
               <span>Trabalhe Conosco</span>
               <img src={ linkedin } alt="Linkedin" />
            </p>

            <p>Desenvolvido por: <span className="bold">RIWeb</span></p>
         </div>
      </footer>
   )
}