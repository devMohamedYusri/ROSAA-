import CardImg from './CardImg.jsx'
import SemiTitle from './SemiTitle.jsx'
import Title from './Title.jsx'

export default function Browse() {
    return (
        <section className="flex flex-col md:flex-row justify-between min-h-screen bg-[url('/img06.png')] bg-no-repeat bg-cover">
            <img src="/browse1.webp" alt="man-in-field" className="w-full md:w-[30%] rounded-tr-[30%] rounded-bl-[30%] h-64 md:h-screen object-cover mt-4 md:mt-[7%]" />
            <div className="content mt-8 md:mt-[15%] flex flex-col items-center px-4 md:px-10 w-full md:w-[80%] ">
                <SemiTitle text="browse by occasion" />
                <Title text="anniversary birthday business congratulation get well graduation" className="my-6 md:my-10 text-3xl md:text-5xl text-center leading-relaxed md:leading-loose" />
                <a className="font-bold text-xl md:text-2xl cursor-pointer">+ view more</a>
            </div>
            <div className="imgs mt-8 md:mt-0 w-full md:w-[80%] pt-4 md:pt-20 flex flex-col items-center md:items-start">
                <img src="/img08.jpg" alt="img" className="w-3/4 md:w-auto rounded-tl-[30%] rounded-br-[30%] pb-6 md:pb-10 md:ml-20" />
                <CardImg source="/img09.jpg" className="w-3/4 md:w-auto md:mr-96 rounded-b-full" />
            </div>
        </section>
    )
}
