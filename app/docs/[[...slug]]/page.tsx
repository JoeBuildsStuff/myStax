import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getMDXComponents } from '@/mdx-components';
import { getLLMText } from '@/lib/get-llm-text';
import { CopyMarkdownButton } from '@/components/copy-markdown-button';
import { EditOnGithubButton } from '@/components/view-on-github-button';
import { ReportIssueButton } from '@/components/report-issue-button';


export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const markdownContent = await getLLMText(page);

  const MDXContent = page.data.body;
  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="flex flex-col gap-5">
      {page.data.description}
        <div className="flex flex-row gap-2 justify-start">
          <CopyMarkdownButton markdownContent={markdownContent} />
          <EditOnGithubButton
            filePath={page.file.path}
            repository="JoeBuildsStuff/myStax/tree/main/content/docs"
          />
          <ReportIssueButton
            filePath={page.file.path}
            repository="JoeBuildsStuff/myStax"
          />
        </div>
      </DocsDescription>
      
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}