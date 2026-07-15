import Header from "./components/layout/Header";
import CurrentWeatherCard from "./components/weather/CurrentWeatherCard";
function App() {
  return (
    <div className="min-h-svh max-w-4xl mx-auto flex flex-col p-4 bg-[#f1f1f1]">
      <Header />
      <CurrentWeatherCard />
    </div>
  );
}

export default App;
