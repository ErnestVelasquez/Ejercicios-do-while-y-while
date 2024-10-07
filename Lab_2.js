const notas = [7, 6.5, 8, 4, 9];

function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    let promedio = suma / notas.length;
    return promedio;
}

const nombre = "Ezequiel";

const promedioFinal = calcularPromedio(notas);

console.log("El promedio de las notas de " + nombre + " es: " + promedioFinal);
