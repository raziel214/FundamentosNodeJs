function imAsincrono(nombre,mycallback) {
    
    setTimeout(function () {
        console.log('Hola' + nombre);
        mycallback();
        
        
    }, 1000);
    
}
function adios(nombre, mycallback) {

    setTimeout(function () {
        console.log('Adios' + nombre);
        mycallback();


    }, 1000);

}

console.log('......starting process');

imAsincrono('John', function () {
    adios('john', function () { 
        console.log('......stop process');
    })
});

