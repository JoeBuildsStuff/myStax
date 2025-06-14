import { CodeTabs } from '@/components/animate-ui/components/code-tabs';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col pt-40 text-center space-y-10">
      <div className="max-w-2xl mx-auto">
<CodeTabs lang="bash" codes={{
    NextJS: `pnpm create next-app --ts --eslint --tailwind --src-dir --app --use-pnpm`,
    Lucide: `pnpm install lucide-react`,
    Shadcn: `pnpm dlx shadcn@latest init`,
  }} />
</div>
    </main>
  );
}
