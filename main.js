console.log("Hello, World!");

// Tipos de Varibles
let nombre = "Joel";
let edad = 25;
let esEstudiante = true;

// Var en Variables
var ciudad = "Madrid";
var pais = "España";
var codigoPostal = 28001;
var edad2= 30;
var es_Empleado = false;
// Constantes
const PI = 3.1416;

document.getElementById('nuevo').innerHTML = 'Hola Mundo';

//Funcion el cambiar el color del fondo
function cambiarColorFondo(){
    
    document.body.style.backgroundColor = 'lightblue';
}

//Funcion para pedir al usuario precio y cantidad y mostrar el total
function calcularTotal(){
    let precio = document.getElementById('precio').value;
    let cantidad = document.getElementById('cantidad').value;
    let total = parseFloat(precio) * parseFloat(cantidad);
    alert("El total a pagar es: " + total);
}