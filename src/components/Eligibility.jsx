import { Check, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Eligibility() {
  const eligibilityCriteria = [
    "Must be a domicile of Jammu & Kashmir or Ladakh",
    "Should have passed 10+2 or equivalent exam from J&K or Ladakh board",
    "Age should not be more than 21 years as of 1st July of the application year",
    "Family income should not exceed ₹8 lakh per annum",
    "Should not be availing any other scholarship for the same course"
  ]

  const ineligibleCriteria = [
    "Students pursuing courses through distance learning mode",
    "Students already enrolled in institutions outside J&K or Ladakh",
    "Students who have already availed PMSSS scholarship in previous years",
    "Candidates pursuing Diploma courses"
  ]

  const documents = [
    "Domicile Certificate",
    "10+2 Mark Sheet",
    "Income Certificate",
    "Aadhaar Card",
    "Bank Account Details",
    "Passport Size Photograph"
  ]

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-700">Eligibility Criteria for PMSSS Scholarship</h1>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">Eligible Candidates</h2>
            <ul className="space-y-4">
              {eligibilityCriteria.map((criterion, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>{criterion}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">Ineligible Candidates</h2>
            <ul className="space-y-4">
              {ineligibleCriteria.map((criterion, index) => (
                <li key={index} className="flex items-start">
                  <X className="w-6 h-6 text-red-500 mr-2 flex-shrink-0" />
                  <span>{criterion}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-blue-700">Required Documents</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {documents.map((document, index) => (
              <li key={index} className="flex items-center">
                <Check className="w-5 h-5 text-blue-500 mr-2" />
                <span>{document}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Ready to Apply?</h2>
          <p className="mb-6 text-gray-700">If you meet the eligibility criteria, do not miss this opportunity!</p>
          <Link to="/apply">
            <button className="bg-slate-400 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}