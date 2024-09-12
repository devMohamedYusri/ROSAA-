import Card from "./Card.jsx";

export default function TrainCards() {
    return (
        <div className="flex flex-wrap justify-center py-20">
            <Card img="/img29.jpg" title="Rose" price="22$" className="w-full sm:w-1/2 md:w-1/3 lg:w-[22%] p-2" />
            <Card img="/img29.jpg" title="Rose" price="22$" className="w-full sm:w-1/2 md:w-1/3 lg:w-[22%] p-2" />
            <Card img="/img29.jpg" title="Rose" price="22$" className="w-full sm:w-1/2 md:w-1/3 lg:w-[22%] p-2" />
            <Card img="/img18.jpg" title="rose" price="$22" className="w-full sm:w-1/2 md:w-1/3 lg:w-[22%] p-2"/>
        </div>
    )
}
