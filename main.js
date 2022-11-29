/* SIMULADOR INTERACTIVO | ROCK, PAPER, SCISSORS, LIZARD, SPOCK */

let nombreJugador = prompt("Ingrese su nombre: ");

function saludarJugador(nombreJugador){
    alert("Bienvenido/a " + nombreJugador);
}
saludarJugador(nombreJugador);


let passwordUser = parseInt(prompt("Ingrese su contraseña: "));
const passwordAutorizado = 1234;

for(let i = 0; i < 2; i++){
    if(passwordUser === passwordAutorizado){
        alert("Contraseña correcta, comencemos a jugar!");
        elegirNumero();
        break;
    }else{
        passwordUser = parseInt(prompt("Contraseña incorrecta, vuelva a intentarlo"));
    }
}

function elegirNumero() {
    let numeroElegido = parseInt(prompt("Elija una opción: (Ingrese un número del 1 al 5) \n 1. Piedra \n 2. Papel \n 3. Tijera \n 4. Lagarto \n 5. Spock "));
    let numeroRandom = Math.floor(Math.random()*5)+1;
    
    while(numeroElegido<1 || numeroElegido>5){
        alert("Opción incorrecta, vuelva a intentarlo.");
        numeroElegido = parseInt(prompt("Elija una opción: (Ingrese 1, 2 o 3) \n 1. Piedra \n 2. Papel \n 3. Tijera \n 4. Lagarto \n 5. Spock "));
    }

    // PIEDRA VS RANDOM
    if(numeroElegido == 1 && numeroRandom==1){
        alert("Piedra vs Piedra. \n EMPATE");
    }
    else if(numeroElegido == 1 && numeroRandom == 2){
        alert("Papel cubre a Piedra \n PERDISTE :( ");
    }
    else if(numeroElegido == 1 && numeroRandom == 3){
        alert("Piedra aplasta Tijera. \n FELICIDADES, GANASTE!");
    }
    else if(numeroElegido == 1 && numeroRandom == 4){
        alert("Piedra aplasta a Lagarto. \n FELICIDADES, GANASTE!");
    }
    else if(numeroElegido == 1 && numeroRandom == 5){
        alert("Spock evapora a Piedra \n PERDISTE :(");
    }
    // PAPEL VS RANDOM
    else if(numeroElegido == 2 && numeroRandom==1){
        alert("Papel cubre a Piedra. \n FELICIDADES, GANASTE!");
    }
    else if(numeroElegido == 2 && numeroRandom == 2){
        alert("Papel vs Papel. \n EMPATE");
    }
    else if(numeroElegido == 2 && numeroRandom == 3){
        alert("Tijera corta a Papel. \n PERDISTE :(");
    }
    else if(numeroElegido == 2 && numeroRandom == 4){
        alert("Lagarto come a Papel. \n PERDISTE :(");
    }
    else if(numeroElegido == 2 && numeroRandom == 5){
        alert("Papel desautoriza a Spock \n FELICIDADES, GANASTE!");
    }
    //TIJERA VS RANDOM
    else if(numeroElegido == 3 && numeroRandom==1){
        alert("Piedra aplasta Tijera. \n PERDISTE :(");
    }
    else if(numeroElegido == 3 && numeroRandom == 2){
        alert("Tijera corta a Papel. \n FELICIDADES, GANASTE!");
    }
    else if(numeroElegido == 3 && numeroRandom == 3){
        alert("Tijera vs Tijera. \n EMPATE");
    }
    else if(numeroElegido == 3 && numeroRandom == 4){
        alert("Tijera decapita a Lagarto. \n FELICIDADES, GANASTE!");
    }
    else if(numeroElegido == 3 && numeroRandom == 5){
        alert("Spock aplasta a Tijera. \n PERDISTE :(");
    }
    // LAGARTO VS RANDOM
    else if(numeroElegido == 4 && numeroRandom==1){
        alert("Piedra aplasta a Lagarto \n PERDISTE :(");
    }
    else if(numeroElegido == 4 && numeroRandom == 2){
        alert("Lagarto come a Papel \n FELICIDADES, GANASTE!");
    }
    else if(numeroElegido == 4 && numeroRandom == 3){
        alert("Tijera decapita a Lagarto \n PERDISTE :(");
    }
    else if(numeroElegido == 4 && numeroRandom == 4){
        alert("Lagarto vs Lagarto \n EMPATE");
    }
    else if(numeroElegido == 4 && numeroRandom == 5){
        alert("Lagarto envenena a Spock. \n FELICIDADES, GANASTE!");
    }
    // SPOCK VS RANDOM
    else if(numeroElegido == 5 && numeroRandom==1){
        alert("Spock vaporiza a piedra \n FELICIDADES, GANASTE!");
    }
    else if(numeroElegido == 5 && numeroRandom == 2){
        alert("Papel desautoriza a Spock \n PERDISTE :(");
    }
    else if(numeroElegido == 5 && numeroRandom == 3){
        alert("Spock aplasta a Tijera \n FELICIDADES, GANASTE!");
    }
    else if(numeroElegido == 5 && numeroRandom == 4){
        alert("Lagarto envenena a Spock. \n PERDISTE :( ");
    }
    else if(numeroElegido == 5 && numeroRandom == 5){
        alert("Spock vs Spock. \n EMPATE");
    }

    console.log("Número random:");
    console.log(numeroRandom);
    console.log("Número ingresado:");
    console.log(numeroElegido);
}

