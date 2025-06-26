import React from 'react'

import { useParams } from 'react-router-dom'
import { mockShipments } from '../../data/mockShipments'

export default function ShipmentDetails() {
  const { id } = useParams()
  const shipment = mockShipments.find((s) => s.id === id)

  return (
    <div className="min-h-screen bg-gray-300 p-6">

      {/* Top bar with back and ID */}
      <div className="flex items-center mb-4 text-gray-700">
        <button className="mr-2 text-xl">←</button>
        <h2 className="text-lg font-semibold">
          Transit ID <span className="text-gray-400">Transit ID #{shipment.id}</span>
        </h2>
      </div>

      {/* Details Card */}
      <div className="bg-white rounded-xl shadow-md p-6 relative">
        {/* Delivered Badge */}
        <div className="mt-4 flex gap-2">
          {shipment.status === 'Delivered' && (
            <>
              {/* Delivered Badge */}
              <span className="absolute top-4 right-4 bg-green-100 text-green-700 px-3 py-1 text-sm rounded-full flex items-center">
                ✅ Delivered
              </span>

              <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600">
                <div>
                  <p className="mb-1">Shipping Company Name</p>
                  <p className="font-semibold text-gray-900">{shipment.company}</p>
                </div>
                <div>
                  <p className="mb-1">Shipping Cost</p>
                  <p className="font-semibold text-gray-900">{shipment.shippingCost}</p>
                </div>
                <div>
                  <p className="mb-1">Tracking Number</p>
                  <p className="font-semibold text-gray-900">{shipment.trackNum}</p>
                </div>
                <div>
                  <p className="mb-1">Shipping Date</p>
                  <p className="font-semibold text-gray-900">{shipment.shippedDate}</p>
                </div>
                <div>
                  <p className="mb-1">Destination Address</p>
                  <p className="font-semibold text-gray-900">{shipment.address}</p>
                </div>
                <div>
                  <p className="mb-1">Delivery Date</p>
                  <p className="font-semibold text-gray-900">{shipment.deliveredDate}</p>
                </div>
                {/* Feedback Input */}
                <div className="mt-6 flex items-center border border-blue-300 rounded-full overflow-hidden">
                  <span className="px-3 text-gray-500">💬</span>
                  <input
                    type="text"
                    placeholder="enter your feedback"
                    className="flex-1 px-2 py-2 outline-none"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-r-full hover:bg-blue-700">
                    📤
                  </button>
                </div>
              </div>
            </>
          )}
          {shipment.status === 'On Transit' && (
            <button className="bg-yellow-600 text-white px-4 py-2 rounded">Track</button>
          )}
          {shipment.status === 'Pending' && (
            <>
              <button className="bg-gray-600 text-white px-4 py-2 rounded">Edit</button>
              <button className="bg-red-600 text-white px-4 py-2 rounded">Cancel</button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
// go back btn 
// track map
// edit form
// edit confirmation