function agregarHTTP(url) {
    return "http://" + url;
}

function agregarHTTPS(url) {
    return "https://" + url;
}

function procesar(urls, callback){
    const result = [];
    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        result.push(callback(url));
    }
    return result;
}

console.log(procesar(["google.com.ar", "digitalhouse.com.ar"], agregarHTTP));
console.log(procesar(["instagram.com", "pinterest.com"], agregarHTTPS));

// scope espacio donde vive una variable (se puede decir que es como una mamushka) bloke de llaves
// lo que esta declarado en el scope mas chico no influye en lo de afuero, pero lo que esta declarado afuera influye en el mas chiquito