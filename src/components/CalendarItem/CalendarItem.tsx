import gmail from '../../assets/icons/gmail.svg'
import outlook from '../../assets/icons/outlook.svg'

export const CalendarItem = () => {
   return(
      <div className="calendarItem p-1">
         <div className="calendarDate">
            <p className='text-light-blue'>ABR | <span className="bold">23</span></p>

            <div className="calendarInfos-areas flex sbt">
               <div className="calendarInfos-area01">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero in</p>

                  <p>00:00 - 23:59 (Horário de Brasília)</p>
               </div>

               <div className="calendarInfos-area02 flex column">
                  <img src={ gmail } alt="Gmail" />
                  <img src={ outlook } alt="Outlook" />
               </div>
            </div>

         </div>
      </div>
   )
}