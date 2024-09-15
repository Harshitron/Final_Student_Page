import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import NotificationSection from './components/NotificationSection.jsx'
import Carousel from './components/Carousel.jsx'
import Footer from './components/Footer.jsx'
import ChatWidget from './components/ChatWidget.jsx'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutUs from './components/AboutUs.jsx'
import Eligibility from './components/Eligibility.jsx'
import FAQs from './components/FAQs.jsx'
import TrackApplication from './components/TrackApplication.jsx'
import ApplyNow from './components/ApplyNow.jsx'
import UpdateApplication from './components/UpdateApplication.jsx'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  const [fontSize, setFontSize] = useState('base')
  const [canUpdateApplication, setCanUpdateApplication] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setCanUpdateApplication(true)
    }, 10000)
  }, [])

  const changeFontSize = (size) => {
    setFontSize(size)
    document.documentElement.style.fontSize = {
      'sm': '14px',
      'base': '16px',
      'lg': '18px'
    }[size]
  }

  return (
    <Router>
      <div className={`flex flex-col min-h-screen bg-gray-100 text-${fontSize}`}>
        <Header changeFontSize={changeFontSize} />
        <Navbar canUpdateApplication={canUpdateApplication} />
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <main className="flex-grow container mx-auto px-4 py-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3">
                      <NotificationSection />
                    </div>
                    <div className="md:w-2/3">
                      <Carousel />
                    </div>
                  </div>
                </main>
              } 
            />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/eligibility" element={<Eligibility />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/track-application" element={<TrackApplication />} />
            <Route path="/apply" element={<ApplyNow />} />
            <Route path="/update-application" element={<UpdateApplication />} /> 

          </Routes>
        </main>
        <Footer />
        <ChatWidget />
        <ToastContainer />
      </div>
    </Router>
  )
}