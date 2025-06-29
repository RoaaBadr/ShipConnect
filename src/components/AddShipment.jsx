import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SuccessModal from '../components/SuccessModal'
import { IoClose } from 'react-icons/io5'
import { v4 as uuid } from 'uuid';


export default function AddShipment({ onAddShipment }) {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  const [formData, setFormData] = useState({
    id: '',
    company: '',
    email: '',
    phone: '',
    address: '',
    recipientCompany: '',
    recipientEmail: '',
    recipientPhone: '',
    recipientAddress: '',
    shipmentType: '',
    weight: '',
    dimensions: '',
    quantity: '',
    requestDate: '',
    budget: '',
    shippingSpeed: '',
    vehicleType: '',
    packaging: '',
    status: 'Pending'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add generated ID
    const newShipment = {
      ...formData, 
      id: uuid().slice(0, 8)
    }
    console.log(newShipment)
    onAddShipment(newShipment)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setFormData({
      id: '', company: '', email: '', phone: '', address: '',
      recipientCompany: '', recipientEmail: '', recipientPhone: '', recipientAddress: '',
      shipmentType: '', weight: '', dimensions: '', quantity: '',
      requestDate: '', budget: '', shippingSpeed: '', vehicleType: '', packaging: '',
      status: 'Pending'
    })
  }

  const handleNavigate = () => {
    navigate('/shipments')
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6 relative bg-[#F3F5F9] min-h-screen">
      <div className="text-xl font-semibold text-[#1A3D65] flex items-center gap-2">
        <button onClick={() => navigate(-1)} className="text-2xl">←</button>
        Shipment Data
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-6 space-y-8 relative">
        {/* Top Right Close Button */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl"
        >
          <IoClose />
        </button>

        {/* Sender Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#1A3D65]">📮 Sender Information (Startup)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="company" placeholder="Enter Your Name" required value={formData.company} onChange={handleChange} className="border border-[#1A3D65] rounded-xl px-4 py-2 text-sm placeholder:text-gray-400" />
            <input name="email" type="email" placeholder="Enter Your Email" required value={formData.email} onChange={handleChange} className="border border-[#1A3D65] rounded-xl px-4 py-2 text-sm placeholder:text-gray-400" />
            <input name="phone" placeholder="Enter Your Number" required value={formData.phone} onChange={handleChange} className="border border-[#1A3D65] rounded-xl px-4 py-2 text-sm placeholder:text-gray-400" />
            <input name="address" placeholder="Enter Your Address" required value={formData.address} onChange={handleChange} className="border border-[#1A3D65] rounded-xl px-4 py-2 text-sm placeholder:text-gray-400" />
          </div>
        </div>

        {/* Recipient Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#1A3D65]">👤 Recipient Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="recipientCompany" placeholder="Enter Your Name" required value={formData.recipientCompany} onChange={handleChange} className="border border-[#1A3D65] rounded-xl px-4 py-2 text-sm placeholder:text-gray-400" />
            <input name="recipientEmail" type="email" placeholder="Enter Your Email" required value={formData.recipientEmail} onChange={handleChange} className="border border-[#1A3D65] rounded-xl px-4 py-2 text-sm placeholder:text-gray-400" />
            <input name="recipientPhone" placeholder="Enter Your Number" required value={formData.recipientPhone} onChange={handleChange} className="border border-[#1A3D65] rounded-xl px-4 py-2 text-sm placeholder:text-gray-400" />
            <input name="recipientAddress" placeholder="Enter Your Address" required value={formData.recipientAddress} onChange={handleChange} className="border border-[#1A3D65] rounded-xl px-4 py-2 text-sm placeholder:text-gray-400" />
          </div>
        </div>

        {/* Shipment Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#1A3D65]">📦 Shipment Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="shipmentType" placeholder="Your shipment type" required value={formData.shipmentType} onChange={handleChange} className="input" />
            <input name="weight" placeholder="Shipment Weight" required value={formData.weight} onChange={handleChange} className="input" />
            <input name="dimensions" placeholder="Shipment Dimensions" required value={formData.dimensions} onChange={handleChange} className="input" />
            <input name="quantity" placeholder="Quantity" required value={formData.quantity} onChange={handleChange} className="input" />
            <input name="requestDate" type="date" placeholder="Estimated Date" required value={formData.requestDate} onChange={handleChange} className="input" />
            <input name="budget" placeholder="Placeholder text..." required value={formData.budget} onChange={handleChange} className="input" />
            <select name="shippingSpeed" required value={formData.shippingSpeed} onChange={handleChange} className="input">
              <option value="">Select Shipping Speed</option>
              <option value="Standard">Standard</option>
              <option value="Express">Express</option>
            </select>
            <select name="vehicleType" required value={formData.vehicleType} onChange={handleChange} className="input">
              <option value="">Select Preferred Vehicle Type</option>
              <option value="Truck">Truck</option>
              <option value="Van">Van</option>
              <option value="Bike">Bike</option>
            </select>
            <select name="packaging" required value={formData.packaging} onChange={handleChange} className="input">
              <option value="">Select Packaging Option</option>
              <option value="Box">Box</option>
              <option value="Envelope">Envelope</option>
              <option value="Crate">Crate</option>
            </select>
            <select name="status" value={formData.status} onChange={handleChange} className="input">
              <option value="Pending">Pending</option>
              <option value="On Transit">On Transit</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        </div>

        <div className="pt-4">
          <button type="submit" className="w-full bg-[#1A3D65] text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#163150] transition">
             Add
          </button>
        </div>
      </form>

      {showModal && (
        <SuccessModal onClose={handleCloseModal} onNavigate={handleNavigate} />
      )}
    </div>
  )
}