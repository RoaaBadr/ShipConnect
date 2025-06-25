import React, { useState } from 'react';
import ShipmentCard from '../../components/ShipmentCard';

function Shipments() {
  const [inputText, setInputText] = useState("");

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">📦 Shipments</h2>

      <div className="mb-6 flex items-center">
        <input
          type="text"
          onChange={handleInput}
          placeholder="Search by ID or Status"
          className="border border-blue-300 px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        <button className="border border-blue-300 border-l-0 px-4 py-2 rounded-r-md bg-blue-100 hover:bg-blue-200 transition">
          ⚙️
        </button>
      </div>

      <ShipmentCard input={inputText} />
    </div>
  );
}

export default Shipments;