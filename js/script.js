'use strict'

const fingerSize = document.querySelector('.size'),
      thickness = document.querySelector('.thickness'),
      btn  = document.querySelector('.button'),
      long = document.querySelector('.long');

console.log(fingerSize)

btn.addEventListener('click', () => {
    sumTotal(fingerSize, thickness, long)
})

function sumTotal (size, thickness, long){
    long.value = (+size.value + +thickness.value) * 3.14;
}