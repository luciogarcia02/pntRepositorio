// version para 3 correrdores
async function ponerACorrer(){
    console.log("3...2...1...YA!!!")
    const corredores=[];

    for (let i = 0; i < 19; i++) {
        corredores[i]=crearCorredor(i);
      }

    console.log("corriendo...")
    const ganadorPromise = await Promise.race(corredores);
    console.log("gano el corredor "+ganadorPromise);
}

function crearCorredor(i){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(i);
        }, aleatorio(3000,10000));
      });
}

function aleatorio(inferior, superior) {
    var numPosibilidades = superior - inferior;
    var aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return inferior + aleatorio;
}

ponerACorrer();