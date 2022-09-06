// version para 3 correrdores
async function ponerACorrer(){
    console.log("3...2...1...YA!!!")
    
    const corredor1promise = crearCorredor(1);
    const corredor2promise = crearCorredor(2);
    const corredor3promise = crearCorredor(3);
  
    const corredores=[corredor1promise,corredor2promise,corredor3promise];
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