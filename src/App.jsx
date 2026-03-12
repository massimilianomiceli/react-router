import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ChiSiamo from './pages/ChiSiamo'
import Prodotti from './pages/Prodotti'
import Prodotto from './pages/Prodotto'
import DefaultLayout from './layouts/DefaultLayout'
import Errore404 from './pages/Errore404'

function App() {

  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/ChiSiamo' element={<ChiSiamo />}></Route> 
          <Route path='/Prodotti' element={<Prodotti />}></Route>
          <Route path='/Prodotti/:id' element={<Prodotto />}></Route>
          <Route path='/Errore404' element={<Errore404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
