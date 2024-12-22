'use client'

import React, { useState } from "react";

const shops = [
  "Auchan",
  "Kaufland",
  "Carrefour",
  "Lidl",
  "Mega Image"
];

export default function ShopsList({ onSelectShop }) {
  const [selectedShops, setSelectedShops] = useState([]);

  const toggleShop = (shop) => {
    const updatedShops = selectedShops.includes(shop)
      ? selectedShops.filter((s) => s !== shop)
      : [...selectedShops, shop];

    setSelectedShops(updatedShops);
    onSelectShop(updatedShops); // Propagate to parent
  };

  return (
    <div className="flex justify-between flex-row gap-6">
      {shops.map((shop) => (
        <button
        key={shop}
        className={`p-2 flex-1 text-center rounded-md shadow-md transition-all duration-300 ${
          selectedShops.includes(shop)
            ? "bg-orange-500 text-white border border-orange-600"
            : "bg-gray-200 text-gray-800 hover:bg-orange-100"
        }`}
        onClick={() => toggleShop(shop)}
      >
        {shop}
      </button>      
      ))}
    </div>
  );
}
