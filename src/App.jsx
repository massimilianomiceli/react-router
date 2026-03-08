import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ChiSiamo from './pages/ChiSiamo'
import Prodotti from './pages/Prodotti'
import DefaultLayout from './layouts/DefaultLayout'


function App() {

  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/ChiSiamo' element={<ChiSiamo />}></Route> 
          <Route path='/Prodotti' element={<Prodotti />}></Route> 
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
