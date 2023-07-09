console.log("Welcome to project zero.")

var a = 0;

let b = 1;
const c = 2;
let t = "moin moin"

const myArray = [3, 8, 12];
const myArray2 = ['hola', 'hallo', 'hello'];


const myObject = {
    name: 'Janosch',
    lastname: "Henle",
    myArrayProp: ["moin", "welt"],
    myNestedObject: {
        prop1: 1,
        prop2: 2
    },
    mySquare: (n) => n * n
}


const onPastaTime = () => {
    const egal = myArray[2] + myObject.myNestedObject.prop2;
    const whateva = square(egal);
    alert("It's pasta time Mr. " + myObject.lastname + " " + whateva + myObject.myArrayProp[1]);
}


let language = "en"
const changeLanguage = () => {
    if (language === 'en') {
        language = 'es'
    } else {
        language = 'en'
    }
}

const sayHello = () => {
    if (language === 'en') {
        console.log('Hello')
    } else {
        console.log('Hola')
    }
}







const init = () => {
    const knopf = document.getElementById("knopf1");
    knopf.onclick = onPastaTime;

    const knopf2 = document.getElementById("knopf2");
    knopf2.onclick = changeLanguage;

    const knopf3 = document.getElementById("knopf3");
    knopf3.onclick = sayHello;

    const knopf4 = document.getElementById("knopf4");
    knopf4.onclick = () => {
        const myNumberInput = document.getElementById("myNumber")
        console.log(myNumberInput.value)
        const isDivisible = divisibleByFive(myNumberInput.value)
        console.log(myNumberInput.value + "  is divisible by 5: " + isDivisible)
    }

    const knopf5 = document.getElementById("knopf5");
    knopf5.onclick = () => {
        const zahlInput = document.getElementById("zahl");
        const zahl = zahlInput.value;
        const divisor = document.getElementById("divisor").value;
        const isDivisible = isDivisibleBy(zahl, divisor)
        console.log(`${zahl} is divisible by ${divisor}: ${isDivisible}`)
    }
    document.getElementById ("knopf6").onclick = () => {
        const pribru = document.getElementById("pribru").value;
        const result = prickelBrumm (pribru);
        document.getElementById ("pribrures").innerHTML = result;    }
    console.log('Moin')

    console.log(myObject.name)
}


const square = (n) => {

    return n * n;
}

const add = (n1, n2) => {
    return n1 + n2;
}

function square2(n) {
    return n * n;
}

const divisibleByFive = (n) => {
    return n % 5 === 0;
}


const isDivisibleBy = (n, m) => {
    return n % m === 0;
}

const prickelBrumm = (n) => {
    if (istPrickel(n) && istBrumm(n)) {
        return "Prickelbrumm!";
    }
    else if (istPrickel(n)) {
        return "Prickel.";
    }
    else if (istBrumm(n)) {
        return "Brumm.";
    }
    else {
        return "Nichts prickelt, nichts brummt.";
    }

}

const istPrickel = (n) => isDivisibleBy(n, 7)
const istBrumm = (n) => isDivisibleBy(n, 13)
document.addEventListener("DOMContentLoaded", init, false)
