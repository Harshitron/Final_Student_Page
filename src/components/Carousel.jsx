import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    { title: 'Apply Now for PMSSS Scholarship', endDate: '2023-12-31', bgColor: 'bg-blue-600' },
    { title: 'Last Date Extended', endDate: '2024-01-15', bgColor: 'bg-blue-700' },
    { title: 'New Courses Added', endDate: '2023-12-31', bgColor: 'bg-blue-800' },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative bg-white rounded-lg shadow overflow-hidden">
      <div className={`aspect-w-16 aspect-h-9 ${slides[activeSlide].bgColor}`}>
        <div className="flex flex-col justify-center items-center text-white p-8">
          <h3 className="text-3xl font-semibold mb-4 text-center">{slides[activeSlide].title}</h3>
          <p className="text-xl mb-6">End Date: {slides[activeSlide].endDate}</p>
          <div>
      <Link to="/apply">
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors">
          Apply Now
        </button>
      </Link>
    </div>
        </div>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow text-blue-600 hover:bg-blue-100 transition-colors"
        onClick={() => setActiveSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow text-blue-600 hover:bg-blue-100 transition-colors"
        onClick={() => setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length)}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}