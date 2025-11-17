// const obj = {
//     val: 20,
//     myfunc: function(){
//         console.log(this)
//     }
// }
// obj.myfunc();
//callbacks

// sum(display,3,4);

// function sum(cb,x,y){
//     let ans = x+y;
//     cb(ans);
// }
// function display(ans){ 
//     console.log(ans);
// }

const numbers = [1,2,3,4,5,6,7];
const newArr = numbers.filter(num=>num%2==0);
console.log(newArr);

// https://jsonplaceholder.typicode.com/posts