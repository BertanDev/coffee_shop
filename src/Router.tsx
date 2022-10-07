import { Routes, Route} from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Confirmation } from './pages/Confirmation'
import { Confirmed } from './pages/Confirmed'
import { Home } from './pages/Home'

export function Router(){
    return(
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />}/>
                <Route path='/confirmation' element={<Confirmation />}/>
                <Route path='/confirmed' element={<Confirmed />}/>
            </Route>
        </Routes>
    )
}