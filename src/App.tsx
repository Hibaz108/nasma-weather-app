import Header from "./components/layout/Header";
import CurrentWeatherCard from "./components/weather/CurrentWeatherCard";
import SearchBar from "./components/weather/SearchBar";
import WeatherHighlights from "./components/weather/WeatherHighlights";
import HourlyForecast from "./components/weather/HourlyForecast";
import DailyForecast from "./components/weather/DailyForecast";
import Conditions from "./components/weather/Conditions";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <div className="min-h-svh max-w-4xl mx-auto flex flex-col p-4">
      <Header />
      <SearchBar />
      <CurrentWeatherCard />
      <WeatherHighlights />
      <HourlyForecast />
      <div className="grid md:grid-cols-2 gap-2 mt-6">
        <DailyForecast />
        <Conditions />
      </div>
      <Footer />
    </div>
  );
}

export default App;
