const TableRow = ({ product, shopName, isEven }) => {
  const categoriesMap = {
    1:"Carne",
    2:"Fructe",
    3:"Dulciuri",
    4:"Lactate",
    5:"Bauturi",
    6:"Diverse",
  };
  return (
    <tr
      className={`${
        isEven ? "bg-white" : "bg-gray-50"
      } hover:bg-gray-100`}
    >
      <td className="border border-gray-300 px-4 py-2 text-sm text-black">{product.name}</td>
      <td className="border border-gray-300 px-4 py-2 text-sm font-medium text-black">
        {product.price_after_discount ? `${product.price_after_discount} RON` : "N/A"}
      </td>
      <td className="border border-gray-300 px-4 py-2 text-sm text-black">{product.discount_percentage === 0 ? "Pret promotional" : `${product.discount_percentage} %`}</td>
      <td className="border border-gray-300 px-4 py-2 text-sm text-black">{shopName}</td>
      <td className="border border-gray-300 px-4 py-2 text-sm text-black">{categoriesMap[product.category_id]}</td>
    </tr>
  );
};

export default TableRow;
