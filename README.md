# primeraEntrega1Zambrano

Hola Alexis, ¿cómo estas?
Realicé un quiz donde el usuario debe seleccionar la respuesta correcta de verbos irregulares en pasado del idiamo inglés.
Me costó un montón para hacer que las selecciones sean aleatorias, aprendí (mas o menos) a usar math.random, me ayude mucho con freecodecamp y youtube.
Pero no logré hacer la sumatoria de las respuestas correctas obtenidas por el usuario (socore)
Intenté creando una función y un ciclo for, pero no lo logré.

Ejemplo:

function score(){
    let correctAnswere
    for (let i = 0; i < 10; i++) {
        if (usuario[i] === correctas[i]) {
          correctAnswere++;
        }
    }
    alert(`your score is "${score}". Keep practicing!`);
    return correctAnswere;
}

