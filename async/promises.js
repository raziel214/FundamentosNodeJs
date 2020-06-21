function hola(nombre,miCallback) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(`Hola, ` + nombre); 
            resolve(nombre);

        }, 1500);
    });

 }
function hablar(callbackHablar) {
    setTimeout(function () {
        console.log('Bla bla bla bla bla .......');
        callbackHablar();
    }, 1000);
}

function adios(nombre) {      
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(`Adios, ` + nombre); 
            resolve(nombre);

        }, 1500);
    });
}
console.log('iniciando el proceso ..........');
hola('John')
    .then((nombre) => { 
        return adios(nombre)
    })
    .then((nombre) => {
        console.log('Terminado Proceso.........');
    })
    .catch.error(error => {
        console.error('Ha habido un error')
        console.error(error)
    })

    