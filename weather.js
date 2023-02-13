let weather = {
	"apiKey": "5667a89f309db2c399acad6c1a792f9d",
	fetchWeather: function (city) {
		fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
			+ city 
			+ "&appid=" + this.apiKey 
			+ "&units=metric4")
		.then(response => response.json())
		.then(data => this.displayWeather(data))	
	},
	displayWeather: function (data) {
		const { name } = data
		const { icon , description } = data.weather[0]
		const { temp, humidity } = data.main
		const { speed } = data.wind	
		document.querySelector(".city").innerText = "Weather in " + name
		document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon + ".png"
		document.querySelector(".temp").innerText = temp +"°"
		document.querySelector(".description").innerText = description
		document.querySelector(".humidity").innerText = "Humidity: " + humidity + " %"
		document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h"
		
	},
	search:function(){
		this.fetchWeather(document.querySelector(".search-bar").value)
	}
}

document.querySelector(".search button").addEventListener("click", function (){
	weather.search()
	document.querySelector(".search-bar").value = ""
})
document.querySelector(".search-bar").addEventListener("keyup", function(event){
	if (event.key == "Enter") {weather.search();document.querySelector(".search-bar").value = ""}
})