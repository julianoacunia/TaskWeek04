// 1 VARIABLES Y OPERADORES 
// a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
var num1 = 2
var num2 = 2
var result = num1 + num2
console.log(result)

// b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
var name = 'Juliano'
var lastName = 'Acuña'
var respuesta = name.concat(lastName)
console.log(respuesta)

// c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado la suma una 3er variable (utilizar length).
var name = 'Juliano'
var lastName = 'Acuña'
var respuesta = name.length + lastName.length
console.log(respuesta)

// 2 STRINGS
// a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
var name = 'juliano jair acuña'
console.log(name.toUpperCase())

// b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
var name = 'Juliano Acuña'
console.log(name.substring( 0,5))

