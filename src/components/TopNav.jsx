import { Search, ShoppingBag } from "lucide-react";
function TopNav() {
    return (
        <div className="flex items-center justify-between border-b-2 pb-3 mt-5">
            <div className="search flex items-center gap-3">
                <Search className="size-4" />
                <p>Search</p>
            </div>
            <img src="/img02.svg" alt="logo" />
            <div className="nav-links flex items-center gap-2">
                <a href="#">My Account</a>
                <div className="contain flex">
                    <ShoppingBag className="bag size-5" />
                    <p className="count">0</p>
                </div>
            </div>
        </div>
    )
}

export default TopNav