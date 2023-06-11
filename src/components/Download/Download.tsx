type Props = {
   date: string
   text: string
}

import download from '../../assets/icons/download.svg'

export const DownloadItem = ({ date, text }: Props) => {
   return(
      <div className="downloadItem">
         <p>
            <span>
               <span className='downloadDate'>
                  { date } <span className="mx-1">-</span> 
               </span> 
               
                  { text }
            </span>

            <span>
               <img src={ download } alt="baixar" />
            </span>
         </p>
      </div>
   )
}