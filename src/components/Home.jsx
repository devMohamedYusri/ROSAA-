import { Dot } from 'lucide-react';
import Button from './Button.jsx';

function Home({ text, pText, btext, ...rest }) {
    return (
        <section className="w-full bg-[url('/main2.jpeg')] bg-cover bg-center min-h-screen p-5 md:p-10 flex flex-col justify-center">
            <div className="container max-w-xl mx-auto">
                <h1 className="capitalize text-white font-bold font-serif text-4xl sm:text-5xl md:text-6xl mb-6">{text}</h1>
                <p className="text-white mb-8 font-medium capitalize font-sans text-base md:text-lg">{pText}</p>
                <Button text={btext} />
            </div>
            <div className="dots flex gap-5 mt-10">
                <Dot className="rounded-full border-2 border-black" />
                <Dot className="text-white" />
                <Dot className="text-white" />
            </div>
        </section>
    )
}

export default Home
