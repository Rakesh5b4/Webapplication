
import { GoogleGenAI, Type } from "@google/genai";
import type { WeatherData } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const weatherSchema = {
  type: Type.OBJECT,
  properties: {
    temperature: {
      type: Type.NUMBER,
      description: "The current temperature in Celsius."
    },
    condition: {
      type: Type.STRING,
      description: "A brief, one or two word description of the weather, e.g., 'Sunny', 'Partly Cloudy', 'Rainy'."
    },
    feelsLike: {
      type: Type.NUMBER,
      description: "The 'feels like' temperature in Celsius."
    },
    humidity: {
      type: Type.NUMBER,
      description: "The humidity as a percentage, e.g., 55 for 55%."
    },
    windSpeed: {
      type: Type.NUMBER,
      description: "The wind speed in kilometers per hour (km/h)."
    }
  },
  required: ["temperature", "condition", "feelsLike", "humidity", "windSpeed"]
};

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  const prompt = `Get the current weather for the city: ${city}. Provide the temperature in Celsius, a short description of the weather condition (e.g., 'Sunny', 'Partly Cloudy', 'Rainy'), the 'feels like' temperature in Celsius, humidity as a percentage, and wind speed in kilometers per hour.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: weatherSchema,
      },
    });

    const jsonText = response.text.trim();
    const weatherDetails = JSON.parse(jsonText);
    
    return {
      city: city,
      temperature: Math.round(weatherDetails.temperature),
      condition: weatherDetails.condition,
      humidity: Math.round(weatherDetails.humidity),
      windSpeed: Math.round(weatherDetails.windSpeed),
      feelsLike: Math.round(weatherDetails.feelsLike),
    };
  } catch (error) {
    console.error("Error fetching or parsing weather data from Gemini API:", error);
    throw new Error("Could not retrieve weather data.");
  }
};
