// Ejercicio 1

function calcularAreaGalpones(medidasGalpones){
    let sumaAreas = 0;
    for (let i = 0; i < medidasGalpones.length; i++){
        let galpon = medidasGalpones[i];
        let areaGalpon = galpon.largo * galpon.ancho;
        sumaAreas += areaGalpon;
    }
    return sumaAreas
}


// Ejercicio 2

function verificarSuperficie(superficieEdificio, maquinas) {
    for (let i = 0; i < maquinas.length; i++) {
        let superficieRequerida = maquinas[i].superficieDeOperacionRequerida;
        if (superficieRequerida <= superficieEdificio) {
            return true; 
        }
    }    
    return false; 
} 



// Ejercicio 3

function filtrarInversoresVIP(inversores) {
    let inversoresVIP = inversores.filter(inversor => inversor.capital > 1000000);
    return inversoresVIP
}


// Ejercicio 4

function devolverObjeto () {
    
}



// Ejercicio 5

