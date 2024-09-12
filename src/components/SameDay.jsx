import Button from './Button.jsx'
import SemiTitle from './SemiTitle.jsx'
import Title from './Title.jsx'
export default function SameDay() {
    return (
        <section className="flex justify-between h-[60vh]">
            <div className="content flex flex-col items-center pl-[14%] pr-[14%] pt-[7%] bg-[url('/img24.png')] pb-[10%]">
                <SemiTitle text="Everyday florals" />
                <Title text="same day delivery flowers & gifts" className="text-center my-5"/>
                <Button text="shop same day flowers" className="bg-white shadow-md" />
            </div>
            <img src="/fenral.webp" alt="man-in-field" className="w-[100%] h-[100%]" />
        </section>
    )
}
