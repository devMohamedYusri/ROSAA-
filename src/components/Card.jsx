import CardImg from "./CardImg.jsx";

export default function Card({img, title, price, className}) {
    return (
        <div className={`flex flex-col items-center justify-center bg-white p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 ${className}`}>
            <CardImg source={img} className="w-full h-auto" />
            <h3 className="text-gray-900 text-lg sm:text-xl font-semibold text-center mt-2">{title}</h3>
            <p className="text-gray-600 text-xs sm:text-sm mt-1">{price}</p>
        </div>
    )
}
