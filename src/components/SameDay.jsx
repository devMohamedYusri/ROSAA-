import Button from './Button.jsx'
import SemiTitle from './SemiTitle.jsx'
import Title from './Title.jsx'
export default function SameDay() {
    return (
        <section className="flex flex-col md:flex-row justify-between min-h-[60vh]">
            <div className="content flex flex-col items-center justify-center p-8 md:p-12 lg:pl-[14%] lg:pr-[14%] lg:pt-[7%] lg:pb-[10%] bg-[url('/img24.png')] bg-cover bg-center w-full md:w-1/2">
                <SemiTitle text="Everyday florals" />
                <Title text="same day delivery flowers & gifts" className="text-center my-5 text-2xl md:text-3xl lg:text-4xl"/>
                <Button text="shop same day flowers" className="bg-white shadow-md mt-4" />
            </div>
            <div className="w-full md:w-1/2 h-60 md:h-auto">
                <img src="/fenral.webp" alt="man-in-field" className="w-full h-full object-cover" />
            </div>
        </section>
    )
}
