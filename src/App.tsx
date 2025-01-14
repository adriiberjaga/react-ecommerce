import { Outlet } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header'
import Footer from './components/Footer'
import { CartProvider } from './data/CartContext'
function App() {

  return (
    <>
      <Header />
      <CartProvider>
      <div className='outlet'>
        <Outlet />
      </div>
      </CartProvider>
      <Footer></Footer>
    </>
  )
}

export default App;
