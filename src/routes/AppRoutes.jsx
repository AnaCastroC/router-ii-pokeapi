import React from 'react'
import Home from '../pages/Home/Home'
import {Routes, Route} from 'react-router-dom'
import Search from '../pages/Search/Search'
import SearchDetails from '../pages/SearchDetails/SearchDetails'

const AppRoutes = () => {
  return (
  <div>
    <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/search' element={<Search />}>Search</Route>
        <Route path='/search/:name' element={<SearchDetails />}>Search</Route> {/*se crea una ruta dinamica para mostrar los detalles de cada pokemon*/}
    </Routes>
  </div>
    )
}

export default AppRoutes