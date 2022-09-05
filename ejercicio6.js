//6) hacer un metodo que reciba un array de strings y devuelvo otro con todos los elementos 
//pasados a mayuscula.

function pasarStringAMayus(miArray){
   let miNuevoArray=[];
    for (let i = 0; i < miArray.length; i++) {
        let agregar = miArray[i].toUpperCase();
        miNuevoArray.push(agregar);
      }
    return miNuevoArray;
}