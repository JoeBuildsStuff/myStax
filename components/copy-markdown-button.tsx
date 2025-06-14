'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/animate-ui/buttons/copy';
import type { VariantProps } from 'class-variance-authority';
import { AnimatePresence, motion } from 'motion/react';
import { CheckIcon, CopyIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Props for the wrapper, extending button variants
interface CopyMarkdownButtonProps extends VariantProps<typeof buttonVariants> {
  markdownContent: string;
  className?: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  // Exclude props handled internally by CopyButton or the wrapper
  // We don't need delay here as CopyButton handles it
}

export function CopyMarkdownButton({
  markdownContent,
  className,
  variant = 'outline', // Default variant
  size = 'sm', // Default size
}: CopyMarkdownButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (isCopied) return;
    navigator.clipboard
      .writeText(markdownContent)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000);
      })
      .catch((error) => {
        console.error('Error copying content', error);
      });
  };

  const Icon = isCopied ? CheckIcon : CopyIcon;

  return (
    <Button
      variant={variant}
      size={size}
      className={cn('gap-x-2', className)}
      onClick={handleCopy}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={isCopied ? 'check' : 'copy'}
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 90 }}
          transition={{ duration: 0.15 }}
        >
          <Icon className="size-3.5" />
        </motion.span>
      </AnimatePresence>
      <span className="text-sm pr-1">
        {isCopied ? 'Copied Page!' : 'Copy Markdown'}
      </span>
    </Button>
  );
} 