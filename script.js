console.log("Welcome to project zero.")

var a =0;

let b = 1;
const c =2;
let t = "moin moin"

const myArray = [3,8,12];

const  myObject = {
    name:'Janosch',
    lastname: "Henle",
    myArrayProp : ["moin", "welt"],
    myNestedObject : {
        prop1 :1,
        prop2: 2
    },
    mySquare : (n)=> n*n
}


const onPastaTime = ()=>{
    const egal = myArray[2] + myObject.myNestedObject.prop2;
    const whateva = square(egal);
    alert("It's pasta time Mr. " + myObject.lastname  + " " + whateva + myObject.myArrayProp[1]);
}


const init = ()=>{
    const knopf = document.getElementById("knopf1");
    knopf.onclick = onPastaTime;
}


const square = (n) => {

    return n *n;
}

const add  = (n1, n2) => {
    return n1 +n2;
}

function square2(n){
    return n* n;
}


document.addEventListener("DOMContentLoaded",init ,false)