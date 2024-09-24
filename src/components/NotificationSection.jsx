import { useState } from 'react'
import { Bell, AlertCircle } from 'lucide-react'
import React from 'react';

export default function NotificationSection() {
  const [activeTab, setActiveTab] = useState('general')

  const generalNotifications = [
    'Application deadline extended to January 15, 2024.',
    'New courses added to the eligible list.',
    'Scholarship amount announced for the academic year 2024-25.',
    'Webinar on application process scheduled for next week.',
  ]

  const applicationNotifications = [
    { type: 'success', message: 'Your application has been successfully submitted' },
    { type: 'warning', message: 'Document verification pending. Please check your email for instructions.' },
    { type: 'info', message: 'Interview scheduled for January 20, 2024. Check your email for details.' },
    { type: 'error', message: 'Action required: Update your contact information within 7 days.' },
  ]

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'success':
        return <Bell className="w-5 h-5 text-green-500" />
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-500" />
      default:
        return <Bell className="w-5 h-5 text-blue-500" />
    }
  }

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Bell className="mr-2" />
        Notifications
      </h2>
      <div className="flex mb-4">
        <button
          className={`flex-1 py-2 px-4 ${activeTab === 'general' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-l-lg`}
          onClick={() => setActiveTab('general')}
        >
          General
        </button>
        <button
          className={`flex-1 py-2 px-4 ${activeTab === 'application' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-r-lg`}
          onClick={() => setActiveTab('application')}
        >
          Application
        </button>
      </div>
      {activeTab === 'general' ? (
        <ul className="space-y-2">
          {generalNotifications.map((notification, index) => (
            <li key={index} className="flex items-start">
              <span className="bg-blue-100 text-blue-800 font-semibold px-2 py-1 rounded-full mr-2">
                {index + 1}
              </span>
              <span className="text-sm text-gray-600">{notification}</span>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="space-y-2">
          {applicationNotifications.map((notification, index) => (
            <li key={index} className="flex items-start">
              {getNotificationIcon(notification.type)}
              <span className="ml-2 text-sm text-gray-600">{notification.message}</span>
            </li>
          ))}
        </ul>
      )}
      <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 md:hidden">
        View All Notifications
      </button>
    </div>
  )
}