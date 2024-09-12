import { Search, ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";

function TopNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="border-b-2 pb-3 mt-5">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <img src="/img02.svg" alt="logo" className="h-8 md:h-10" />

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="search flex items-center gap-3">
                            <Search className="size-4" />
                            <p className="hidden lg:block">Search</p>
                        </div>
                        <a href="#" className="hover:text-gray-600">My Account</a>
                        <div className="contain flex items-center">
                            <ShoppingBag className="bag size-5" />
                            <p className="count ml-1">0</p>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Menu className="size-6" />
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="mt-4 md:hidden">
                        <div className="search flex items-center gap-3 mb-2">
                            <Search className="size-4" />
                            <p>Search</p>
                        </div>
                        <a href="#" className="block py-2 hover:text-gray-600">My Account</a>
                        <div className="contain flex items-center py-2">
                            <ShoppingBag className="bag size-5" />
                            <p className="count ml-1">0</p>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default TopNav