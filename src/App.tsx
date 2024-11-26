import { Outlet } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Header />
      <div className='outlet'>
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  )
}

export default App;
