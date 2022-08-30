const series = [
    {nombre:"skins",anio:2007},
    {nombre:"on my block",anio:2018},
    {nombre:"manifiesto",anio:2017},
    {nombre:"brooklyn 99",anio:2013},
]
function ordenarAscendente(){
    series.sort(function(a, b){
        anioa=a.anio
        aniob=b.anio;
        return anioa - aniob;
    });
}
function ordenarDescendente(){
    series.sort(function(a, b){
        anioa=a.anio;
        aniob=b.anio;
        return aniob - anioa;
    });
}

series.forEach(elemento => console.log(elemento))
console.log("-----------")
ordenarDescendente();
series.forEach(elemento => console.log(elemento))
ordenarAscendente();
console.log("-----------")
series.forEach(elemento => console.log(elemento))

//4) Con el array de series, quiero eliminar un elemento segun su titulo sin modificar el array original.

function copiarArray(miArray){
    let arrayDevolver=[];
    miArray.forEach(elemento => arrayDevolver.push(elemento));
    return arrayDevolver;
}

let nuevoArray = copiarArray(series);

function borrarPorNombre(nombreSerie, miArray){
    for (let i = 0; i < miArray.length; i++) {
        if(miArray[i].nombre==nombreSerie){
            miArray.splice(i,1)
        }
      }
}
let nombreSerie = "manifiesto"
borrarPorNombre(nombreSerie,nuevoArray);
nuevoArray.forEach(elemento => console.log(elemento))