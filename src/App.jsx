import Header from './components/header'
import Footer from './components/footer'
import './App.css'
import { Outlet } from 'react-router-dom';


function App() {

  return (
    <>
     <Header />
     <Outlet />
     <Footer />
    </>
  )
}

export default App
