import CardImg from './CardImg'
import SemiTitle from './SemiTitle'
import Title from './Title'
export default function About() {
    return (
        <section className="flex justify-between h-[130vh] bg-[url('/img06.png')] bg-no-repeat">
            <img src="/browse1.webp" alt="man-in-field" className="w-[30%] rounded-tr-[30%] rounded-bl-[30%] h-screen mt-[7%]" />
            <div className="content mt-[15%] flex flex-col items-center ml-[13%] px-10 w-[80%] ">
                <SemiTitle text="browse by occasion" />
                <Title text="anniversary birthday business congratulation get well graduation" className="my-10 text-5xl text-center leading-loose" />
                <a className="font-bold text-2xl">+ view more</a>

            </div>
            <div className="imgs h-screen w-[80%] pt-20">
                <img src="/img08.jpg" alt="img" className="rounded-tl-[30%] rounded-br-[30%] pb-10 ml-20" />
                <CardImg source="/img09.jpg" className="mr-96 rounded-b-full "/>
            </div>
        </section>
    )
}
