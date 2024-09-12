import SemiTitle from './SemiTitle.jsx'
import Title from './Title.jsx'
import CardImg from './CardImg.jsx';

export default function Collection() {
    return (
        <section className="w-screen flex flex-col justify-center py-20">
            <div className="top-Content w-screen flex flex-col items-center">
                <SemiTitle text="don't miss" />
                <Title text="flowers collection" className="my-10 text-3xl sm:text-4xl md:text-5xl leading-tight sm:leading-snug md:leading-loose" />
            </div>
            <div className="cards flex flex-col sm:flex-row w-screen gap-5 justify-center px-4 sm:px-0">
                {[1, 2, 3].map((_, index) => (
                    <div key={index} className="card mb-5 sm:mb-0">
                        <CardImg source="/img23.jpg" className="rounded-t-full w-full sm:w-auto"/>
                        <a href="#" className="underline font-bold inline-block text-center p-4 w-full text-xl sm:text-2xl md:text-3xl">Classic Collections</a>
                    </div>
                ))}
            </div>
        </section>
    )
}
