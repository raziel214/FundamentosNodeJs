async function hola(nombre,miCallback) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(`Hola, ` + nombre); 
            resolve(nombre);

        }, 1500);
    });

 }
 async function hablar(nombre) {
     return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Bla bla bla bla bla .......');
            resolve();
        }, 1000);
    })
}

async function adios(nombre) {      
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(`Adios, ` + nombre); 
            resolve(nombre);

        }, 1500);
    });
}
async function main() { 
    let nombre =await hola('John Fredy Quimbaya Orozco');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('terminamos el proceso.....');
}
console.log('empezamos el proceso.....');
main();