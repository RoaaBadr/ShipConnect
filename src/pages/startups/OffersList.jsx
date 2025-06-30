import React, { useState } from "react";
import { mockOffers } from "../../data/mockOffers";
import OfferCard from "../../components/OfferCard/OfferCard";

export default function OffersList() {
  const [data, setData] = useState(mockOffers);

  const handleReject = (shipmentId, offerId) => {
    const updated = data.map((shipment) =>
      shipment.shipmentId === shipmentId
        ? {
            ...shipment,
            offers: shipment.offers.filter((o) => o.id !== offerId),
          }
        : shipment
    ).filter(s => s.offers.length > 0); // remove shipment group if empty
    setData(updated);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">📦 Offers</h2>

      {/* Search (UI only for now) */}
      <div className="mb-6 flex items-center">
        <input
          type="text"
          placeholder="Search For ID"
          className="border border-blue-300 px-4 py-2 rounded-l-md w-full"
        />
        <button className="border border-blue-300 border-l-0 px-4 py-2 rounded-r-md">
          ⚙️
        </button>
      </div>

      {data.map((shipment) => (
        <div key={shipment.shipmentId} className="mb-8">
          <h4 className="text-blue-800 font-medium mb-3">📦 Shipment ID: #{shipment.shipmentId}</h4>
          {shipment.offers.map((offer) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              onReject={() => handleReject(shipment.shipmentId, offer.id)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
