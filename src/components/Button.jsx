import { ChevronRight} from 'lucide-react';

export default function Button({ text,className,...rest }) {
    return (
        <button {...rest} className={`p-2 center rounded-3xl w-fit bg-slate-100 uppercase ${className}`}>{text} <ChevronRight className="inline-block size-3 self-center"/> </button>
    )
}
