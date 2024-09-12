import { Dot } from 'lucide-react';
import Button from './Button';
function Home({ text, pText, btext, ...rest }) {
    return (
        <section className="w-full bg-[url('/main2.jpeg')] bg-cover bg-left h-[94vh] pl-[5%]" >
            <div className="container w-[30vw]">
                <h1 className="capitalize  w-100% text-white font-bold pt-[70%] font-serif text-6xl">{text}</h1>
                <p className="text-white py-[6%] font-medium capitalize font-sans text-base">{pText}</p>
                <Button text={btext} />
            </div>
            <div className="dots flex gap-5 pt-7">
                <Dot className=" rounded-full border-2 border-black" />
                <Dot className="text-white" />
                <Dot className="text-white" />
            </div>
        </section>
    )
}

export default Home
