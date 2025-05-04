// components/animate-ui/components/code-tabs-skeleton.tsx
import { cn } from '@/lib/utils';

interface CodeTabsSkeletonProps {
  tabsCount?: number;
  className?: string;
}

export function CodeTabsSkeleton({
  tabsCount = 3,
  className,
}: CodeTabsSkeletonProps) {
  return (
    <div
      className={cn(
        'w-full gap-0 bg-muted/50 rounded-xl border overflow-hidden animate-pulse',
        'min-w-2xl',
        className,
      )}
    >
      <div className="w-full relative h-10 bg-muted border-b border-border/75 dark:border-border/50 px-4 flex justify-between items-center">
        <div className="flex gap-x-3 h-full items-center">
          {Array.from({ length: tabsCount }).map((_, i) => (
            <div key={i} className="h-4 w-16 bg-muted-foreground/20 rounded" />
          ))}
        </div>
        <div className="h-6 w-6 bg-muted-foreground/20 rounded" />
      </div>
      <div className="p-4">
        <div className="h-4 w-full bg-muted-foreground/20 rounded" />
      </div>
    </div>
  );
}