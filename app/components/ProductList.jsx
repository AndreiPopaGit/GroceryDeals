import React from "react";
import { Tag, Store, Percent } from "lucide-react";
import ProductCard from "./ProductCard";

const ProductList = ({ shops, category }) => {
  const products = [
    {
      product_name: "Ceafă de porc fără os",
      price_before_discount: "31.20 LEI",
      price_after_discount: "19.99 LEI",
      discount_percentage: "-35%",
      category: "Meat",
      shop: "Lidl",
    },
    {
      product_name: "Pui grill",
      price_before_discount: "25.00 LEI",
      price_after_discount: "18.75 LEI",
      discount_percentage: "-25%",
      category: "Meat",
      shop: "Kaufland",
    },
    {
      product_name: "Mere Golden",
      price_before_discount: "10.00 LEI",
      price_after_discount: "7.00 LEI",
      discount_percentage: "-30%",
      category: "Fruits",
      shop: "Auchan",
    },
    {
      product_name: "Ciocolată Milka",
      price_before_discount: "15.00 LEI",
      price_after_discount: "10.50 LEI",
      discount_percentage: "-30%",
      category: "Sweets",
      shop: "Mega Image",
    },
    {
        product_name: "Cheese Block",
        price_before_discount: "20.00 LEI",
        price_after_discount: "15.00 LEI",
        discount_percentage: "-25%",
        category: "Lactate",
        shop: "Carrefour",
      },
      {
        product_name: "Salmon Fillet",
        price_before_discount: "45.00 LEI",
        price_after_discount: "30.00 LEI",
        discount_percentage: "-33%",
        category: "Meat",
        shop: "Auchan",
      },
      {
        product_name: "Banane",
        price_before_discount: "8.00 LEI",
        price_after_discount: "6.50 LEI",
        discount_percentage: "-19%",
        category: "Fruits",
        shop: "Lidl",
      },
      {
        product_name: "Coca-Cola",
        price_before_discount: "6.00 LEI",
        price_after_discount: "4.50 LEI",
        discount_percentage: "-25%",
        category: "Bauturi si Tutun",
        shop: "Kaufland",
      },
      {
        product_name: "Pepsi Max",
        price_before_discount: "5.50 LEI",
        price_after_discount: "4.00 LEI",
        discount_percentage: "-27%",
        category: "Bauturi si Tutun",
        shop: "Lidl",
      },
      {
        product_name: "Toothpaste Colgate",
        price_before_discount: "12.00 LEI",
        price_after_discount: "8.00 LEI",
        discount_percentage: "-33%",
        category: "Hygiene",
        shop: "Mega Image",
      },
      {
        product_name: "Detergent Ariel",
        price_before_discount: "40.00 LEI",
        price_after_discount: "32.00 LEI",
        discount_percentage: "-20%",
        category: "Cleaning",
        shop: "Carrefour",
      },
      {
        product_name: "Cookies Chocolate Chip",
        price_before_discount: "18.00 LEI",
        price_after_discount: "13.00 LEI",
        discount_percentage: "-28%",
        category: "Sweets",
        shop: "Lidl",
      },
      {
        product_name: "Orange Juice",
        price_before_discount: "12.50 LEI",
        price_after_discount: "9.00 LEI",
        discount_percentage: "-28%",
        category: "Bauturi si Tutun",
        shop: "Auchan",
      },
      { product_name: "Banane", price_before_discount: "8.00 LEI", price_after_discount: "6.50 LEI", discount_percentage: "-19%", category: "Fruits", shop: "Lidl" },
      { product_name: "Coca-Cola", price_before_discount: "6.00 LEI", price_after_discount: "4.50 LEI", discount_percentage: "-25%", category: "Bauturi si Tutun", shop: "Kaufland" },
      { product_name: "Pepsi Max", price_before_discount: "5.50 LEI", price_after_discount: "4.00 LEI", discount_percentage: "-27%", category: "Bauturi si Tutun", shop: "Lidl" },
      { product_name: "Toothpaste Colgate", price_before_discount: "12.00 LEI", price_after_discount: "8.00 LEI", discount_percentage: "-33%", category: "Hygiene", shop: "Mega Image" },
      { product_name: "Detergent Ariel", price_before_discount: "40.00 LEI", price_after_discount: "32.00 LEI", discount_percentage: "-20%", category: "Cleaning", shop: "Carrefour" },
      { product_name: "Cookies Chocolate Chip", price_before_discount: "18.00 LEI", price_after_discount: "13.00 LEI", discount_percentage: "-28%", category: "Sweets", shop: "Lidl" },
      { product_name: "Orange Juice", price_before_discount: "12.50 LEI", price_after_discount: "9.00 LEI", discount_percentage: "-28%", category: "Bauturi si Tutun", shop: "Auchan" },
      { product_name: "Pâine Neagră", price_before_discount: "5.00 LEI", price_after_discount: "4.00 LEI", discount_percentage: "-20%", category: "Bakery", shop: "Lidl" },
      { product_name: "Croissant", price_before_discount: "4.50 LEI", price_after_discount: "3.00 LEI", discount_percentage: "-33%", category: "Bakery", shop: "Carrefour" },
      { product_name: "Tuna Cans", price_before_discount: "15.00 LEI", price_after_discount: "11.00 LEI", discount_percentage: "-27%", category: "Canned", shop: "Auchan" },
      { product_name: "Olive Oil", price_before_discount: "30.00 LEI", price_after_discount: "22.50 LEI", discount_percentage: "-25%", category: "Cooking Essentials", shop: "Kaufland" },
      { product_name: "Butter", price_before_discount: "12.00 LEI", price_after_discount: "9.00 LEI", discount_percentage: "-25%", category: "Lactate", shop: "Mega Image" },
      { product_name: "Eggs (12 Pack)", price_before_discount: "10.00 LEI", price_after_discount: "7.50 LEI", discount_percentage: "-25%", category: "Lactate", shop: "Lidl" },
      { product_name: "Greek Yogurt", price_before_discount: "8.00 LEI", price_after_discount: "6.50 LEI", discount_percentage: "-19%", category: "Lactate", shop: "Carrefour" },
      { product_name: "Rice Basmati", price_before_discount: "20.00 LEI", price_after_discount: "15.00 LEI", discount_percentage: "-25%", category: "Cooking Essentials", shop: "Auchan" },
      { product_name: "Chicken Wings", price_before_discount: "22.00 LEI", price_after_discount: "16.50 LEI", discount_percentage: "-25%", category: "Meat", shop: "Lidl" },
      { product_name: "Beef Steak", price_before_discount: "60.00 LEI", price_after_discount: "48.00 LEI", discount_percentage: "-20%", category: "Meat", shop: "Kaufland" },
      { product_name: "Apples Granny Smith", price_before_discount: "9.00 LEI", price_after_discount: "6.00 LEI", discount_percentage: "-33%", category: "Fruits", shop: "Mega Image" },
      { product_name: "Lemonade", price_before_discount: "15.00 LEI", price_after_discount: "12.00 LEI", discount_percentage: "-20%", category: "Bauturi si Tutun", shop: "Auchan" },
      { product_name: "Vegetable Mix (Frozen)", price_before_discount: "18.00 LEI", price_after_discount: "14.00 LEI", discount_percentage: "-22%", category: "Frozen", shop: "Carrefour" },

  ];

  const filteredProducts = products.filter(
    (product) =>
      (shops.length === 0 || shops.includes(product.shop)) &&
      (!category || product.category === category)
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-orange-50 via-white to-orange-100">
      <h2 className="text-4xl font-bold text-orange-800 mb-6 text-center">
        Today's Best Grocery Deals
      </h2>

      {filteredProducts.length === 0 ? (
        <div className="flex-grow text-center text-gray-600 mt-8">
          <p className="text-lg">No products match your filters.</p>
        </div>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;