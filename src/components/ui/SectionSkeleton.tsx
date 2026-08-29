export function SectionSkeleton() {
  return (
    <div className="section-container py-16" aria-hidden="true">
      <div className="space-y-4">
        <div className="h-4 w-32 rounded-full bg-white/10" />
        <div className="h-8 w-3/4 rounded-full bg-white/10" />
        <div className="h-4 w-full rounded-full bg-white/10" />
        <div className="h-4 w-2/3 rounded-full bg-white/10" />
      </div>
    </div>
  );
}
