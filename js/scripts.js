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
enlaces[0].classList.remove('navegacion__enlace');


//getElemntById se usaba antes 

const heading2 = document.getElementById('heading');