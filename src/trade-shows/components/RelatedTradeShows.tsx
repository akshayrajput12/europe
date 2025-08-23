import Image from "next/image"
import Link from "next/link"
import { TradeShow } from "@/data/trade-shows"
import { MapPin, Calendar } from "lucide-react"

interface RelatedTradeShowsProps {
  shows: TradeShow[]
}

export default function RelatedTradeShows({ shows }: RelatedTradeShowsProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", { 
      day: '2-digit',
      month: 'short'
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-bold text-slate-800 mb-6">Related Trade Shows</h3>
      
      <div className="space-y-6">
        {shows.map((show) => (
          <article key={show.id} className="group">
            <Link href={`/trade-shows/${show.slug}`} className="block">
              {/* Thumbnail */}
              <div className="relative w-full h-32 mb-3 rounded-lg overflow-hidden">
                <Image
                  src={show.featuredImage}
                  alt={show.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div>
                {/* Category */}
                <div className="mb-2">
                  <span className="text-[#A5CD39] text-xs font-medium uppercase tracking-wide">
                    {show.category}
                  </span>
                </div>
                
                {/* Title */}
                <h4 className="text-sm font-semibold text-slate-800 group-hover:text-[#A5CD39] transition-colors duration-300 line-clamp-2 leading-tight mb-2">
                  {show.title}
                </h4>
                
                {/* Meta Information */}
                <div className="space-y-1 mb-3">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(show.startDate)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <MapPin className="w-3 h-3" />
                    <span>{show.city}, {show.country}</span>
                  </div>
                </div>
                
                {/* Learn More */}
                <div className="text-xs text-[#A5CD39] font-medium">
                  Learn More
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}