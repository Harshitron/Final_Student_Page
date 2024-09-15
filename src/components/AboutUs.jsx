import { Book, Users, Award, Briefcase } from 'lucide-react'

export default function AboutUs() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">About PMSSS Scholarship</h1>
        
        <div className="max-w-3xl mx-auto text-gray-700 mb-12">
          <p className="mb-4">
            The Prime Ministers Special Scholarship Scheme (PMSSS) is a flagship initiative of the Government of India aimed at empowering the youth of Jammu & Kashmir and Ladakh. This scheme provides an opportunity for students from these regions to pursue undergraduate studies in top institutions across India.
          </p>
          <p className="mb-4">
            Launched in 2011, PMSSS has been instrumental in opening new avenues for the youth, fostering national integration, and creating a pool of skilled professionals from the region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Our Mission</h2>
            <p className="text-gray-700">
              To provide equal opportunities for higher education to the talented youth of J&K and Ladakh, enabling them to compete at the national level and contribute to the development of their region and the nation.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Our Vision</h2>
            <p className="text-gray-700">
              To create a generation of skilled, confident, and empowered youth from J&K and Ladakh who will be the torchbearers of progress and national integration.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">Key Features of PMSSS</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <Book className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Full Tuition Fee</h3>
            <p className="text-gray-700">Covers the entire tuition fee for the chosen course of study</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Maintenance Allowance</h3>
            <p className="text-gray-700">Provides a yearly allowance for living expenses</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Award className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Merit-Based Selection</h3>
            <p className="text-gray-700">Ensures fair and transparent selection process</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Briefcase className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Career Guidance</h3>
            <p className="text-gray-700">Offers support for future career prospects</p>
          </div>
        </div>
      </div>
    </div>
  )
}