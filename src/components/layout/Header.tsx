//icons
import { Cloud, Sun, Moon } from "lucide-react";
//other
import { useWeatherStore } from "@/store/weatherStore";

const Header = () => {
  const unit = useWeatherStore((state) => state.unit);
  const setUnit = useWeatherStore((state) => state.setUnit);
  const theme = useWeatherStore((state) => state.theme);
  const toggleTheme = useWeatherStore((state) => state.toggleTheme);

  return (
    <header className="flex items-center justify-between">
      {/* logo */}
      <div
        className="flex items-center gap-1 text-blue-400 text-lg"
        aria-label="Nasma"
      >
        <span>
          <Cloud className="size-6" strokeWidth={3} />
        </span>
        <h3 className="font-semibold md:text-xl">Nasma</h3>
      </div>
      {/* === logo === */}

      {/* controls */}
      <div className="flex gap-3">
        {/* temp unit */}
        <div
          className="flex items-center gap-1 rounded-4xl py-0.5 px-4 text-muted-foreground
         bg-container border border-border"
        >
          <button
            type="button"
            onClick={() => setUnit("C")}
            aria-pressed={unit === "C"}
            className={`${unit === "C" ? "text-foreground font-bold" : ""} 
            transition-colors duration-500`}
          >
            °C
          </button>
          <span className="mx-1">/</span>
          <button
            type="button"
            onClick={() => setUnit("F")}
            aria-pressed={unit === "F"}
            className={`${unit === "F" ? "text-foreground font-bold" : ""} 
            transition-colors duration-500`}
          >
            °F
          </button>
        </div>
        {/* === temp unit === */}

        {/* theme toggle */}
        <button
          className="bg-container border border-border p-2.5 rounded-full"
          type="button"
          onClick={toggleTheme}
          aria-label={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          {theme === "dark" ? (
            <Sun className={`size-4 text-yellow-400 `} />
          ) : (
            <Moon className="size-4 text-gray-700" />
          )}
        </button>
        {/* === theme toggle === */}
      </div>
      {/* === controls === */}
    </header>
  );
};

export default Header;
