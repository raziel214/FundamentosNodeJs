const hola = (nombre, myCallback) => {
    setTimeout(() => {
        console.log(`Hola ${nombre}`)
        myCallback(nombre)
    }, 1500)
}

const hablar = (callbackHablar) => {
    setTimeout(() => {
        console.log('Blah blah blah...')
        callbackHablar()
    }, 1000)
}

const adios = (nombre, ultimoCallback) => {
    setTimeout(() => {
        console.log(`Adios ${nombre}`)
        ultimoCallback()
    }, 1000)
}

const conversacion = (nombre, veces, callbackTermino) => {
    if (veces == 0) {
        callbackTermino(nombre, () => {
            console.log('Proceso terminado.')
        })
        return
    }
    hablar(() => conversacion(nombre, --veces, callbackTermino))
}

console.log('Iniciando Conversación')
hola('Mich', (nombre) => conversacion(nombre, 4, adios))