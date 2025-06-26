import React from 'react'

import { useNavigate } from 'react-router-dom'

export default function ShipmentCard({ shipment }) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/shipment/${shipment.id}`)}
      className="cursor-pointer border rounded-lg p-4 shadow hover:shadow-lg transition"
    >
      <div className="flex justify-between">
        <p className="font-bold text-blue-700">Transit ID #{shipment.id}</p>
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            shipment.status === 'Delivered'
              ? 'bg-green-100 text-green-700'
              : shipment.status === 'On Transit'
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-orange-100 text-orange-700'
          }`}
        >
          {shipment.status}
        </span>
      </div>

      <div className="mt-2">
        <p className="font-medium">{shipment.company}</p>
        <p>{shipment.address}</p>
        <p className="text-sm text-gray-500">
          {shipment.shippedDate && `Shipped: ${shipment.shippedDate}`} <br />
          {shipment.deliveredDate && `Delivered: ${shipment.deliveredDate}`}
        </p>
      </div>
    </div>
  )
}
