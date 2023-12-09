import * as React from 'react'
import ReactWeather, { useOpenWeather } from 'react-open-weather'

// https://www.npmjs.com/package/react-open-weather

const WeatherWidget = (props) => {
  
	const { data, isLoading, errorMessage } = useOpenWeather({
    key: import.meta.env.VITE_OPENWEATHERMAP_API_KEY,
    lat: '-31.083332',
    lon: '150.916672',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  })

  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Tamworth"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  )
}

export default WeatherWidget
