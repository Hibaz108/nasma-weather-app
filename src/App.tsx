import Header from "./components/layout/Header";
import CurrentWeatherCard from "./components/weather/CurrentWeatherCard";
import SearchBar from "./components/weather/SearchBar";
import WeatherHighlights from "./components/weather/WeatherHighlights";
import HourlyForecast from "./components/weather/HourlyForecast";
import DailyForecast from "./components/weather/DailyForecast";
function App() {
  return (
    <div className="min-h-svh max-w-4xl mx-auto flex flex-col p-4">
      <Header />
      <SearchBar />
      <CurrentWeatherCard />
      <WeatherHighlights />
      <HourlyForecast />
      <DailyForecast />
    </div>
  );
}

export default App;
