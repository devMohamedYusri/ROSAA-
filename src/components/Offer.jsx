import Button from "./Button.jsx";
import SemiTitle from "./SemiTitle.jsx";
import SmallP from "./SmallP.jsx";
import Title from "./Title.jsx";

export default function Offer() {
    const offerContent = {
        semiTitle: { text: "share the love", className: "bg-pink-500 w-fit text-white mt-10" },
        discount: { text: "30% off", className: "text-pink-500 text-4xl mt-4" },
        title: { text: "summer blooms", className: "my-0" },
        description: { text: "our gorgeous summer collections is here.", className: "my-0" },
        button: { text: "shop now", className: "bg-white p-2 mb-4 shadow-md mt-5" }
    };

    return (
        <div className="w-[80%] bg-[url('/img30.jpg')] mx-auto flex items-center justify-end h-fit mb-20">
            <div className="pr-[20%]">
                <SemiTitle {...offerContent.semiTitle} />
                <h4 className={offerContent.discount.className}>{offerContent.discount.text}</h4>
                <Title {...offerContent.title} />
                <SmallP {...offerContent.description} />
                <Button {...offerContent.button} />
            </div>
        </div>
    );
}