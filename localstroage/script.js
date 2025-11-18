const input = document.getElementById("input-username");
const button = document.getElementById("Button");
const username = document.getElementById("username");

button.addEventListener("click",()=>{
    const val = input.value;
    localStorage.setItem("name",val);
    location.reload();
})

window.addEventListener("load",()=>{
    const value = localStorage.getItem("name");
    username.innerText = value;

})