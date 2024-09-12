import Button from './Button.jsx'
import SemiTitle from './SemiTitle.jsx'
import Title from './Title.jsx'
import SmallP from './SmallP.jsx';

export default function About() {
    return (
        <section className="flex flex-col md:flex-row justify-between">
            <div className="content mt-8 md:mt-[15%] flex flex-col px-4 md:ml-[13%] md:mr-[4%]">
                <SemiTitle text="who we are" />
                <Title text="online delivery flowers experts" className="mb-0" />
                <SmallP text="Lorem ipsum dolcilisi. Phasellus ut elit eget sapien hendrerit fermentum. Sed vehicula justo vel purus ultricies, vel tempor augue dapibus." />
                <Button text="learn more" className="bg-pink-100 mt-4" />
            </div>
            <img src="/about-us.jpeg" alt="man-in-field" className="w-full md:w-[60%] h-64 md:h-screen object-cover mt-8 md:mt-0 rounded-t-[50%] md:rounded-tl-[50%] md:rounded-tr-none" />
        </section>
    )
}
