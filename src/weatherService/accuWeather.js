// api keys de accuweather 

const API_KEY = "sQoF7TGo6pGG1mIXyLDhHzXyXAniPDjt";
const API_KEY2 = "bAJhVBBEveSR1Tcxweif1EkbhZPJdFtn"; 


const API_KEY_OPENWEATHER = "6419b61865ae340750eb256dda6f170b"; // api key de openweather

// funcion que encuentra el numero id de la ciudad

const getCity = async (city) => {

    const BASE_URL = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete"
    const QUERY = `?apikey=${API_KEY}&q=${city}`

    const response = await fetch(BASE_URL + QUERY)
    const data = await response.json()

    return data[0];
}

// funcion que te devuelve el clima en los proximos 5 dias de la ciudad buscada en la api de accuweather

const getWeather = async(locationKey) => {
    const BASE_URL_5DAY = "http://dataservice.accuweather.com/forecasts/v1/daily/5day/"
    const BASE_URL_12HOUR = "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/"

    const QUERY = `?apikey=${API_KEY}&metric=true`

    const response5Day = await fetch(BASE_URL_5DAY + locationKey + QUERY)
    const data5Day = await response5Day.json()

    const response12Hour = await fetch(BASE_URL_12HOUR + locationKey + QUERY)
    const data12Hour = await response12Hour.json()

    return {
        fiveDayForecast: data5Day,
        twelveHourForecast: data12Hour 
    }

}

// esta funcion recibe como parametro la ciudad buscada y retorna la lat y lon de la ciudad

const getCityOpenweather = async (city) => {
    const BASE_URL = "http://api.openweathermap.org/data/2.5/weather?q="
    const QUERY = `&appid=${API_KEY_OPENWEATHER}`

    const response = await fetch(BASE_URL + city + QUERY)
    const data = await response.json()


    return data
}

export {getCity,getWeather,getCityOpenweather,}