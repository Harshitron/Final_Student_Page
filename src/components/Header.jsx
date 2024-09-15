import React from 'react';
export default function Header({ changeFontSize }) {
    return (
      <header className="bg-blue-700 text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button onClick={() => changeFontSize('sm')} className="text-sm">A-</button>
            <button onClick={() => changeFontSize('base')} className="text-sm">A</button>
            <button onClick={() => changeFontSize('lg')} className="text-sm">A+</button>
            <select className="bg-blue-600 text-white text-sm p-1 rounded">
              <option>English</option>
              <option>हिंदी</option>
            </select>
          </div>
        </div>
      </header>
    )
  }