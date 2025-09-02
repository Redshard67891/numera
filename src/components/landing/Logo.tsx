import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={cn("fill-current", className)}
      aria-label="Erudite Logo"
    >
      <title>Erudite Logo</title>
      {/* Book */}
      <path d="M50 70C30 70 10 80 10 90V80C10 70 30 60 50 60C70 60 90 70 90 80V90C90 80 70 70 50 70Z" />
      <path d="M50 70C30 70 10 80 10 90V85C10 75 30 65 50 65C70 65 90 75 90 85V90C90 80 70 70 50 70Z" />
      
      {/* Crown */}
      <path d="M25 50C25 40 35 30 50 30C65 30 75 40 75 50" stroke="currentColor" strokeWidth="5" fill="none" />
      <circle cx="25" cy="20" r="5" />
      <circle cx="37" cy="15" r="5" />
      <circle cx="50" cy="10" r="5" />
      <circle cx="63" cy="15" r="5" />
      <circle cx="75" cy="20" r="5" />
    </svg>
  );
}
