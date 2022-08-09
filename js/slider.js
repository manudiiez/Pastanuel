(function(){
    const sliders = [...document.querySelectorAll('.inicio__slider__body')];
    const arrowNext = document.querySelector('#next');
    const arrowBefore = document.querySelector('#before');
    let value;

    const slidersDish = [...document.querySelectorAll('.inicio__populardishes__group')];
    const arrowNextDish = document.querySelector('#nextdish');
    const arrowBeforeDish = document.querySelector('#beforedish');
    let valueDish;


    arrowNext.addEventListener('click', ()=>changePosition(1));
    
    arrowBefore.addEventListener('click', ()=>changePosition(-1));
    
    arrowNextDish.addEventListener('click', ()=>changePositionDish(1));

    arrowBeforeDish.addEventListener('click', ()=>changePositionDish(-1));


    function changePosition(change){
        const currentElement = Number(document.querySelector('.inicio__slider__body--show').dataset.id);

        value = currentElement;
        value+= change;
        
        console.log(sliders.length)
        if(value === 0 || value === sliders.length+1){
            value = value === 0 ? sliders.length : 1; 
        }

        sliders[currentElement-1].classList.toggle('inicio__slider__body--show');
        sliders[value-1].classList.toggle('inicio__slider__body--show');
    }

    function changePositionDish(change){
        const currentElement = Number(document.querySelector('.inicio__populardishes__group--show').dataset.id);

        valueDish = currentElement;
        valueDish+= change;
        
        console.log(slidersDish.length)
        if(valueDish === 0 || valueDish === slidersDish.length+1){
            valueDish = valueDish === 0 ? slidersDish.length : 1; 
        }

        slidersDish[currentElement-1].classList.toggle('inicio__populardishes__group--show');
        slidersDish[valueDish-1].classList.toggle('inicio__populardishes__group--show');
    }
})()