import SemiTitle from './SemiTitle'
import Title from './Title'
import CardImg from './CardImg';
export default function Collection() {
    return (
        <section className="w-screen flex flex-col justify-center py-20">
            <div className="top-Content w-screen flex flex-col items-center ">
                <SemiTitle text="don't miss" />
                <Title text="flowers collection" className="my-10 text-5xl leading-loose" />
            </div>
            <div className="cards flex  w-screen gap-5 justify-center">
                <div className="card">
                    <CardImg source="/img23.jpg" className="rounded-t-full"/>
                    <a href="#" className="underline font-bold inline-block text-center p-4 w-[100%] text-3xl">Classic Collections</a>
                </div>
                <div className="card">
                    <CardImg source="/img23.jpg" className="rounded-t-full"/>
                    <a href="#" className="underline font-bold inline-block text-center p-4 w-[100%] text-3xl">Classic Collections</a>
                </div>
                <div className="card">
                    <CardImg source="/img23.jpg" className="rounded-t-full"/>
                    <a href="#" className="underline font-bold inline-block text-center p-4 w-[100%] text-3xl">Classic Collections</a>
                </div>
            </div>
        </section>
    )
}
