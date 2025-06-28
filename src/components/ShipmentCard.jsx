import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  IoIosCheckmarkCircleOutline, // Delivered
  IoIosTimer,                  // On Transit
  IoIosInformationCircleOutline // Pending
} from "react-icons/io"

export default function ShipmentCard({ shipment }) {
  const navigate = useNavigate()

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Delivered':
        return <IoIosCheckmarkCircleOutline className="text-green-600 text-lg mr-1" />
      case 'On Transit':
        return <IoIosTimer className="text-yellow-600 text-lg mr-1" />
      case 'Pending':
        return <IoIosInformationCircleOutline className="text-orange-600 text-lg mr-1" />
      default:
        return null
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-700'
      case 'On Transit':
        return 'bg-yellow-100 text-yellow-700'
      case 'Pending':
        return 'bg-orange-100 text-orange-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div
      onClick={() => navigate(`/shipment/${shipment.id}`)}
      style={{ borderColor: "#B0B6C4" }}
      className="cursor-pointer border rounded-lg p-4 shadow-xs hover:shadow-sm transition"
    >
      <div className="flex justify-between items-center">
        <p className="font-normal text-xl text-slate-800">ID #{shipment.id}</p>

        <span className={`flex items-center text-sm px-3 py-1 rounded-lg 
          ${getStatusColor(shipment.status)}`}>
          {getStatusIcon(shipment.status)}
          {shipment.status}
        </span>
      </div>

      <p className="text-gray-500 text-sm mt-1">
        {shipment.date && `${shipment.date}`}
      </p>
    </div>
  )
}
