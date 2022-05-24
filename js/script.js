'use strict'

const fingerSize = document.querySelector('.size'),
      thickness = document.querySelector('.thickness'),
      btn  = document.querySelector('.button'),
      btnClear = document.querySelector('.button__clear'),
      long = document.querySelector('.long');

btn.addEventListener('click', () => {
    sumTotal(fingerSize, thickness, long);
})

function sumTotal (size, thickness, long){
    long.value = (+size.value + +thickness.value) * 3.14;
}

btnClear.addEventListener('click', () => {
    clearValues(fingerSize, thickness, long);
})

function clearValues (size, thickness, long){
    size.value = null;
    thickness.value = null;
    long.value = null;
}