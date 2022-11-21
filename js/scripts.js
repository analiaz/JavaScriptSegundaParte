// querySelector
//document habla de todo lo que esta en la etiqueta de html
const heading = document.querySelector('.header__texto h2'); // 0 o 1 elemento
console.log(heading);
heading.textContent = 'Nuevo Heading'; //modifica el texto del selector

//querySelectorALl
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces[0])
enlaces[0].textContent = 'nuevo texto para enlaces';
enlaces[0].classList.add('nueva-clase');
//enlaces[0].classList.remove('navegacion__enlace');


//getElemntById se usaba antes 
const heading2 = document.getElementById('heading');

//----------Generar un nuevo enlace---------------
const nuevoEnlace = document.createElement('A') // USAR MAYUSCULAS

//agregar el hredf
nuevoEnlace.href = 'nuevo_enlace.htm'
//agregar el texto
nuevoEnlace.textContent = 'nuevo enlace'

//agregar la clase
nuevoEnlace.classList.add('navegacion__enlace')

//agregar en el documento

 const navegacion = document.querySelector('.navegacion');
 navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace)


// Eventos

console.log(1);

window.addEventListener('load', function(){ //load espera a que el JS y los archivos que dependen de HTML esten listos
    console.log(32);
});

window.onload = function() {
    console.log(3)
}


document.addEventListener('DOMContentLoaded',function() { //Solo espera que se descarge el html, pero no espera el css o imagenes
    console.log(2)
})

window.onscroll = function() {
    console.log('scrolling...')
}