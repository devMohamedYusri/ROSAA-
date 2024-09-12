export default function Title({ text, className = "" }) {
    return (
        <h3 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-4 sm:my-6 md:my-8 lg:my-10 capitalize ${className}`}>
            {text}
        </h3>
    );
}
