import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const blogComponents = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "font-sans font-extrabold text-[clamp(1.85rem,3vw,2.65rem)] leading-tight text-ms-ink mt-10 mb-4",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "font-sans font-extrabold text-[clamp(1.28rem,1.75vw,1.65rem)] leading-snug text-ms-ink mt-12 mb-4",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "font-sans font-bold text-[clamp(1rem,1.2vw,1.15rem)] leading-snug text-ms-ink mt-8 mb-3",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        "font-serif text-[clamp(1.1rem,1.55vw,1.28rem)] leading-[1.6] text-ms-ink mt-5",
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
        "my-8 border-l-[3px] border-ms-navy pl-5 pr-4 py-4 bg-ms-cream rounded-r-md",
        "[&_p]:mt-0 [&_p]:font-sans [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-ms-ink",
        "[&_strong]:font-semibold",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn("mt-5 ml-6 list-disc space-y-2", className)}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={cn("mt-5 ml-6 list-decimal space-y-2", className)}
      {...props}
    />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li
      className={cn(
        "font-serif text-[clamp(1.05rem,1.45vw,1.2rem)] leading-relaxed text-ms-ink marker:text-ms-navy",
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
            "font-semibold text-ms-navy underline underline-offset-[3px] hover:opacity-75 transition-opacity",
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
          "font-semibold text-ms-navy underline underline-offset-[3px] hover:opacity-75 transition-opacity",
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
      className={cn("my-10 border-[rgba(0,31,101,0.12)]", className)}
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
