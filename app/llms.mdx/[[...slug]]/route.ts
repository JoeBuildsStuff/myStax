import { type NextRequest, NextResponse } from 'next/server';
import { getLLMText } from '@/lib/get-llm-text';
import { source } from '@/lib/source';
import { notFound } from 'next/navigation';

export const revalidate = false;

export async function GET(
  _req: NextRequest,
  { params }: { params: { slug?: string[] } }, // Changed params type from Promise to direct object
) {
  const { slug } = params; // Removed await as params is not a Promise
  const page = source.getPage(slug);
  if (!page) notFound();

  return new NextResponse(await getLLMText(page));
}

export function generateStaticParams() {
  // Assuming generateParams provides slugs in the expected format
  return source.getPages().map((page) => ({
    slug: page.slugs,
  }));
} 