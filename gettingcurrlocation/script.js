const button = document.getElementById("Button");

async function getdata(lat,lon){
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=7717c07a81d44c708d9181838251711&q=${lat},${lon}&aqi=yes`)
    return await res.json()
}

async function gotloaction(position){
    const result = await getdata(position.coords.latitude,position.coords.longitude);
    console.log(result);
    
    
}
function failed(){
    console.log("failed to fetch");
}

button.addEventListener("click",async ()=>{
    navigator.geolocation.getCurrentPosition(gotloaction,failed)

})