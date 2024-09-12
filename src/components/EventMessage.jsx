import { ChevronRight } from 'lucide-react';

export default function EventMessage({ message }) {
  return (
    <div className="Event text-center px-4 py-2 sm:px-6 sm:py-3">
      <p className="text-event bg-red-100 p-2 sm:p-3 rounded-lg flex flex-wrap justify-center items-center">
        <span className="mr-2 mb-2 sm:mb-0">{message}</span>
        <a href="#" className="inline-flex items-center text-red-600 hover:text-red-800 transition-colors">
          Order Now
          <ChevronRight className="ml-1 h-4 w-4" />
        </a>
      </p>
    </div>
  )
}
