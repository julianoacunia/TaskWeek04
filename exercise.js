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
var resultName = name.substring(0,5)
console.log(resultName)

// c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
var name = 'Juliano Acuña'
var resultName = name.substring(10,13)
console.log(resultName)

// d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
var name = 'juliano acuña'
var resultName = name.substring(0,1).toUpperCase() + name.substring(1,13).toLowerCase()
console.log(resultName)

// e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
var name = 'Juliano Acuña'
var resultName = name.indexOf(" ")
console.log(resultName)

//Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
var name = 'juliano acuña'
var resultName = name.substring(0,1).toUpperCase() + name.substring(1,8).toLowerCase() + name.substring(8,9).toUpperCase() + name.substring(9,13).toLowerCase()
console.log(resultName)

// 3 ARRAYS
// a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)
var array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log(array[4],array[10])

// b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
var array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log(array.sort())

// c) Agregar un elemento al principio y al final del array (utilizar unshift y push).
var array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log(array.unshift("Principio"))
console.log(array)
console.log(array.push("Final"))
console.log(array)

// d) Quitar un elemento del principio y del final del array (utilizar shift y pop)
var array = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log(array.shift())
console.log(array.pop())