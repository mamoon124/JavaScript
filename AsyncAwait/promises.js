let a = 10;
let b = 20;
let ans = a+b;
async function GetData(){
    let result = await fetch("https://jsonplaceholder.typicode.com/posts")
    console.log(result)
}

GetData();
console.log(ans);