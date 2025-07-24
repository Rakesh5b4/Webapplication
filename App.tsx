
import React, { useState, useCallback } from 'react';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { Loader } from './components/Loader';
import { fetchWeather } from './services/geminiService';
import type { WeatherData } from './types';

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [welcome, setWelcome] = useState<boolean>(true);

  const handleSearch = useCallback(async (city: string) => {
    if (!city) return;
    setLoading(true);
    setError(null);
    setWeatherData(null);
    setWelcome(false);

    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch weather data. Please check the city name or try again later.');
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-gray-900 to-blue-900 text-white font-sans">
      <div className="w-full max-w-md mx-auto space-y-6">
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
            WEATHER INFORMATION
          </h1>
          <p className="text-gray-400 mt-2">instant weather details</p>
        </header>
        
        <main>
          <SearchBar onSearch={handleSearch} loading={loading} />

          <div className="mt-6 min-h-[350px] flex items-center justify-center">
            {loading && <Loader />}
            {error && <div className="text-center text-red-400 bg-red-900/50 p-4 rounded-lg">{error}</div>}
            {weatherData && !loading && <WeatherCard data={weatherData} />}
            {welcome && !loading && !error && (
               <div className="text-center text-gray-400">
                 <p>Enter a city to get started</p>
               </div>
            )}
          </div>
        </main>
      </div>
      <footer className="absolute bottom-4 text-center text-gray-500 text-sm">
        <p>BUILT WITH CONFIDENCE</p>
      </footer>
    </div>
  );
};

export default App;