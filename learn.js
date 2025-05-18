//Async JS programming 
//callbacks,promises and await

const datas = [
    {name:"Mamoon",profession:"developer"},
    {name:"Haroon",profession:"developer"}
];

function getDatas(){
    setTimeout(() => {
        let output = ""
        datas.forEach((data,index)=>{
            output+=`<li>${data.name}</li>`;
        })
        document.body.innerHTML = output
        
    }, 1000);
}
function createData(newdata){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        datas.push(newdata);
        let error = false;
        if(!error){
            resolve();
        }else{
            reject("kuch sahi nhi hai..");
        }
        
        
    }, 2000);

    })
}
// createData({name:"Moshaib",profession:"developer"}).then(getDatas).catch(err=>(console.log(err)));
//Async and await

async function start(){
   await createData({name:"Moshaib",profession:"developer"})
   getDatas();

}
start();