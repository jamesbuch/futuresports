import * as React from 'react'

const WeatherCard = (props) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-header" style={{ backgroundColor: 'yellow' }}>
        Weather for {props.data.name}, {props.data.sys.country}
      </div>
      <img src={props.icon} className="card-img-top" alt="Weather Icon" />
      <div className="card-body">
        <h5 className="card-title">Weather</h5>
        <p className="card-text">{new Date().toLocaleString()}</p>
        <p className="card-text">
          {props.data.main.temp} <sup>o</sup>
        </p>
        <p className="card-text">{props.data.weather[0].description}</p>
        <h5 className="card-title">High/Low</h5>
        <p className="card-text">
          <span>
            {props.data.main.temp_max}/{props.data.main.temp_min}
          </span>
        </p>
        <h5 className="card-title">Humidity</h5>
        <p className="card-text">
          <span>{props.data.main.humidity} %</span>
        </p>
        <h5 className="card-title">Visibility</h5>
        <p className="card-text">
          <span>{props.data.visibility / 1000} Km</span>
        </p>
        <h5 className="card-title">Wind Speed</h5>
        <p className="card-text">
          {props.data.wind.speed} km/hr
        </p>
        <h5 className="card-title">Wind Direction</h5>
        <p className="card-text">
          {props.data.wind.deg}
          <sup>o</sup> deg
        </p>
        <h5 className="card-title">Sunrise</h5>
        <p className="card-text">
          {new Date(props.data.sys.sunrise * 1000).toLocaleTimeString()}
        </p>
        <h5 className="card-title">Sunset</h5>
        <p className="card-text">
          {new Date(props.data.sys.sunset * 1000).toLocaleTimeString()}
        </p>
      </div>
    </div>
  )
}

const WeatherWidget = (WrappedComponent) => {
  return function WeatherDataWidget(props) {
    const key = import.meta.env.VITE_OPENWEATHERMAP_API_KEY
    const [city, setCity] = React.useState('Tamworth')
    const [country, setCountry] = React.useState('AU')
    const [weatherIcon, setWeatherIcon] = React.useState('')

    const [weatherData, setWeatherData] = React.useState([])

    const handleChange = (e) => {
      let name = e.target.name
      let value = e.target.value

      if (name === 'city') {
        setCity(value)
      }
      if (name === 'country') {
        setCountry(value)
      }
    }

    const getWeatherData = (e) => {
      e.preventDefault()
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=${key}`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeatherData(data)
          console.log(JSON.stringify(data, null, 2))
        })
    }

    React.useEffect(() => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${key}`
      )
        .then((res) => res.json())
        .then((data) => setWeatherData(data))
    }, [])

    if (weatherData.length === 0) return null

    return (
      <form>
        <div className="mb-1">
          <WrappedComponent
            {...props}
            data={weatherData}
            icon={`http://openweathermap.org/img/wn/${weatherData['weather'][0].icon}@4x.png`}
          />
        </div>
        <div className="row mb-1">
          <input
            type="text"
            placeholder="city"
            name="city"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="row mb-1">
          <input
            type="text"
            placeholder="Country"
            name="country"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="row mb-1">
          <button
            className="btn btn-success"
            onClick={(e) => getWeatherData(e)}
          >
            Get Weather
          </button>
        </div>
      </form>
    )
  }
}

export default WeatherWidget(WeatherCard)
