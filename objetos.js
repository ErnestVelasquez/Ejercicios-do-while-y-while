const alumno = {
    nombre: "Marvin",
    ingles: 7,
    programacion: 7.5,
    matematica: 8
};

function calcularMedia(alumno){
    const suma = alumno.ingles + alumno.programacion + alumno.matematica;
    const media = suma / 3;
    return media.toFixed(2);
}

const nombreAlumno = alumno.nombre;
const mediaCalificaciones = calcularMedia(alumno);

console.log(`El promedio de las calificaciones de ${nombreAlumno} es: ${mediaCalificaciones}`);