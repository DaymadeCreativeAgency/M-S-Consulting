import Image from "next/image";
import Link from "next/link";

export type PartnerLogoTileProps = {
  name: string;
  href: string;
  src: string;
  /** Fine-tune visual weight inside the shared frame. */
  scale?: number;
  /** Vertical optical alignment in pixels. */
  nudgeY?: number;
};

export function PartnerLogoTile({
  name,
  href,
  src,
  scale = 1,
  nudgeY = 0,
}: PartnerLogoTileProps) {
  return (
    <Link
      href={href}
      title={name}
      className="group flex min-h-[5.5rem] items-center justify-center rounded-xl px-3 py-4 transition-colors duration-200 hover:bg-ms-navy/[0.03]"
    >
      <div className="relative flex h-14 w-full max-w-[11.75rem] items-center justify-center">
        <Image
          src={src}
          alt={name}
          width={320}
          height={96}
          className="h-12 w-auto max-w-full object-contain transition-opacity duration-200 group-hover:opacity-75"
          style={{
            transform: `translateY(${nudgeY}px) scale(${scale})`,
            transformOrigin: "center center",
          }}
        />
      </div>
    </Link>
  );
}
