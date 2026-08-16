import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-card text-foreground transition-colors duration-300 hover:bg-secondary ${className}`}
    >
      <Sun
        className={`absolute h-4 w-4 transition-all duration-500 ${isDark ? "scale-50 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`}
      />
      <Moon
        className={`absolute h-4 w-4 transition-all duration-500 ${isDark ? "scale-100 rotate-0 opacity-100" : "scale-50 -rotate-90 opacity-0"}`}
      />
    </button>
  );
}
