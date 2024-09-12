import CardImg from "./CardImg";

export default function Card({img,title,price,className}) {
    return (
        <div className={`flex flex-col items-center justify-center bg-white p-4 ${className} `}>
            <CardImg source={`${img}`}/>
            <h3 className="text-gray-900 text-xl font-semibold text-center">{title}</h3>
            <p className="text-gray-600 text-sm">{price}</p>
        </div>
    )
}
