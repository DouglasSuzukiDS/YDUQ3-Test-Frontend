import share from '../../assets/icons/Share.svg'
import print from '../../assets/icons/Print.svg'
import pdf from '../../assets/icons/Pdf.svg'


export const Share = () => {
   return (
      <div className="share-area">
         <div className="share">
            <span>Compartilhar: </span>
            <img src={ share } alt="Compartilhar" />
            <img src={ print } alt="Imprimir" />
            <img src={ pdf } alt="Salvar PDF" />
         </div>
      </div>
   )
}