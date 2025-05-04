'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { CopyButton, buttonVariants } from '@/components/animate-ui/buttons/copy';
import type { VariantProps } from 'class-variance-authority';

// Props for the wrapper, extending button variants
interface CopyMarkdownButtonProps extends VariantProps<typeof buttonVariants> {
  markdownContent: string;
  className?: string;
  // Exclude props handled internally by CopyButton or the wrapper
  // We don't need delay here as CopyButton handles it
}

export function CopyMarkdownButton({
  markdownContent,
  className,
  variant = 'secondary', // Default variant
  size = 'default', // Default size
}: CopyMarkdownButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  // No need for onClick handler on the wrapper, CopyButton handles it

  return (
    // Wrapper div styled like a button
    <div
      className={cn(
        'relative w-fit h-auto px-2 py-1', // Adjust padding for text, keep w-fit
        'inline-flex items-center', // Ensure icon and text align
        className, // Allow overriding classes
      )}
    >
      <CopyButton
        content={markdownContent}
        variant={variant} // Pass variant for icon styling consistency if needed
        size={size} // Pass size for icon sizing consistency
        // Control the state externally
        isCopied={isCopied}
        onCopyChange={setIsCopied}
        // Add some margin to separate icon from text
        className="mr-2"
      />
      {/* Conditional text label */} 
      <span className="text-sm pr-1 cursor-default">{isCopied ? 'Copied Page!' : 'Copy Markdown'}</span>
    </div>
  );
} 