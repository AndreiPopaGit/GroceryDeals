import React, { useEffect, useState } from "react";
import ProductTable from "./ProductTable";

const ProductList = ({ shops: selectedShops, category, searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [allShops, setAllShops] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("/api/products").then((res) => res.json()),
      fetch("/api/shops").then((res) => res.json()),
    ])
      .then(([fetchedProducts, fetchedShops]) => {
        setProducts(fetchedProducts);
        setAllShops(fetchedShops);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesShop =
      selectedShops.length === 0 || selectedShops.includes(product.shop_id);
    const matchesCategory =
      category.length === 0 || category.includes(product.category_id);
    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesShop && matchesCategory && matchesSearch;
  });

  const getShopName = (shopId) => {
    const shop = allShops.find((shop) => shop.id === shopId);
    return shop ? shop.name : "Unknown Shop";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100 p-4">
      <h2 className="text-4xl font-bold text-orange-800 mb-6 text-center">
        Product Inventory
      </h2>
      {searchQuery && (
        <div
          className="text-sm font-medium text-gray-700 mb-4"
          style={{
            display: 'inline-block',
            backgroundColor: '#f4f4f4',
            borderRadius: '15px',
            padding: '5px 15px',
            marginBottom: '15px',
          }}
        >
          Filter: <span className="text-orange-600 font-semibold">{searchQuery}</span>
        </div>
      )}
      {filteredProducts.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>No products match your filters.</p>
        </div>
      ) : (
        <ProductTable products={filteredProducts} getShopName={getShopName} />
      )}
    </div>
  );
};

export default ProductList;
