const TableHeader = () => {
    return (
      <thead className="bg-gradient-to-r from-purple-900 to-orange-800 text-white">
        <tr>
          <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold">
            Product
          </th>
          <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold">
            Price
          </th>
          <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold">
            Discount
          </th>
          <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold">
            Shop
          </th>
          <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold">
            Category
          </th>
        </tr>
      </thead>
    );
  };
  
  export default TableHeader;
  