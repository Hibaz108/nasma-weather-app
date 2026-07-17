//components
import Header from "./components/layout/Header";
import SearchBar from "./components/weather/SearchBar";
import Footer from "./components/layout/Footer";
import WeatherContent from "./components/weather/WeatherContent";
//other
import { useInitialWeather } from "./hooks/useInitialWeather";

function App() {
  useInitialWeather();

  return (
    <div className="min-h-svh max-w-4xl mx-auto flex flex-col p-4">
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
