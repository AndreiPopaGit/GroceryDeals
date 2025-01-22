'use client';
import { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList/ProductList';
import ShopsBanner from './components/ShopsBanner';

export default function Home() {
  const [selectedShops, setSelectedShops] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleShopSelect = (shops) => setSelectedShops(shops);
  const handleCategorySelect = (category) => setSelectedCategory(category);
  const handleSearch = (query) => setSearchQuery(query.toLowerCase());

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <ShopsBanner 
        onShopSelect={handleShopSelect} 
        onCategorySelect={handleCategorySelect} 
      />
      <ProductList 
        shops={selectedShops} 
        category={selectedCategory} 
        searchQuery={searchQuery} 
      />
    </>
  );
}
