import Image from "next/image";

import { BRAND } from "@/lib/brand";

export function LumoBrand({
  compact = false,
  className = "",
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src={BRAND.mark}
        alt=""
        width={compact ? 22 : 26}
        height={compact ? 22 : 26}
        className={compact ? "h-[22px] w-[22px]" : "h-[26px] w-[26px]"}
      />
      {!compact ? (
        <span className="font-serif text-[20px] font-semibold tracking-[-0.025em] text-[var(--foreground)]">
          {BRAND.name}
        </span>
      ) : null}
    </span>
  );
}
