import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
	console.log(chalk.bgRed(' ERROR ') + ' ' + error);
}

const printSuccess = (msg) => {
	console.log(chalk.bgGreen(' SUCCESS ') + ' ' + msg);
}

const printHelp = () => {
	console.log(
		dedent`

		${chalk.bgCyan(' HELP ')}

		Без параметров - вывод погоды
		-s [SITY]      - установка города
		-h             - вывод помощи
		-t [API_KEY]   - сохранение токена

		`
	);
}

const printWeather = (res, icon) => {
	console.log(
		dedent`

		${chalk.bgYellow(' WEATHER ')}
		Погода в городе ${res.name}:
		${icon}  ${res.weather[0].description}
		Температура: ${res.main.temp} (ощущается как: ${res.main.feels_like})
		Влажность: ${res.main.humidity}%
		Скорость ветра: ${res.wind.speed}м/с

		`
	);
}

export {
	printError,
	printSuccess,
	printHelp,
	printWeather
}