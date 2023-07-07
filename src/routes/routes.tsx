import { Route, Routes, Navigate } from 'react-router-dom'
import { Order, TakeOrder } from '../pages'
import NotFound from '../pages/NotFound'

function AppRoutes() {
  return (
    <Routes>
        <Route path="/"  element={<Navigate to = 'order' replace/>}/>
        <Route path="/order"  element={<Order/>}/>
        <Route path="/takeorder"  element={<TakeOrder/>}/>
        <Route path="*"  element={<NotFound/>}/>
    </Routes>
  )
}

export default AppRoutes