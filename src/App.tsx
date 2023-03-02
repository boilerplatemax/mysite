import { useState } from 'react'

import { motion} from 'framer-motion';
import Portfolio from './components/portfolio'
import About from './components/about'
import Navigation from './components/navigation'
import Contact from './components/contact'
import './css/App.css'
import Footer from './components/footer';

function App() {
  
  return (
    <div id="outer-container">
    <Navigation/>
    <main>
    <Portfolio/>
    <section id="about-section">
          <About/>
    </section>
    <section id="contact-section">
      <Contact/>
    </section>
    <Footer/>
    </main>
</div>
  )
}

export default App
