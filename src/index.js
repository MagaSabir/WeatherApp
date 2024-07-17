const today = new Date()
const option = {
	month: 'long',
	day: 'numeric'
}

const date = today.toLocaleDateString('en-US', option)

document.querySelector('.data-today').textContent = date

async function checkTemp() {
	const input = document.getElementById('value')
	const value = input ? input.value : 'moscow';
	const apiKey = '56305a9fae63155eb2415fe9eaa1fb29'
	const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${value}`
	const response = await fetch(url + `&appid=${apiKey}`)
	let data = await response.json()
  let temp = Math.round(data.main.temp)
	
	const tempBlocks = document.querySelectorAll('.temp-block');
    tempBlocks.forEach((block) => {
        const hourTempElement = block.querySelector('.hour-temp');

        const temp = Math.round(data.main.temp);
        hourTempElement.textContent = temp;
    });

		document.querySelector('.city-name').textContent = data.name

	document.querySelector('.temp').textContent = temp
	document.querySelector('.weather').textContent = data.weather[0].main
	document.querySelector('.max').textContent = 'Max: ' + Math.round(data.main.temp_max)
	document.querySelector('.min').textContent = 'Min: ' + Math.round(data.main.temp_min)
} 


checkTemp()


