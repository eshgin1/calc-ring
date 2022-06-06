'use strict'

const fingerSize = document.querySelector('.size'),
      thickness = document.querySelector('.thickness'),
      btn  = document.querySelector('.button'),
      btnClear = document.querySelectorAll('.button__clear'),
      long = document.querySelector('.long'),
    
      calcName = document.querySelector('.calc'),
      calcTitle = document.querySelectorAll('.calc__title'),
      
      ring = document.querySelector('.ring'),
      markup = document.querySelector('.markup'),

      amout = document.querySelector('.amout'),
      radius = document.querySelector('.radius'),
      btnMarkup = document.querySelector('.button__markup'),
      markupRing = document.querySelector('.markup-ring');

console.log(btnClear)
btn.addEventListener('click', () => {
    sumTotal(fingerSize, thickness, long);
    
})

function sumTotal (size, thickness, long){
    long.value = (+size.value + +thickness.value) * 3.14;
}

btnClear.forEach(e => {
    e.addEventListener('click', () => {
        clearValues(fingerSize, thickness, long);
        clearValuesMarkup();
    })
})

// btnClear.addEventListener('click', () => {
//     clearValues(fingerSize, thickness, long);
// })

function clearValues (size, thickness, long){
    size.value = null;
    thickness.value = null;
    long.value = null;
}

calcName.addEventListener('click', (event) => {
    
    if(event.target.textContent === 'Разметка кольца'){
        ring.style.display = 'none';
        markup.style.display = 'block';
        
    }
    if(event.target.textContent === 'Кольцо'){
        ring.style.display = 'block';
        markup.style.display = 'none';
    }
    
})



for(let i=0; i<calcTitle.length; i++){
    calcTitle[i].addEventListener('click', (event) => {
        if(event.target.textContent === 'Разметка кольца'){
            calcTitle[1].classList.add('calc__title_active');
            calcTitle[0].classList.remove('calc__title_active');
        }
        if(event.target.textContent === 'Кольцо'){
            calcTitle[1].classList.remove('calc__title_active');
            calcTitle[0].classList.add('calc__title_active');
        }
    })
}


btnMarkup.addEventListener('click', () => {
    switch(+amout.value){
        case 3:
            markupRing.value = radius.value * 1.7321;
            break;
        case 4:
            markupRing.value = radius.value * 1.4142;
            break;
        case 5:
            markupRing.value = radius.value * 1.1756;
            break;
        case 6:
            markupRing.value = radius.value * 1.0000;
            break;
        case 7:
            markupRing.value = radius.value * 0.8678;
            break;
        case 8:
            markupRing.value = radius.value * 0.7654;
            break;
        case 9:
            markupRing.value = radius.value * 0.6840;
            break;
        case 10:
            markupRing.value = radius.value * 0.6180;
            break;
        case 11:
            markupRing.value = radius.value * 0.5635;
            break;
        case 12:
            markupRing.value = radius.value * 0.5174;
            break;
        case 13:
            markupRing.value = radius.value * 0.4786;
            break;
        case 14:
            markupRing.value = radius.value * 0.4450;
            break;
        case 15:
            markupRing.value = radius.value * 0.4158;
            break;
        case 16:
            markupRing.value = radius.value * 0.3902;
            break;
        case 17:
            markupRing.value = radius.value * 0.3676;
            break;
        case 18:
            markupRing.value = radius.value * 0.3473;
            break;
        case 19:
            markupRing.value = radius.value * 0.3292;
            break;
        case 20:
            markupRing.value = radius.value * 0.3129;
            break;
        case 21:
            markupRing.value = radius.value * 0.2980;
            break;
        case 22:
            markupRing.value = radius.value * 0.2845;
            break;
        case 23:
            markupRing.value = radius.value * 0.2723;
            break;
        case 24:
            markupRing.value = radius.value * 0.2611;
            break;
        case 25:
            markupRing.value = radius.value * 0.2507;
            break;
        case 26:
            markupRing.value = radius.value * 0.2411;
            break;
        case 27:
            markupRing.value = radius.value * 0.2321;
            break;
        case 28:
            markupRing.value = radius.value * 0.2240;
            break;
        case 29:
            markupRing.value = radius.value * 0.2162;
            break;
        case 30:
            markupRing.value = radius.value * 0.2091;
            break;
        default:
            alert('Это не возможно!')
    }
})

function clearValuesMarkup () {
    amout.value = null;
    radius.value = null;
    markupRing.value = null;
}