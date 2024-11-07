import loader from './assets/loader.svg'
import './App.css'

function App () {
  return (
    <main>
      <div className='loader-container'>
        <img src={loader} alt='loader icon'></img>
      </div>
      <p className='city-name'>Paris</p>
      <p className='country-name'>France</p>
      <p className='temperature'>18°C</p>
      <div className='info-icon-container'>
        <img src='/icons/01d.svg' alt='info icon'></img>
      </div>
    </main>
  )
}

export default App
