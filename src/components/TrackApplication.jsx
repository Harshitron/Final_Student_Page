import { Link } from 'react-router-dom'

export default function TrackApplication() {
  // Assuming `hasApplied` can be used to determine if the user has applied (in the future).
  // For now, we'll keep it hardcoded to `false`.
  const hasApplied = false

  return (
    <div className="container mx-auto px-4 py-8">
      {!hasApplied ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">You have not applied yet</h2>
          <p className="mb-6">Click the button below to apply.</p>
          <Link to="/apply">
            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
              Apply Now
            </button>
          </Link>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Application Status</h2>
          <p>Your application is under review.</p>
        </div>
      )}
    </div>
  )
}
