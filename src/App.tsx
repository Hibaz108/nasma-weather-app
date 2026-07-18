//components
import Header from "./components/layout/Header";
import SearchBar from "./components/weather/SearchBar";
import Footer from "./components/layout/Footer";
import WeatherContent from "./components/weather/WeatherContent";
//other
import { useInitialWeather } from "./hooks/useInitialWeather";
import { useTheme } from "./hooks/useTheme";

function App() {
  useInitialWeather();
  useTheme();

  return (
    <div className="min-h-svh max-w-4xl mx-auto flex flex-col p-4 bg-background">
      <Header />
      <SearchBar />
      <main className="flex-1">
        <WeatherContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;
