//7) Dado el array de condiciones del ejercicio 2, devolver otro 
//con el siguiente formato: "condicion:(si el valor es true:👍 sino 👎)"

const condiciones = [
    {condicion:"debe haber pelota",valor:true},
    {condicion:"equipo 1 debe tener 11 jugadores",valor:true},
    {condicion:"equipo 2 debe tener 11 jugadores",valor:false},
    {condicion:"todos los jugadores deben estar anotados",valor:true},
    {condicion:"las condiciones climaticas deben ser buenas",valor:false}
]

let razones = [];

condiciones.forEach(elemento => checkearElemento(elemento))

function checkearElemento(elemento){
    if(elemento.valor){
        razones.push(elemento.condicion+"👍");
    }else{
        razones.push(elemento.condicion+"👎");
    }
}

razones.forEach(elemento => console.log(elemento))