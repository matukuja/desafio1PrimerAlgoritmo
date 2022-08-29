//presentación del algoritmo 1
alert("Atención, va a comenzar el algoritmo N°1" + "\n" + "Explicación: El usuario deberá ingresar palabras y, cuando decida finalizar, el algoritmo mostrará todas las palabras ingresadas con su orden correspondiente.")
    //declaración e inicialización de variables a utilizar en algoritmo 1
let contadorCantidadPalabras = 0
let acumuladorCadenaResultado = "Ingresos del usuario:"
    //comienzo del algoritmo
let ingresoUsuario = prompt("Ingrese una palabra por favor (Escriba 'FIN' para finalizar)")
while (ingresoUsuario.toUpperCase() != "FIN") {
    contadorCantidadPalabras = contadorCantidadPalabras + 1
    if (ingresoUsuario == "") {
        ingresoUsuario = "El usuario no ingresó nada en esta iteración"
    }
    const CADENA_ACTUAL = "\n" + "Ingreso N° " + contadorCantidadPalabras + ": " + ingresoUsuario
    acumuladorCadenaResultado = acumuladorCadenaResultado + CADENA_ACTUAL
    ingresoUsuario = prompt("Ingrese una palabra por favor (Escriba 'FIN' para finalizar)")
}
if (contadorCantidadPalabras > 0) {
    alert(acumuladorCadenaResultado)
} else {
    alert("El usuario no ingresó nada")
}


//presentación del algoritmo 2
alert("Atención, va a comenzar el algoritmo N°2" + "\n" + "Explicación: El usuario deberá ingresar, en primer lugar, cuantas iteraciones quiere hacer del algoritmo. En cada iteración, el usuario deberá ingresar dos números que se sumaran, y luego un tercer número que se comparará con la suma de los otros dos.")
    //comienzo del algoritmo
const NUMERO_REPETICIONES = parseInt(prompt("Ingresá el número de iteraciones que va a realizar el algoritmo"))
for (let i = 1; i <= NUMERO_REPETICIONES; i++) {
    const NUMERO_UNO = parseInt(prompt("Ingresá el primer numero a sumar"))
    const NUMERO_DOS = parseInt(prompt("Ingresá el segundo numero a sumar"))
    const SUMA_NUMEROS = NUMERO_UNO + NUMERO_DOS
    const NUMERO_TRES = parseInt(prompt("Ingresá el numero contra el que se va a comparar la suma de los dos anteriores"))
    let resultadoComparacion = ""
    if (SUMA_NUMEROS > NUMERO_TRES) {
        resultadoComparacion = "mayor"
    } else if (SUMA_NUMEROS == NUMERO_TRES) {
        resultadoComparacion = "igual"
    } else if (SUMA_NUMEROS < NUMERO_TRES) {
        resultadoComparacion = "menor"
    }
    const RESULTADO_FINAL_ITERACION = "Iteración N°: " + i + "\n" + "Primer número ingresado :" + NUMERO_UNO + "\n" + "Segundo número ingresado:" + NUMERO_DOS + "\n" + "Suma de los numeros ingresados: " + SUMA_NUMEROS + "\n" + "Tercer número ingresado: " + NUMERO_TRES + "\n" + "Resultado: La suma de los dos primeros números ingresados es " + resultadoComparacion + " que el tercer número ingresado por el usuario"
    alert(RESULTADO_FINAL_ITERACION)
}