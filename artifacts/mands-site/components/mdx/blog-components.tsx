import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const blogComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "font-serif font-medium text-[clamp(2rem,4vw,2.85rem)] leading-[1.12] tracking-[-0.01em] text-ms-ink mt-14 mb-5",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "font-serif font-semibold text-[clamp(2rem,4vw,2.65rem)] leading-[1.14] tracking-[-0.015em] text-ms-ink mt-14 mb-5",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "font-serif font-semibold text-[clamp(1.65rem,3vw,2.05rem)] leading-[1.18] tracking-[-0.01em] text-ms-ink mt-12 mb-4",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "font-sans font-extrabold text-[clamp(1.22rem,2vw,1.45rem)] leading-snug text-ms-ink mt-9 mb-3",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        "font-sans font-bold text-[1.08rem] leading-snug text-ms-ink mt-8 mb-2",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        "font-serif text-[1.08rem] md:text-[1.16rem] leading-[1.78] text-ms-ink/90 mt-5",
        className
      )}
      {...props}
    />
  ),
  blockquote: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        "my-10 border-l-[3px] border-ms-navy pl-6 pr-4 py-2",
        "[&_p]:mt-0 [&_p]:font-serif [&_p]:text-[1.35rem] [&_p]:leading-relaxed [&_p]:text-ms-ink",
        "[&_strong]:font-semibold",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn("mt-6 ml-6 list-disc space-y-3", className)}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={cn("mt-6 ml-6 list-decimal space-y-3", className)}
      {...props}
    />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li
      className={cn(
        "pl-1 font-serif text-[1.06rem] md:text-[1.14rem] leading-[1.72] text-ms-ink/90 marker:text-ms-navy",
        className
      )}
      {...props}
    />
  ),
  a: ({
    className,
    href,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = href?.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "font-medium text-ms-navy underline decoration-ms-navy/30 underline-offset-[3px] hover:decoration-ms-navy transition-colors",
            className
          )}
          {...props}
        />
      );
    }
    return (
      <Link
        href={href ?? "#"}
        className={cn(
          "font-medium text-ms-navy underline decoration-ms-navy/30 underline-offset-[3px] hover:decoration-ms-navy transition-colors",
          className
        )}
        {...props}
      />
    );
  },
  strong: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLElement>) => (
    <strong
      className={cn("font-semibold text-ms-ink", className)}
      {...props}
    />
  ),
  em: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <em className={cn("italic", className)} {...props} />
  ),
  hr: ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr
      className={cn("my-12 border-[rgba(0,31,101,0.12)]", className)}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "font-sans text-[0.875em] bg-ms-cream px-1.5 py-0.5 rounded text-ms-navy",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn(
        "mt-5 p-5 rounded-lg bg-[#0A0E1A] text-dark-ink text-sm overflow-x-auto leading-relaxed",
        className
      )}
      {...props}
    />
  ),
};
