const button = document.querySelector('button');
const popup= document.querySelector('.popup');
const closeicon = document.querySelector('.close-icon');
const popupContainer = document.querySelector('.popup-container');
console.log(button);


button.addEventListener('click',(e)=>{
    popup.classList.add('open')
    popup.classList.remove('close');
    popupContainer.classList.remove('close-popup-container')
    
    e.stopPropagation();
})
closeicon.addEventListener('click',(e)=>{
    popup.classList.remove('open');
    popup.classList.add('close');
    popupContainer.classList.add('close-popup-container')
})

popup.addEventListener('click',(e)=>{
    event.stopPropagation();

})


popupContainer.addEventListener('click',()=>{
    popup.classList.remove('open');
    popup.classList.add('close');
    console.log('hi');
    popupContainer.classList.add('close-popup-container')
    
})