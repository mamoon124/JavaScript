const button = document.getElementById("button");
const input = document.getElementById("input");

const cityname = document.getElementById("city-name")
const cityTime = document.getElementById("city-time")
const citytemp = document.getElementById("city-temp")

async function getdata(cityName){
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=7717c07a81d44c708d9181838251711&q=${cityName}&aqi=yes`)
    return await res.json()
}
button.addEventListener("click",async ()=>{
    const value = input.value;
    const result = await getdata(value);
    cityname.innerText = `${result.location.name},${result.location.region},${result.location.country}`;
    cityTime.innerText = result.location.localtime;
    citytemp.innerText = result.current.temp_c;


})