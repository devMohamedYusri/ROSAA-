import Button from './Button'
import SemiTitle from './SemiTitle'
import Title from './Title'
import SmallP from './SmallP';
export default function About() {
    return (
        <section className="flex justify-between">
            <div className="content mt-[15%] flex flex-col ml-[13%] mr-[4%]">
                <SemiTitle text="who we are" />
                <Title text="online delivery flowers experts" className="mb-0" />
                <SmallP text="Lorem ipsum dolcilisi. Phasellus ut elit eget sapien hendrerit fermentum. Sed vehicula justo vel purus ultricies, vel tempor augue dapibus." />
                <Button text="learn more" className="bg-pink-100" />
            </div>
            <img src="/about-us.jpeg" alt="man-in-field" className="rounded-tl-[50%] w-[60%] h-screen" />
        </section>
    )
}
