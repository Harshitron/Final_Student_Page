import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What is the Prime Minister's Special Scholarship Scheme (PMSSS)?",
      answer: "PMSSS is a scholarship program initiated by the Government of India to provide financial assistance to meritorious students from Jammu & Kashmir and Ladakh for pursuing undergraduate studies in government and private institutions across the country."
    },
    {
      question: "How many scholarships are awarded each year under PMSSS?",
      answer: "The scheme provides 5,000 scholarships annually to eligible students from J&K and Ladakh."
    },
    {
      question: "What does the PMSSS scholarship cover?",
      answer: "The scholarship covers full tuition fees, hostel fees, and provides a fixed maintenance allowance for living expenses."
    },
    {
      question: "Can I apply for PMSSS if I'm already enrolled in a college outside J&K or Ladakh?",
      answer: "No, PMSSS is only for fresh admissions. Students already enrolled in institutions outside J&K or Ladakh are not eligible."
    },
    {
      question: "Is there an income limit for PMSSS eligibility?",
      answer: "Yes, the family income should not exceed ₹8 lakh per annum to be eligible for PMSSS."
    },
    {
      question: "How is the selection process conducted?",
      answer: "The selection is based on merit, determined by the marks obtained in 10+2 or equivalent examination. Counselling sessions are conducted to allocate seats in various institutions."
    },
    {
      question: "Can I change my course or institution after getting the scholarship?",
      answer: "Generally, changes are not permitted. However, in exceptional cases, the competent authority may consider such requests on a case-by-case basis."
    },
    {
      question: "How is the scholarship amount disbursed?",
      answer: "The scholarship amount is directly transferred to the institution for tuition fees and to the student's bank account for maintenance allowance."
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-700">Frequently Asked Questions</h1>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-blue-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-blue-700">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-white rounded-lg shadow">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Still have questions?</h2>
          <p className="mb-6 text-gray-700">If you could not find the answer you were looking for, please contact us.</p>
          <a href="#" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}