import SemiTitle from './SemiTitle.jsx'
import Title from './Title.jsx'
import Card from './Card.jsx'
import '../style/TopNav.css'
import { Dot } from 'lucide-react'

export default function BestSeller() {
    return (
        <section className="flex flex-col py-10 md:py-20">
            <div className="top-Content w-full flex flex-col items-center">
                <SemiTitle text="our flowers" />
                <Title text="shop Best sellers" className="my-5 md:my-10 text-3xl md:text-5xl leading-tight md:leading-loose" />
            </div>
            <div className="cards flex flex-wrap justify-center w-full gap-4 px-4">
                {[1, 2, 3, 4, 5].map((_, index) => (
                    <Card key={index} img="/img16.jpg" title="Rose" price="22$" className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] xl:w-[18%] mb-4" />
                ))}
            </div>
            <div className="dots flex gap-3 pt-5 w-full justify-center">
                {[1, 2, 3, 4, 5].map((_, index) => (
                    <Dot key={index} className={`w-3 h-3 ${index === 0 ? "text-black" : "text-gray-400"}`} />
                ))}
            </div>
        </section>
    )
}
