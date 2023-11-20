import './App.css'
import { Header } from './assets/components/Header'
import { Main } from './assets/components/Main'
import { Footer } from './assets/components/Footer'
import { WeatherProvider } from './hooks/WeatherContext'

function App() {
    return (
      <div className='div_contendor'>
        <WeatherProvider>
              <Header/>
              <Main/>
              <Footer />
        </WeatherProvider>
      </div> 
      )
    
}

export default App
