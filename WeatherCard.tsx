
import React from 'react';
import type { WeatherData } from '../types';
import { WeatherIcon } from './WeatherIcon';

interface WeatherCardProps {
  data: WeatherData;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  return (
    <div className="w-full max-w-md bg-gradient-to-b from-blue-800/50 to-blue-900/50 backdrop-blur-sm rounded-2xl shadow-2xl p-6 text-white animate-fade-in">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold capitalize">{data.city}</h2>
          <p className="text-gray-300">{data.condition}</p>
        </div>
        <div className="w-20 h-20 text-yellow-300">
          <WeatherIcon condition={data.condition} />
        </div>
      </div>

      <div className="my-8 text-center">
        <span className="text-7xl md:text-8xl font-light tracking-tighter">{data.temperature}°</span>
        <span className="text-5xl md:text-6xl font-light text-gray-300 align-top">C</span>
        <p className="text-gray-300 mt-2">Feels like {data.feelsLike}°C</p>
      </div>

      <div className="flex justify-around text-center border-t border-blue-700/50 pt-4">
        <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-3.333 0-6.667 2.25-10 3.75 3.333 1.5 6.667 3.75 10 3.75s6.667-2.25 10-3.75C18.667 10.25 15.333 8 12 8zm0 0v-2m0 2c-1.114 0-2.202.168-3.25.47M22 11.75c-3.333-1.5-6.667-3.75-10-3.75m0 0a12.008 12.008 0 00-3.25.47M12 15.75c1.114 0 2.202-.168 3.25-.47M2 11.75c3.333 1.5 6.667 3.75 10 3.75m0 0a12.008 12.008 0 013.25-.47" />
            </svg>
            <span className="font-bold">{data.windSpeed} km/h</span>
            <span className="text-xs text-gray-400">Wind</span>
        </div>
        <div className="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-15.66l-.7.7M4.04 19.96l-.7.7M21 12h-1M4 12H3m15.66-7.96l-.7-.7M4.74 4.74l-.7-.7" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span className="font-bold">{data.humidity}%</span>
            <span className="text-xs text-gray-400">Humidity</span>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
