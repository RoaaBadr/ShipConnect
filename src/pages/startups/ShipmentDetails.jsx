import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EditShipmentForm from '../../components/EditShipmentForm'

import { IoIosCheckmarkCircleOutline, IoIosTimer } from "react-icons/io"
import { PiWarningCircle } from "react-icons/pi";

import { IoCloseCircleOutline } from "react-icons/io5";
import { AiOutlineEdit } from "react-icons/ai";

import { CiDeliveryTruck } from "react-icons/ci";
import { FaPaperPlane, FaRegCommentDots } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa6'

export default function ShipmentDetails({ shipments, setShipments }) {
  const { id } = useParams()
  const navigate = useNavigate()

  const [shipmentData, setShipmentData] = useState(() =>
    shipments.find((s) => s.id === id)
  )

  useEffect(() => {
    const updated = shipments.find((s) => s.id === id)
    setShipmentData(updated)
  }, [shipments, id])
  const [editModalOpen, setEditModalOpen] = useState(false)

  if (!shipmentData) return <div className="p-6 text-center text-red-600">Shipment not found.</div>

  const handleUpdate = (updatedShipment) => {
    const updatedShipments = shipments.map((s) =>
      s.id === updatedShipment.id ? { ...s, ...updatedShipment } : s
    )
    setShipments(updatedShipments)
  }

  return (
    <div className="min-h-screen bg-[#E4E6EC] px-4 py-6">


      <div className="bg-white rounded-2xl shadow-md pt-6 pb-6 px-6 max-w-4xl mx-auto space-y-5">
        {/* Top Badge */}
        <div className="flex justify-between items-center">
          <div></div>

          {/* Pending Top */}
          {shipmentData.status === 'Pending' && (
            <span className="bg-[#FEEDAA] text-[#C5A30D] px-4 py-3 text-sm rounded-sm flex items-center gap-2">
              <PiWarningCircle className="text-xl" /> Pending
            </span>
          )}
        </div>

        <div className="m-auto px-25 space-y-12 py-5">

          {shipmentData.status === 'Pending' && (
            <>
              {/* Info */}
              <div className="grid md:grid-cols-2 gap-6 text-sm text-[#10233E99]">
                <div>
                  <p className="mb-1">Shipping Requeest ID</p>
                  <p className="text-base font-bold text-[#10233E]">{shipmentData.requestId}</p>
                </div>
                <div>
                  <p className="mb-1">Request Date</p>
                  <p className="text-base font-bold text-[#10233E]">{shipmentData.requestDate}</p>
                </div>
                <div>
                  <p className="mb-1">Shipping Weight</p>
                  <p className="text-base font-bold text-[#10233E]">{shipmentData.weight} kg</p>
                </div>
                <div>
                  <p className="mb-1">Type Of Goods</p>
                  <p className="text-base font-bold text-[#10233E]">Shipped: {shipmentData.goodsType}</p>
                </div>
                <div>
                  <p className="mb-1">Shipping Dimensions</p>
                  <p className="text-base font-bold text-[#10233E]">{shipmentData.dimensions} cm</p>
                </div>
                <div>
                  <p className="mb-1">Shipping Destination</p>
                  <p className="text-base font-bold text-[#10233E]">Delivered: {shipmentData.destination}</p>
                </div>
              </div>
              <div className="pt-4 flex gap-4">
                <button onClick={() => setEditModalOpen(true)} className="flex items-center gap-2 bg-[#F9751C] text-white px-8 py-2 rounded-3xl hover:bg-orange-500 cursor-pointer"><AiOutlineEdit size={20} /> Edit</button>
                <button onClick={() => navigate(-1)} className="flex items-center gap-2 bg-[#CE1C17] text-white px-6 py-2 rounded-3xl hover:bg-red-900 cursor-pointer"><IoCloseCircleOutline size={20} /> Cancel</button>
              </div>

              {/* Edit Form  */}
              {editModalOpen && (
                <EditShipmentForm
                  shipment={shipmentData}
                  onUpdate={handleUpdate}
                  onClose={() => setEditModalOpen(false)}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
