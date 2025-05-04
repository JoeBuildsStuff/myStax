import { CodeTabs } from '@/components/animate-ui/components/code-tabs';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <div className="max-w-2xl mx-auto">
<CodeTabs lang="bash" codes={{
    pnpm: `pnpm create next-app --ts --eslint --tailwind --src-dir --app --use-pnpm`,
  }} />
</div>
      <p className="text-fd-muted-foreground">
        You can open{' '}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{' '}
        and see the documentation.
      </p>
    </main>
  );
}
