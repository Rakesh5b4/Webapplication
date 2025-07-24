
import React from 'react';

interface WeatherIconProps {
  condition: string;
  className?: string;
}

// Icon components defined in the same file for simplicity.
const SunnyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-15.66l-.7.7M4.04 19.96l-.7.7M21 12h-1M4 12H3m15.66-7.96l-.7-.7M4.74 4.74l-.7-.7M12 12a5 5 0 100-10 5 5 0 000 10z" />
    </svg>
);

const CloudyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999A5.002 5.002 0 1012 5a4.5 4.5 0 00-4.5 4.5V15z" />
    </svg>
);

const PartlyCloudyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 12.728l-.707.707M12 21v-1m-6.364-1.636l.707-.707" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014A8.003 8.003 0 0112 3a8 8 0 114.657 14.657z" />
    </svg>
);

const RainyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999A5.002 5.002 0 1012 5a4.5 4.5 0 00-4.5 4.5V15z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17l-1 2m-1-4l-1 2m4-2l-1 2m-1-4l-1 2" />
    </svg>
);

const SnowyIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999A5.002 5.002 0 1012 5a4.5 4.5 0 00-4.5 4.5V15z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17l.01 0M10 19l.01 0M14 19l.01 0M9 21l.01 0M15 21l.01 0" />
    </svg>
);

const DefaultIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


export const WeatherIcon: React.FC<WeatherIconProps> = ({ condition, className = 'w-full h-full' }) => {
  const lowerCaseCondition = condition.toLowerCase();

  if (lowerCaseCondition.includes('sun') || lowerCaseCondition.includes('clear')) {
    return <SunnyIcon className={className} />;
  }
  if (lowerCaseCondition.includes('partly cloudy')) {
    return <PartlyCloudyIcon className={className} />;
  }
  if (lowerCaseCondition.includes('cloud') || lowerCaseCondition.includes('overcast')) {
    return <CloudyIcon className={className} />;
  }
  if (lowerCaseCondition.includes('rain') || lowerCaseCondition.includes('drizzle') || lowerCaseCondition.includes('shower')) {
    return <RainyIcon className={className} />;
  }
  if (lowerCaseCondition.includes('snow') || lowerCaseCondition.includes('sleet')) {
    return <SnowyIcon className={className} />;
  }
  
  // Default icon for other conditions like 'mist', 'fog', etc.
  return <CloudyIcon className={className} />;
};
