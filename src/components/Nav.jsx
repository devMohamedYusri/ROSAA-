import BottomNav from "./BottomNav.jsx";
import TopNav from "./TopNav.jsx";

export default function Nav() {
    return (
        <nav className="w-full px-4 sm:px-6 md:w-11/12 lg:w-10/12 xl:w-9/12 mx-auto">
            <TopNav />
            <BottomNav />
        </nav>
    )
}
