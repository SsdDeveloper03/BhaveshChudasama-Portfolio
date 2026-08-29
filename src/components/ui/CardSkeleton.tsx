export function CardSkeleton() {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6" aria-hidden="true">
      <div className="h-4 w-24 rounded-full bg-white/10" />
      <div className="mt-4 h-6 w-3/4 rounded-full bg-white/10" />
      <div className="mt-3 h-4 w-full rounded-full bg-white/10" />
      <div className="mt-2 h-4 w-2/3 rounded-full bg-white/10" />
    </div>
  );
}
