type Props = {
   date: string
   text: string
}

import download from '../../assets/icons/download.svg'

export const DownloadItem = ({ date, text }: Props) => {
   return(
      <div className="downloadItem">
         <p>
            <span className='downloadContent'>
               <span className='downloadDate'>
                  { date } <span className="mx-1">-</span> 
               </span> 
               
               <p> { text } </p>
            </span>

            <span>
               <img src={ download } alt="baixar" />
            </span>
         </p>
      </div>
   )
}