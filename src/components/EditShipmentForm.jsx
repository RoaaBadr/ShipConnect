import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EditModal from '../components/EditModal'
import { mockShipments } from '../data/mockShipments'

import { PiPackageLight } from 'react-icons/pi'
import { HiOutlineCalendarDateRange, HiOutlineMapPin  } from "react-icons/hi2";
import { LuWeight } from "react-icons/lu";
import { RxDimensions } from "react-icons/rx";
import { AiOutlineEdit } from "react-icons/ai";

export default function EditShipmentForm({ onUpdate }) {
  const navigate = useNavigate()

  const { id } = useParams()
  const [showModal, setShowModal] = useState(false)

  const shipment = mockShipments.find((s) => s.id === id)
  const [formData, setFormData] = useState({
    id: shipment?.id || '',
    requestDate: shipment?.date || '',
    weight: '',
    goodsType: '',
    dimensions: '',
    destination: shipment?.address || '',
  })

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()    
    console.log('Updated Shipment:', formData)

    if (onUpdate) {
    onUpdate(formData)
  }
    setShowModal(true)
  }
  const handleCloseModal = () => {
    setShowModal(false)
    setFormData({
      id: '',
      company: '',
      status: 'Pending',
      address: '',
      shippingCost: '',
      shippedDate: '',
      deliveredDate: ''
    })
  }

  const handleNavigate = () => {
    navigate('/shipments')
  }
  if (!shipment) {
    return <p className="text-center p-8 text-red-500">Shipment not found.</p>
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl w-5xl mx-auto bg-white p-6 rounded-xl space-y-6 shadow-md animate-fade-in"
      >
        <h2 className="text-xl font-bold text-[#1A3D65] flex items-center gap-2">
          <PiPackageLight className="text-2xl" /> Shipment Details
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-5">

          <div>
            <label className="block mb-1 text-[#204C80]">Shipment Request ID 
              <span className="font-normal text-xs text-[#3C4EC3]"> *</span>
            </label>
            <div className="flex items-center border border-[#255C9C] rounded-2xl px-3 py-2 mt-1">
              <PiPackageLight className="text-[#204C80] mr-2 w-5 h-5" />
              <input
                type="text"
                value={formData.id}
                onChange={(e) => handleChange('id', e.target.value)}
                placeholder="Shipment Request ID"
                className="flex-1 outline-none text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-[#204C80]">Request Date
              <span className="font-normal text-xs text-[#3C4EC3]"> *</span>
            </label>
            <div className="flex items-center border border-[#255C9C] rounded-2xl px-3 py-2 mt-1">
              <HiOutlineCalendarDateRange className="text-[#204C80] mr-2 w-5 h-5" />
              <input
                type="date"
                value={formData.requestDate}
                onChange={(e) => handleChange('requestDate', e.target.value)}
                className="flex-1 outline-none text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-[#204C80]">Weight
              <span className="font-normal text-xs text-[#3C4EC3]"> *</span>
            </label>
            <div className="flex items-center border border-[#255C9C] rounded-2xl px-3 py-2 mt-1">
              <LuWeight className="text-[#204C80] mr-2 w-5 h-5" />
              <input
                type="text"
                value={formData.weight}
                onChange={(e) => handleChange('weight', e.target.value)}
                placeholder="Shipment Weight"
                className="flex-1 outline-none text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-[#204C80]">Type Of Goods
              <span className="font-normal text-xs text-[#3C4EC3]"> *</span>
            </label>
            <div className="flex items-center border border-[#255C9C] rounded-2xl px-3 py-2 mt-1">
              <PiPackageLight className="text-[#204C80] mr-2 w-5 h-5" />
              <input
                type="text"
                value={formData.goodsType}
                onChange={(e) => handleChange('goodsType', e.target.value)}
                placeholder="Type Of Goods"
                className="flex-1 outline-none text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-[#204C80]">Shipment Dimensions
              <span className="font-normal text-xs text-[#3C4EC3]"> *</span>
            </label>
            <div className="flex items-center border border-[#255C9C] rounded-2xl px-3 py-2 mt-1">
              <RxDimensions className="text-[#204C80] mr-2 w-5 h-5" />
              <input
                type="text"
                value={formData.dimensions}
                onChange={(e) => handleChange('dimensions', e.target.value)}
                placeholder="Shipment Dimensions..."
                className="flex-1 outline-none text-sm"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-[#204C80]">Shipment Destination
              <span className="font-normal text-xs text-[#3C4EC3]"> *</span>
            </label>
            <div className="flex items-center border border-[#255C9C] rounded-2xl px-3 py-2 mt-1">
              <HiOutlineMapPin className="text-[#204C80] mr-2 w-5 h-5" />
               <input
                type="text"
                value={formData.destination}
                onChange={(e) => handleChange('destination', e.target.value)}
                placeholder="Shipment Destination"
                className="flex-1 outline-none text-sm"
                required
              />
            </div>
          </div>
          
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="cursor-pointer w-full bg-[#F9751C] text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-orange-600 transition"
          >
            <AiOutlineEdit size={20} /> Edit
          </button>
        </div>
      </form>

      {/* Success Modal */}
      {showModal && (
        <EditModal
        onUpdate={handleUpdate}
          onClose={handleCloseModal}
          onNavigate={handleNavigate}
        />
      )}

    </div>
  )
}