import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Layers } from 'lucide-react';
/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  githubUrl: 'https://github.com/JoeBuildsStuff/myStax',
  links: [
    {
      text: 'Docs',
      url: '/docs',
      active: 'nested-url',
    },
  ],
  nav: {
    title: (
      <>
        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-neutral-800 text-neutral-100">
          <Layers className="h-5 w-5" />
        </div>
        myStax
      </>
    ),
  },
};
