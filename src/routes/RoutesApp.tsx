import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Results } from '../pages/Results/Results'
import { ECG } from '../pages/ECG/ECG'
import { Apresentation } from '../pages/Apresentation/Apresentation'

export const RoutesApp = () => {
   return(
      <BrowserRouter>
         <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/results' element={ <Results /> } />
            <Route path='/ecg' element={ <ECG /> } />
            <Route path='/apresentation' element={ <Apresentation /> } />

         </Routes>
      </BrowserRouter>
   )
}