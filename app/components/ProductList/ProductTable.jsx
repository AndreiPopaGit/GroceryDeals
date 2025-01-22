import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const ProductTable = ({ products, getShopName }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white shadow-md rounded-lg">
        <TableHeader />
        <tbody>
          {products.map((product, index) => (
            <TableRow
              key={product.id}
              product={product}
              shopName={getShopName(product.shop_id)}
              isEven={index % 2 === 0}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
