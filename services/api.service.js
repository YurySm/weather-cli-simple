import https from 'https'
import { TOKEN_DICTIONARY, getKeyValue } from './storage.service.js'
import axios from 'axios'

const getIcon = (icon) => {
	switch (icon.slice(0, -1)) {
		case '01':
			return '☀️';
		case '02':
			return '🌤️';
		case '03':
			return '☁️';
		case '04':
			return '☁️';
		case '09':
			return '🌧️';
		case '10':
			return '🌦️';
		case '11':
			return '🌩️';
		case '13':
			return '❄️';
		case '50':
			return '🌫️';
	}
}

const getWeather = async (city) => {
	const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token)

	if (!token) {
		throw new Error('Не задан токен, задайте его через команду -t [API_KEY]')
	}

	// https
	// const urlWeather = new URL('https://api.openweathermap.org/data/2.5/weather')
	// urlWeather.searchParams.append('q', city)
	// urlWeather.searchParams.append('appid', token)
	// urlWeather.searchParams.append('lang', 'ru')
	// urlWeather.searchParams.append('units', 'metric')

	// https.get(urlWeather, (response) => {
	// 	let res = ''
	// 	response.on('data', (chank) => {
	// 		res += chank
	// 		console.log(res)
	// 	})
	// 	response.on('end', () => {
	// 		console.log('end');
	// 	})
	// 	response.on('error', (err) => {
	// 		console.log(err.message);
	// 	})
	// })

	const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
		params: {
			q: city,
			appid: token,
			lang: 'ru',
			units: 'metric'
		}
	})
	return data
}

export {
	getWeather,
	getIcon
}