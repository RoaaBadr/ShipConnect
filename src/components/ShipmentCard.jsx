import React from 'react';
import { mockShipments } from '../data/mockOffers';

function ShipmentCard({ input }) {
  const searchTerm = input.trim().toLowerCase();

  const filteredData = mockShipments.filter((el) => {
    return el.id.toLowerCase().includes(searchTerm);
  });

  return (
    <div>
      {filteredData.length > 0 ? (
        <ul className="space-y-2">
          {filteredData.map((item, index) => (
            <li key={index} className="bg-white p-4 rounded shadow">
              <strong>ID:</strong> {item.id} — <strong>Status:</strong> {item.status}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 italic">No shipments found with that ID.</p>
      )}
    </div>
  );
}

export default ShipmentCard;
