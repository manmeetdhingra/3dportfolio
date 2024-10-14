import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import{ Home, About, Projects, Contact} from './pages'
import Footer from './components/Footer';

const App = () => {
  return (
    <main className='bg-slate-300/20 h-[full]'>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/projects' element={<Projects />}/>
                <Route path='/contact' element={<Contact />}/>
            </Routes>
        </Router>
        {/* <Footer /> */}
    </main>
  )
}

export default App
App