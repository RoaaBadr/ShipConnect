import React from 'react'

export default function SuccessModal({ onClose, onNavigate }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl text-center w-full max-w-md space-y-4 animate-fade-in">
        <h2 className="text-xl font-semibold text-green-700">✅ Shipment added to the list</h2>
        <p className="text-gray-600">What would you like to do next?</p>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onNavigate}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
}
