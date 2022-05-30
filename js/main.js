let x = 3;
console.log(x)
console.log("console log desde mainJS");


document.getElementById("encabezado").innerHTML=("Fundamentos " + x);

//String
let nombre = "Bruno";
console.log(typeof(nombre));

//Number 
let edad = 25;
console.log(typeof(edad));

//Boolean
let chilaquieres_rojos = true;
console.log(typeof(chilaquieres_rojos));

//undefined
let equipoFut;
console.log(typeof(equipoFut));

//null
let graduado = null;
console.log(typeof(graduado));

//Object
let calificaciones = {};
console.log(typeof(calificaciones));

edad = parseInt(edad) + 1;
console.log(edad);

console.log(typeof(edad));

console.log(parseInt(nombre));

console.log("20"  * 2);


//Precedencia de operadores

let x = ((+))



function Adivinar() {
    let superior = 100;
    let inferior = 0;
    let noEncontrado = true;
    while(noEncontrado){
        let mid = parseInt(inferior + ((superior-inferior) /2));
        console.log(mid);
        console.log(((superior-inferior)/2));

        if (((superior-inferior)/ 2)<1){
            noEncontrado=false;
            alert("Tu número es el " + (parseInt(mid)+1));
            break;            
        }
        let res = confirm("Tu número es menor o igual a " + mid);
        if (res) {
            superior=mid;
        } else {
            inferior=mid;
        }
        console.log(inferior, superior);
        
        }
}
Adivinar ();
