import React, { useEffect, useState } from "react";
import { fetchShops } from "@/lib/supabaseClient";

export default function ShopsList({ onSelectShop }) {
  const [selectedShops, setSelectedShops] = useState([]);
  const [shop, setShop] = useState([]);

  useEffect(() => {
    fetchShops().then(setShop);
  }, []);

  const toggleShop = (shopId) => {
    const updatedShops = selectedShops.includes(shopId)
      ? selectedShops.filter((id) => id !== shopId)
      : [...selectedShops, shopId];
  
    setSelectedShops(updatedShops);
    onSelectShop(updatedShops); // Propagate to parent
  };

  return (
    <div className="flex justify-between flex-row gap-6">
      {shop.map((shop) => (
        <button
          key={shop.id}
          className={`p-2 flex-1 text-center rounded-md shadow-md transition-all duration-300 ${selectedShops.includes(shop.id)
              ? "bg-orange-500 text-white border border-orange-600"
              : "bg-gray-200 text-gray-800 hover:bg-orange-100"
            }`}
          onClick={() => toggleShop(shop.id)}
        >
          {shop.name}
        </button>
      ))}
    </div>
  );
}
