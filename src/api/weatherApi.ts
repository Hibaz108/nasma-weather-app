export async function fetchData(city: string) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`,
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data?.error?.message || "Failed to fetch weather data");
  }
  return data;
}
