export async function texasApi(){
    const weatherKey = "88c6153af4bfc1a3fd5daba4c69e6011";
    let url =`http://api.weatherstack.com/current?access_key=${weatherKey}&query=Austin,Texas`;
    let localTimeE = document.getElementById("LoactionTime");
    let dateE = document.getElementById("LocationDate");
    let descritionE = document.getElementById("description");
    let tempE = document.getElementById("temp");
    try{
        const res = await fetch(url);
        const data = await res.json();
        let dataLocation = data.location;
        let dataCurrent = data.current;
        let currentTemp = dataCurrent.temperature;
        let localTime = dataLocation.localtime;
        let descriptions = dataCurrent.weather_descriptions;
        let splitTime = localTime.split(" ");
        let date = splitTime[0];
        let time = splitTime[1];
        localTimeE.textContent = "Time: "+ time;
        dateE.textContent = "Date: " +date;
        tempE.textContent = "Temp: "+ currentTemp;
        descritionE.textContent = "Description: " + descriptions;
    }catch(err){
    console.log(err);
    } 
}
