import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SuccessModal from '../components/SuccessModal'

export default function AddShipment({ onAddShipment }) {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  const [formData, setFormData] = useState({
    id: '',
    company: '',
    status: 'Pending',
    address: '',
    shippingCost: '',
    shippedDate: '',
    deliveredDate: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddShipment(formData)
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

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4 relative">
      <h2 className="text-2xl font-bold"> Add Shipment</h2>

      <form onSubmit={handleSubmit} className="border p-4 rounded-md bg-gray-50 space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input name="id" type="text" placeholder="Shipment ID" required value={formData.id}
            onChange={handleChange} className="border p-2 rounded-md" />
          <input name="company" type="text" placeholder="Company" required value={formData.company}
            onChange={handleChange} className="border p-2 rounded-md" />
          <input name="shippingCost" type="text" placeholder="Shipping Cost" required value={formData.shippingCost}
            onChange={handleChange} className="border p-2 rounded-md" />
          <input name="address" type="text" placeholder="Address" required value={formData.address}
            onChange={handleChange} className="border p-2 rounded-md" />
          <input name="shippedDate" type="date" value={formData.shippedDate}
            onChange={handleChange} className="border p-2 rounded-md" />
          <input name="deliveredDate" type="date" value={formData.deliveredDate}
            onChange={handleChange} className="border p-2 rounded-md" />
          <select name="status" value={formData.status}
            onChange={handleChange} className="border p-2 rounded-md col-span-1 md:col-span-2">
            <option value="Pending">Pending</option>
            <option value="On Transit">On Transit</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Confirm Add
        </button>
      </form>

      {/* Success Modal */}
      {showModal && (
        <SuccessModal
          onClose={handleCloseModal}
          onNavigate={handleNavigate}
        />
      )}
    </div>
  )
}
