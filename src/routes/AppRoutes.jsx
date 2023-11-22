import {Routes, Route} from 'react-router-dom'
import { Login } from '../Login'
import { Home } from '../Home'
import BitcoinRates from '../BitcoinRates'

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='bitcoin-rates' element={<BitcoinRates></BitcoinRates>}></Route>

            <Route path='/' element={<Home></Home>}></Route>
            <Route path='*' element={<Home></Home>}></Route>
        </Routes>
    )
}
