function contadorVocales (str) {
    let vocales = 'aeiouAEIOU';
    let contador = 0;

    for (let char of str) {
        if (vocales.includes(char)){
            contador++;
        }
    }
    return contador;
}

let texto = "Hola mundo";
let numeroDeVocales = contadorVocales(texto);
console.log(numeroDeVocales);