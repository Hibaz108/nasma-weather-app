import Header from "./components/layout/Header";
import CurrentWeatherCard from "./components/weather/CurrentWeatherCard";
import SearchBar from "./components/weather/SearchBar";

function App() {
  return (
    <div className="min-h-svh max-w-4xl mx-auto flex flex-col p-4">
      <Header />
      <SearchBar />
      <CurrentWeatherCard />
    </div>
  );
}

export default App;
