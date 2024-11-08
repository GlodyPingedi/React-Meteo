import loader from './assets/loader.svg'
import './App.css'
import { useEffect, useState } from 'react'
import Browser from './assets/browser.svg'
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

function App () {
  const [weather, setWeather] = useState(null)
  const [errorInfo, setErrorInfo] = useState(null)

  useEffect(() => {
    fetch(`http://api.airvisual.com/v2/nearest_city?key=${API_KEY}`)
      .then(res => {
        //400 - 499 : 500 - 599
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        return res.json()
      })
      .then(responseData => {
        console.log(responseData)
        setWeather({
          city: responseData.data.city,
          country: responseData.data.country,
          temperature: responseData.data.current.weather.tp,
          icon: responseData.data.current.weather.ic
        })
      })
      .catch(error => {
        setErrorInfo({
          msg: error.message
        })
      })
  }, [])

  return (
    <main>
      <div className={`loader-container ${!weather && !errorInfo && 'active'}`}>
        <img src={loader} alt='loader icon'></img>
      </div>
      {weather && (
        <>
          <p className='city-name'>{weather?.city}</p>
          <p className='country-name'>{weather?.country}</p>
          <p className='temperature'>{weather?.temperature}°C</p>
          <div className='info-icon-container'>
            <img src={`/icons/${weather?.icon}.svg`} alt='info icon'></img>
          </div>
        </>
      )}
      {errorInfo && !weather && (
        <>
          <p className='error-information'>{errorInfo.msg}</p>
          <img src={Browser} alt='error icon'></img>
        </>
      )}
    </main>
  )
}

export default App
