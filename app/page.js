'use client'
import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ShopsBanner from "./components/ShopsBanner";

export default function Home() {
  const [selectedShops, setSelectedShops] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleShopSelect = (shops) => setSelectedShops(shops);
  const handleCategorySelect = (category) => setSelectedCategory(category);

  return (
    <>
      <Navbar />
      <ShopsBanner 
        onShopSelect={handleShopSelect} 
        onCategorySelect={handleCategorySelect} 
      />
      <ProductList shops={selectedShops} category={selectedCategory} />
    </>
  );
}
