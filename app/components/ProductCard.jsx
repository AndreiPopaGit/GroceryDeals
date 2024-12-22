import React from "react";
import { Store } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gradient-to-b from-white via-purple-50 to-purple-100 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl border border-gray-200">
      <div className="bg-gradient-to-r from-purple-400 to-purple-600 p-4">
        <h3 className="text-lg font-semibold text-white">
          {product.product_name}
        </h3>
        <p className="text-sm text-purple-200">{product.category}</p>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="line-through text-gray-400 text-sm">
              {product.price_before_discount}
            </span>
            <p className="text-xl font-bold text-purple-800">
              {product.price_after_discount}
            </p>
          </div>
          <span className="bg-purple-500 text-white text-xs font-semibold py-1 px-3 rounded-full">
            {product.discount_percentage}
          </span>
        </div>
        <div className="flex items-center text-gray-700 text-sm">
          <Store className="w-4 h-4 mr-1 text-purple-500" />
          <span>{product.shop}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
