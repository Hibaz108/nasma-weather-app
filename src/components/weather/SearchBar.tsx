import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import { SearchIcon } from "lucide-react";

const cities = ["London", "Tokyo", "Cairo", "New York", "Sydney"];

const SearchBar = () => {
  return (
    <section className="mt-4">
      {/* search bar */}
      <InputGroup>
        <InputGroupInput
          id="inline-start-input"
          placeholder="Search city"
          aria-label="Search city"
        />
        <InputGroupAddon align="inline-start">
          <button type="button" aria-label="Search">
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
