const text = document.getElementById("text")
const button = document.getElementById("btn")

function counter(){
    let count = 1;
    function counting(){
        console.log(count++);
    }
    return counting;
}
const counter1 = counter();
counter1();
counter1();
counter1();

// function resize(size){
//     function changeSize(){
//         text.style.fontSize = `${size}px`;
//     }
//     return changeSize;
// }
// const size12 = resize(12);
// button.addEventListener("click",size12)