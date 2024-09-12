import SemiTitle from './SemiTitle.jsx'
import Title from './Title.jsx'
import Card from './Card.jsx'
import '../style/TopNav.css'
import { Dot } from 'lucide-react'
export default function BestSeller() {
    return (
        <section className="flex flex-col py-20 ">
            <div className="top-Content w-screen flex flex-col items-center ">
                <SemiTitle text="our flowers" />
                <Title text="shop Best sellers" className="my-10 text-5xl leading-loose" />
            </div>
            <div className="cards flex  w-screen gap-3">
                <Card img="/img16.jpg" title="Rose" price="22$" className="w-[20%]" />
                <Card img="/img16.jpg" title="Rose" price="22$" className="w-[20%]" />
                <Card img="/img16.jpg" title="Rose" price="22$" className="w-[20%]" /> 
                <Card img="/img16.jpg" title="Rose" price="22$" className="w-[20%]" /> 
                <Card img="/img16.jpg" title="Rose" price="22$" className="w-[20%]" />
            </div>
            <div className="dots flex gap-5 pt-7 w-screen justify-center">
                <Dot className=" rounded-full border-2 border-black" />
                <Dot className="text-gray-400" />
                <Dot className="text-gray-400" />
                <Dot className="text-gray-400" />
                <Dot className="text-gray-400" />
            </div>
        </section>
    )
}
