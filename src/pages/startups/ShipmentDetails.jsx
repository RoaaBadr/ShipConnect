import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { mockShipments } from '../../data/mockShipments'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { FaArrowLeft, FaPaperPlane } from 'react-icons/fa'

export default function ShipmentDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const shipment = mockShipments.find((s) => s.id === id)

  if (!shipment) {
    return <div className="p-6 text-center text-red-600">Shipment not found.</div>
  }

  return (
    <div className="min-h-screen bg-[#e5e8ef] px-4 py-6">
      {/* Back & Title */}
      <div className="flex items-center gap-2 mb-4 text-slate-700 font-medium">
        <FaArrowLeft className="cursor-pointer" onClick={() => navigate(-1)} />
        <span className="text-lg text-slate-800">Transit ID</span>
        <span className="text-sm text-slate-400">#{shipment.id}</span>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-md p-6 relative max-w-4xl mx-auto">
        {/* Delivered badge */}
        {shipment.status === 'Delivered' && (
          <span className="absolute top-5 right-5 bg-green-100 text-green-700 px-3 py-1 text-sm rounded-full flex items-center gap-1">
            <IoIosCheckmarkCircleOutline className="text-lg" /> Delivered
          </span>
        )}

        {/* 2-Column Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-500 mt-4">
          <div>
            <p className="mb-1">Shipping Company Name</p>
            <p className="text-base font-semibold text-slate-800">{shipment.company}</p>
          </div>
          <div>
            <p className="mb-1">Shipping Cost</p>
            <p className="text-base font-semibold text-slate-800">${shipment.shippingCost}</p>
          </div>
          <div>
            <p className="mb-1">Tracking Number</p>
            <p className="text-base font-semibold text-slate-800">{shipment.trackNum}</p>
          </div>
          <div>
            <p className="mb-1">Shipping Date</p>
            <p className="text-base font-semibold text-slate-800">Shipped: {shipment.shippedDate}</p>
          </div>
          <div>
            <p className="mb-1">Destination Address</p>
            <p className="text-base font-semibold text-slate-800">{shipment.address}</p>
          </div>
          <div>
            <p className="mb-1">Delivery Date</p>
            <p className="text-base font-semibold text-slate-800">Delivered: {shipment.deliveredDate}</p>
          </div>
        </div>

        {/* Feedback input */}
        <div className="mt-8 flex items-center border border-blue-300 rounded-full overflow-hidden">
          <span className="px-3 text-gray-500">💬</span>
          <input
            type="text"
            placeholder="enter your feedback"
            className="flex-1 px-2 py-2 outline-none"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-r-full hover:bg-blue-700">
            <FaPaperPlane className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  )
}

// edit form
// edit confirmation