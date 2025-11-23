function add(a,b,c){
    return a+b+c;
}
console.log(add(2,3));
//We want the add function only to execute when all three parameters are present so we use currying which looks like:

function curryadd(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(curryadd(2)(3));
//we notice the curryadd function only runs when it have all three parameters 