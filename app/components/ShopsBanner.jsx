import StaticShopCard from '../components/StaticShopCard'
import StaticCategory from '../components/StaticCategory'

const ShopsBanner = ({ onShopSelect, onCategorySelect }) => (
    <div className="bg-gradient-to-r from-purple-900 to-orange-800 text-white p-4 relative overflow-hidden">
      <StaticShopCard onSelectShop={onShopSelect} />
      <StaticCategory onSelectCategory={onCategorySelect} />
    </div>
  );
  export default ShopsBanner;
  