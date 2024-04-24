// api keys de accuweather 

const API_KEY = "sQoF7TGo6pGG1mIXyLDhHzXyXAniPDjt";
const API_KEY2 = "bAJhVBBEveSR1Tcxweif1EkbhZPJdFtn"; 
const API_KEY3 = "0412g52Y4mkGBlG2eEpHzHlNWj6aLdZq"


const API_KEY_OPENWEATHER = "6419b61865ae340750eb256dda6f170b"; // api key de openweather

// funcion que encuentra el numero id de la ciudad

const getCity = async (city) => {

    const BASE_URL = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete"
    // const QUERY = `?apikey=${API_KEY}&q=${city}`
    const url = new URL(BASE_URL)
    url.searchParams.append('apikey', API_KEY3)
    url.searchParams.append('q',city)

    const response = await fetch(url)
    const data = await response.json()

    return data[0];
}

// funcion que te devuelve el clima en los proximos 5 dias de la ciudad buscada en la api de accuweather

const getWeather = async(locationKey) => {
    const BASE_URL_5DAY = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/"
    const BASE_URL_12HOUR = "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/"

    const QUERY = `?apikey=${API_KEY3}&metric=true`

    const response5Day = await fetch(BASE_URL_5DAY + locationKey + QUERY)
    const data5Day = await response5Day.json()

    const response12Hour = await fetch(BASE_URL_12HOUR + locationKey + QUERY)
    const data12Hour = await response12Hour.json()

    const mapped5DayForecast = data5Day.DailyForecasts.map(day => { 
        return {
            date: day.Date,
            icon: day.Day.Icon,
            minimum: day.Temperature.Minimum.Value,
            maximum: day.Temperature.Maximum.Value
        }
    })

    const mapped12HourForecast = data12Hour.map(hour => {
        return {
            dateTime: hour.DateTime,
            temperature: hour.Temperature.Value,
            icon: hour.WeatherIcon
        }
    })

    return {
        fiveDayForecast: mapped5DayForecast,
        twelveHourForecast: mapped12HourForecast 
    }

}

// esta funcion recibe como parametro la ciudad buscada y retorna la lat y lon de la ciudad

const getCityOpenweather = async (city) => {
    const BASE_URL = "http://api.openweathermap.org/data/2.5/weather?"
    // const QUERY = `&appid=${API_KEY_OPENWEATHER}&units=metric`

    const url = new URL(BASE_URL)
    url.searchParams.append('q', city)
    url.searchParams.append('appid', API_KEY_OPENWEATHER)
    url.searchParams.append('units', 'metric')


    const response = await fetch(url)   
    const data = await response.json()

    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        visibility,
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed }
    } = data

    const { main: details, icon } = weather[0]

    return {

        lat,
        lon,
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        visibility,
        name,
        dt,
        country,
        sunrise,
        sunset,
        details,
        icon,
        speed
    }
}

export {getCity,getWeather,getCityOpenweather,}