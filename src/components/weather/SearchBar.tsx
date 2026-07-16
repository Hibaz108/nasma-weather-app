//shadcn
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
//icons
import { SearchIcon } from "lucide-react";
//other
import { useWeatherStore } from "@/store/weatherStore";
import { useState } from "react";

const cities = ["London", "Tokyo", "Cairo", "New York", "Sydney"];

const SearchBar = () => {
  const fetchWeather = useWeatherStore((state) => state.fetchWeather);
  const [city, setCity] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");

  //--------------------------------------------------------------------------

  const handleSearch = () => {
    if (!city.trim()) return;
    fetchWeather(city.trim());
    setCity("");
    setSelectedCity("");
  };

  return (
    <section className="mt-4">
      {/* search bar */}
      <InputGroup>
        <InputGroupInput
          id="inline-start-input"
          placeholder="Search city"
          aria-label="Search city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <InputGroupAddon align="inline-start">
          <button type="button" aria-label="Search" onClick={handleSearch}>
            <SearchIcon className="text-gray-400 size-5" />
          </button>
        </InputGroupAddon>

        {/* popular cities */}
        <div className="hidden md:flex gap-3">
          {cities.map((item) => (
            <button
              key={item}
              className="px-2 py-1 bg-black text-white font-semibold text-xs rounded-xl transition-colors"
              type="button"
              onClick={() => {
                setSelectedCity(item);
                fetchWeather(item);
              }}
              aria-pressed={selectedCity === item}
            >
              {item}
            </button>
          ))}
        </div>
        {/* === popular cities === */}
      </InputGroup>
      {/* === search bar === */}
    </section>
  );
};

export default SearchBar;
