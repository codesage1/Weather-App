//will add more factors, then data of whole week on click it will expand to show
//will improve the search functionality such that it will show in suggestion 



const apiKey="23ed753b5d48039e57b922696f522c9e";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


checkWeather('bengaluru');
async function checkWeather(city){
    if(city.length!=0){
        const response=await fetch(apiUrl + city +`&appid=${apiKey}`);
let data=await response.json();
console.log(data);

//all the variables we needs
const input=document.querySelector("input")
const button=document.querySelector("button")
let weatherIcon=document.querySelector('.icon')
let temperature=document.querySelector('.temp')
let cityName = document.querySelector('.city')
let humidity= document.querySelector('.humidity')
let wind= document.querySelector('.wind')


//changing the image according to temperature

if(data.weather[0].main == "Clouds"){
    weatherIcon.src="images/clouds.png"
}else if(data.weather[0].main == "Clear"){
    weatherIcon.src="images/clear.png"
}else if(data.weather[0].main=="Rain"){
    weatherIcon.src="images/rain.png"
}else if(data.weather[0].main=="Mist"){
    weatherIcon.src="images/mist.png"
}else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src = "images/mist.png"
}

//updating the values
cityName.textContent=data.name
temperature.textContent=Math.round(data.main.temp)+"°C"
humidity.textContent=data.main.humidity+"%"
wind.textContent=data.wind.speed+"km/hr"

function updateCity(){
        let city =input.value
        checkWeather(city);
        input.value=''
    }


// adding event listeners
    
button.addEventListener('click',updateCity)
document.addEventListener('keypress',(e)=>{
    if(e.key=='Enter'){
        updateCity();
    }
})
    }

}





