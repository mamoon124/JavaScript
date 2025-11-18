function gettime(){
    const currentTime = new Date();
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    document.getElementById("time").innerText = time;

}
let interval = setInterval(gettime,1000);
const timer = document.getElementById("timer")
let stopwatch = setInterval(gettime,timer.value)

const button = document.getElementById("btn");
button.addEventListener("click",()=>{
    clearInterval(stopwatch);

})



