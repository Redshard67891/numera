import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 40"
      className={cn("fill-current", className)}
      aria-label="Numera Logo"
    >
      <path
        d="M20,15 L20,0 L0,0 L0,15 L7,15 L7,2 L13,2 L13,15 L20,15 Z M35,15 L35,0 L28,0 L28,15 L35,15 Z M20,15 L0,30 L0,32 L20,17 L20,32 L27,32 L27,17 L7,32 L28,32 L48,17 L48,32 L55,32 L55,15 L35,32 L35,15 Z"
        transform="translate(18, -10) scale(0.6)"
        />
      <path
        d="M27.5,0 L35,12 L20,12 Z"
        transform="translate(18, -10) scale(0.6)"
        />

      <text
        x="5"
        y="35"
        fontFamily="sans-serif"
        fontSize="10"
        fontWeight="bold"
        letterSpacing="1"
        fill="currentColor"
      >
        NUMERA
      </text>
    </svg>
  );
}
