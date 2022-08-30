
const condiciones = [
    {condicion:"debe haber pelota",valor:true},
    {condicion:"equipo 1 debe tener 11 jugadores",valor:true},
    {condicion:"equipo 2 debe tener 11 jugadores",valor:false},
    {condicion:"todos los jugadores deben estar anotados",valor:true},
    {condicion:"las condiciones climaticas deben ser buenas",valor:false}
]
let razones = [];

function estaEnCondiciones(misCondiciones){
    let ok=true
    misCondiciones.forEach(elemento => checkearElemento(elemento))
    if(razones.length!=0){
        ok=false;
    }
    return ok;
}

function checkearElemento(elemento){
    if(elemento.valor==false){
        razones.push(elemento.condicion);
    }
    return elemento.valor;
}

console.log(estaEnCondiciones(condiciones))
razones.forEach(elemento => console.log(elemento))