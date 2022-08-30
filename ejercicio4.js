const series = [
    {nombre:"skins",anio:2007},
    {nombre:"on my block",anio:2018},
    {nombre:"manifiesto",anio:2017},
    {nombre:"brooklyn 99",anio:2013},
]

//4) Con el array de series, quiero eliminar un elemento segun su titulo sin modificar el array original.

function copiarArray(miArray){
    let arrayDevolver=[];
    miArray.forEach(elemento => arrayDevolver.push(elemento));
    return arrayDevolver;
}

let nuevoArray = copiarArray(series);
let serieABorrar = "manifiesto"

function borrarPorNombre(nombreSerie, miArray){
    for (let i = 0; i < miArray.length; i++) {
        if(miArray[i].nombre==nombreSerie){
            miArray.splice(i,1)
        }
      }
}

borrarPorNombre(serieABorrar,nuevoArray);
nuevoArray.forEach(elemento => console.log(elemento))