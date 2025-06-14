'use client';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/animate-ui/buttons/copy';
import { Button } from '@/components/ui/button';
import type { VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { TriangleAlert } from 'lucide-react';

interface ReportIssueButtonProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  repository?: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  filePath?: string; // Optional: to include the file path in the issue template
}

export function ReportIssueButton({
  className,
  variant = 'outline',
  size = 'sm',
  repository = 'JoeBuildsStuff/myStax',
  filePath
}: ReportIssueButtonProps) {
  // Create issue URL with optional template parameters
  const createIssueUrl = () => {
    const baseUrl = `https://github.com/${repository}/issues/new`;
    
    if (filePath) {
      // Add some context about which page the issue is from
      const params = new URLSearchParams({
        title: `Issue with documentation page: ${filePath}`,
        body: `## Issue Description\n\n<!-- Describe the issue you found -->\n\n## Page\n\nFile: \`${filePath}\`\n\n## Additional Context\n\n<!-- Add any additional context about the issue -->`
      });
      return `${baseUrl}?${params.toString()}`;
    }
    
    return baseUrl;
  };

  return (
    <Button 
      asChild 
      variant={variant} 
      size={size}
      className={cn(
        'gap-x-2',
        className
      )}
    >
      <Link
        href={createIssueUrl()}
        rel="noreferrer noopener"
        target="_blank"
      >
        <TriangleAlert className="size-3.5" />
        <span className="text-sm pr-1">Report Issue</span>
      </Link>
    </Button>
  );
}