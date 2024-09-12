import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

function BottomNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: "home", hasDropdown: true },
        { name: "shop", hasDropdown: true },
        { name: "Pages", hasDropdown: true },
        { name: "blog", hasDropdown: true },
        { name: "contact", hasDropdown: false },
    ];

    return (
        <nav className="p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between lg:hidden">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        className="bg-white text-pink-300 hover:text-pink-400 border border-pink-300 rounded-md p-1 transition-colors"
                    >
                        <Menu size={24} />
                    </button>
                </div>
                <ul className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:justify-center lg:gap-8 space-y-4 lg:space-y-0`}>
                    {navItems.map((item, index) => (
                        <li key={index} className="uppercase font-bold">
                            <a href="#" className="flex items-center justify-between">
                                {item.name}
                                {item.hasDropdown && <ChevronDown className="inline-block size-4 ml-1" />}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default BottomNav;