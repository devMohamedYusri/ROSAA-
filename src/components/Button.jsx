import { ChevronRight } from 'lucide-react';

export default function Button({ text, className, ...rest }) {
    return (
        <button
            {...rest}
            className={`px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 flex items-center justify-center rounded-3xl w-fit bg-slate-100 uppercase text-sm sm:text-base md:text-lg font-medium transition-all duration-300 hover:bg-slate-200 ${className}`}
        >
            {text}
            <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
    )
}
