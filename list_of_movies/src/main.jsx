import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CreateView } from './route/CreateView.jsx'
import { MovieView } from "./route/MovieView.jsx"
import { MoviesContext, MoviesProvider } from './context/moviesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
      <BrowserRouter>
        <MoviesProvider>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/create' element={<CreateView/>}/>
            <Route path='/view/:movie' element={<MovieView/>}/>
          </Routes>
        </MoviesProvider>
      </BrowserRouter>

  </>,
  
)
