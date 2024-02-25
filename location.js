require("dotenv").config();
const fetch = require("node-fetch")
const weatherKey = process.env.WeatherKey;
console.log("weatherKey: ",weatherKey);

    async function texasApi(){

        let url =`http://api.weatherstack.com/current?access_key=${weatherKey}&query=Austin,Texas`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            let dataLocation = data.location;
            let dataCurrent = data.current;
            let currentTemp = dataCurrent.temperature;
            let localTime = dataLocation.localtime;
            let city = dataLocation.name;
            let state = dataLocation.region;
            let descriptions = dataCurrent.weather_descriptions;
            let splitTime = localTime.split(" ");
            let date = splitTime[0];
            let time = splitTime[1];
            console.log(splitTime)
            let localTimeE = document.getElementById("LoactionTime");
            let dateE = document.getElementById("LocationDate");
            let cityE = document.getElementById("city")
            let stateE = document.getElementById("state");
            let descritionE = document.getElementById("description");
            let tempE = document.getElementById("temp");

 
            localTimeE.textContent = time;
            dateE.textContent = date;
        }catch(err){
        console.log(err);
        }
        // document.addEventListener("DOMContentLoaded",(event)=>{
        
        // })
        
        
    }

texasApi()