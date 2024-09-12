import { ChevronRight} from 'lucide-react';

export default function EventMessage({message}) {
  return (
    <div className="Event text-center">
      <p className="text-event bg-red-100 p-2">{message}
          <a href="#" className="inline-block pl-1"> Order Now
            <ChevronRight className="inline-block size-4 self-center pb-1"/></a>
      </p>
    </div>
  )
}
