import React, { useState } from 'react'

import { mockShipments } from '../../data/mockShipments'
import ShipmentCard from '../../components/ShipmentCard'

export default function ShipmentsList() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredShipments = mockShipments.filter((shipment) =>
    shipment.id.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold mb-6">📦 Shipments</h2>
      
      {/* Search Input */}
      <div className="mb-6 flex items-center">
      <input
        type="text"
        placeholder="Search by ID "
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-blue-300 px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <button className="border border-blue-300 border-l-0 px-4 py-2 rounded-r-md bg-blue-100 hover:bg-blue-200 transition">
          Hi
        </button>
      </div>

      {/* Shipment Cards */}
      {filteredShipments.length > 0 ? (
        filteredShipments.map((shipment) => (
          <ShipmentCard key={shipment.id} shipment={shipment} />
        ))
      ) : (
        <p className="text-gray-500 italic">No shipments found with that ID.</p>
      )}

      {/* Add Shipment button */}
      <div></div>
    </div>
  )
}
// add shipment btn
// add form -> info data.json
// confirm form msg
// filter status