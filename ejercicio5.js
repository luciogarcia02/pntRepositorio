//5) Con el array de series, devolver otro array formado por elementos de tipo "Nombre(estreno)".
const series = [
    {nombre:"skins",anio:2007},
    {nombre:"on my block",anio:2018},
    {nombre:"manifiesto",anio:2017},
    {nombre:"brooklyn 99",anio:2013},
]

let nuevoArray=[];

function hacerNuevoArray(miArray){
    for (let i = 0; i < miArray.length; i++) {
        let nombreSerie= series[i].nombre+"("+series[i].anio+")";
        nuevoArray.push(nombreSerie);
      }
}

hacerNuevoArray(series)
nuevoArray.forEach(elemento => console.log(elemento))