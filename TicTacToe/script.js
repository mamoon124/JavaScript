let currentPLayer = 'X';
let arr = Array(9).fill(null);

function checkWinner(){
    if(
        (arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2]) ||
        (arr[3] !== null && arr[3] === arr[4] && arr[4] === arr[5]) ||
        (arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8]) ||
        (arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6]) ||
        (arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7]) ||
        (arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[8]) ||
        (arr[0] !== null && arr[0] === arr[4] && arr[4] === arr[8]) ||
        (arr[2] !== null && arr[2] === arr[4] && arr[4] === arr[6])){
            document.write(`<h1>Player ${currentPLayer} Wins!</h1>`);
            return;
        
                                     
    }
    if(!arr.includes(null)){
        document.write(`<h1>It's a Draw!</h1>`);
        return;
    }

}




function handleClick(el){
    if(arr[Number(el.id)] !== null){
        return;
    }
    const id = Number(el.id);
    arr[id] = currentPLayer;
    checkWinner();
    currentPLayer = currentPLayer === 'X' ? 'O' : 'X';
    el.innerText = arr[id];
    
}
console.log("script loaded");
