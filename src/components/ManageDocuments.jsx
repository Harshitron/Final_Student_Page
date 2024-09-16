import React from 'react';

export default function ManageDocuments({ hasApplied }) {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Manage Submitted Documents</h1>

      {!hasApplied ? (
        <p className="text-gray-600 text-lg">
          You have not applied yet, and documents will be shown here once your application is accepted.
        </p>
      ) : (
        <div className="bg-white shadow rounded-lg p-4">
          {/* Here you would render the submitted documents once the application is accepted */}
          <p className="text-gray-700">
            Your submitted documents will appear here.
          </p>
        </div>
      )}
    </div>
  );
}
