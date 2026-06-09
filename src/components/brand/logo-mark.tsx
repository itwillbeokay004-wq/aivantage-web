import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-grid size-10 shrink-0 place-items-center rounded-2xl border border-cyan-200/25 bg-[#07111f] shadow-[0_0_34px_rgba(34,211,238,0.22)]",
        className,
      )}
      aria-hidden="true"
    >
      <span className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_18%,rgba(34,211,238,0.34),transparent_36%),radial-gradient(circle_at_75%_85%,rgba(168,85,247,0.28),transparent_42%)]" />
      <svg
        viewBox="0 0 44 44"
        className="relative size-8 overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 30.5 20.5 10h4.2l9.8 20.5h-5.1l-1.9-4.3H17.4l-1.9 4.3h-5Z"
          fill="url(#aivantage-mark-gradient)"
        />
        <path
          d="M19.3 22h6.3l-3.1-7.1-3.2 7.1Z"
          fill="#03101d"
          opacity="0.78"
        />
        <path
          d="M31.8 11.6c2.4 1.3 3.8 3.6 3.8 6.4"
          stroke="#67E8F9"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="31.7" cy="10.6" r="3.5" fill="#67E8F9" />
        <circle cx="12.8" cy="31.6" r="1.8" fill="#A78BFA" />
        <circle cx="34.5" cy="31" r="1.6" fill="#38BDF8" />
        <path
          d="M14.6 30.9c4.9 3.3 11.1 3.4 17.6.3"
          stroke="url(#aivantage-line-gradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.82"
        />
        <defs>
          <linearGradient id="aivantage-mark-gradient" x1="10.5" y1="10" x2="34.5" y2="31" gradientUnits="userSpaceOnUse">
            <stop stopColor="#67E8F9" />
            <stop offset="0.48" stopColor="#3B82F6" />
            <stop offset="1" stopColor="#A78BFA" />
          </linearGradient>
          <linearGradient id="aivantage-line-gradient" x1="14" y1="31" x2="34" y2="31" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A78BFA" />
            <stop offset="1" stopColor="#67E8F9" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );
}
