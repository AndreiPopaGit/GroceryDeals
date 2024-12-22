import { Search, User } from "lucide-react";

const Navbar = () => (
  <div className="bg-gradient-to-r from-purple-900 to-orange-800 p-3 shadow-md border-b border-orange-400">

    <div className="flex items-center justify-between max-w-7xl mx-auto">
      {/* Centered Search Bar */}
      <div className="flex-1 mx-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for groceries or shops"
            className="w-full p-2 pl-10 rounded-full border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>

      {/* User Icon */}
      <div className="flex items-center">
        <div className="p-2 bg-orange-600 rounded-full shadow-lg hover:bg-orange-700 transition">
          <User className="text-white w-6 h-6" />
        </div>
      </div>
    </div>
  </div>
);

export default Navbar;
