import React, { useState } from "react";
import { GiRoundStar } from "react-icons/gi";
import {
    IoChatbubbleEllipsesOutline,
    IoCheckmarkCircleOutline,
    IoCloseCircleOutline
} from "react-icons/io5";

export default function OfferCard({ offer, onReject }) {
    const [approved, setApproved] = useState(false);

    return (
        <div
            style={{ borderColor: "var(--gray)" }}
            className="p-4 border rounded-lg flex justify-between items-center mb-3 bg-white shadow-sm">
            <div>
                {/* Header */}
                <h3 className="font-bold text-2xl flex gap-5">
                    {offer.company}
                    <span className="text-base flex items-center font-normal" style={{color: "var(--text)"}}>
                        <GiRoundStar style={{color: "var(--star)", fontSize: "20px"}}/>({offer.rating})
                    </span>
                </h3>
                {/* Card info */}
                <p className="text-sm" style={{color: "var(--text)"}}>Estimated delivery Date : <span className="font-semibold">{offer.date}</span></p>
                <p className="text-sm" style={{color: "var(--text)"}}>Cost: <span className="font-normal text-black">{offer.cost}</span></p>
            </div>

            {/* Card Buttons */}
            {!approved ? (
                <div className="flex gap-2">
                    <button
                        className="px-4 py-1 border border-green-500 text-green-500 rounded-full hover:bg-green-100"
                        onClick={() => setApproved(true)}
                    >
                        <IoCheckmarkCircleOutline /> Approve
                    </button>
                    <button
                        className="px-4 py-1 border border-red-500 text-red-500 rounded-full hover:bg-red-100"
                        onClick={onReject}
                    >
                        <IoCloseCircleOutline /> Reject
                    </button>
                </div>
            ) : (
                <button className="px-4 py-1 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-100">
                    <IoChatbubbleEllipsesOutline /> Connect
                </button>
            )}
        </div>
    );
}
