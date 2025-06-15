import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';
import * as TabsComponents from 'fumadocs-ui/components/tabs';

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
        // HTML `ref` attribute conflicts with `forwardRef`
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        pre: ({ ref: _ref, ...props }) => (
          <CodeBlock {...props}>
            <Pre>{props.children}</Pre>
          </CodeBlock>
        ),
    ...components,
  };
}
