import { ChevronDown } from "lucide-react";
function BottomNav() {
    return (
        <div className="ml-100 p-4">
            <ul className="flex items-center gap-11 w-full justify-center">
                <li className="uppercase font-bold">
                    <a href="#">home
                        <ChevronDown className="inline-block size-4" />
                    </a>
                </li>
                <li className="uppercase font-bold">
                <a href="#">shop
                        <ChevronDown className="inline-block size-4" />
                    </a>
                </li>
                <li className="uppercase font-bold">
                <a href="#">Pages
                        <ChevronDown className="inline-block size-4" />
                    </a>
                </li>
                <li className="uppercase font-bold">
                    
                <a href="#">blog
                        <ChevronDown className="inline-block size-4" />
                    </a>
                </li>
                <li className="uppercase font-bold">
                <a href="#">contact</a>
                </li>
            </ul>
        </div>
    )
}

export default BottomNav