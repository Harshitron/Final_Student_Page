import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

export default function UpdateApplication() {
  const [isPermitted, setIsPermitted] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsPermitted(true)
    }, 5000) // After 5 seconds, update permission
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you can handle the actual form submission logic (e.g., send data to backend)
    
    // Trigger the toast notification
    toast.success("Your application has been successfully updated!", {
      position: "top-right",
      autoClose: 3000, // Close after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Update Application</h2>
      <p className="mb-6">If SAG Bureau permits, you will be granted to update your application.</p>
      {isPermitted ? (
        <form onSubmit={handleSubmit}>
          {/* Your form fields go here */}
          <button type="submit" className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600">
            Update Now
          </button>
        </form>
      ) : (
        <p className="text-red-500">You are not permitted to update your application yet.</p>
      )}
    </div>
  )
}
