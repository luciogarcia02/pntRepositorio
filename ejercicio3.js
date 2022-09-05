
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

