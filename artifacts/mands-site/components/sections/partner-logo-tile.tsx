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
      title={`${name}, view service line`}
      aria-label={`${name} service line`}
      className="group flex min-h-[5.5rem] items-center justify-center rounded-xl border border-transparent bg-transparent px-3 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-ms-navy/10 hover:bg-white hover:shadow-[0_12px_30px_rgba(0,31,101,0.12)]"
    >
      <div className="relative flex h-14 w-full max-w-[11.75rem] items-center justify-center transition-transform duration-200 ease-out group-hover:scale-[1.06]">
        <Image
          src={src}
          alt={name}
          width={320}
          height={96}
          className="h-12 w-auto max-w-full object-contain"
          style={{
            transform: `translateY(${nudgeY}px) scale(${scale})`,
            transformOrigin: "center center",
          }}
        />
      </div>
    </Link>
  );
}
