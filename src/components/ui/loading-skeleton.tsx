export function ServiceCardSkeleton() {
  return (
    <div className="bg-slate-800/50 border-slate-700 rounded-lg overflow-hidden animate-pulse">
      <div className="h-48 bg-slate-700/50" />
      <div className="p-6">
        <div className="h-6 bg-slate-700/50 rounded w-3/4 mb-3" />
        <div className="h-4 bg-slate-700/50 rounded w-full mb-2" />
        <div className="h-4 bg-slate-700/50 rounded w-2/3 mb-4" />
        <div className="flex gap-2">
          <div className="h-5 bg-slate-700/50 rounded w-16" />
          <div className="h-5 bg-slate-700/50 rounded w-20" />
        </div>
      </div>
    </div>
  )
}

export function ProjectCardSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden animate-pulse">
      <div className="h-72 bg-slate-300" />
    </div>
  )
}

export function TestimonialCardSkeleton() {
  return (
    <div className="bg-white/10 backdrop-blur-md border-white/20 rounded-lg p-6 animate-pulse">
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="w-5 h-5 bg-white/20 rounded" />
        ))}
      </div>
      <div className="h-4 bg-white/20 rounded w-full mb-2" />
      <div className="h-4 bg-white/20 rounded w-full mb-2" />
      <div className="h-4 bg-white/20 rounded w-2/3 mb-6" />
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-white/20 rounded-full" />
        <div>
          <div className="h-4 bg-white/20 rounded w-24 mb-2" />
          <div className="h-3 bg-white/20 rounded w-32" />
        </div>
      </div>
    </div>
  )
}

export function ContactCardSkeleton() {
  return (
    <div className="bg-slate-800/50 border-slate-700 rounded-lg p-6 animate-pulse">
      <div className="w-12 h-12 bg-slate-700/50 rounded-xl mb-4" />
      <div className="h-5 bg-slate-700/50 rounded w-1/2 mb-2" />
      <div className="h-4 bg-slate-700/50 rounded w-3/4" />
    </div>
  )
}

export function FAQSkeleton() {
  return (
    <div className="bg-white border border-slate-200 rounded-lg overflow-hidden animate-pulse">
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-slate-200 rounded-lg" />
          <div>
            <div className="h-3 bg-slate-200 rounded w-16 mb-2" />
            <div className="h-5 bg-slate-200 rounded w-48" />
          </div>
        </div>
        <div className="w-5 h-5 bg-slate-200 rounded" />
      </div>
    </div>
  )
}
