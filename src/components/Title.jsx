export default function Title({ text, className = "" }) {
    return (
        <h3 className={`text-[40px] my-10 capitalize ${className}`}>
            {text}
        </h3>
    );
}
