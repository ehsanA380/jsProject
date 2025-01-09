const button = document.querySelector('button');
const popup= document.querySelector('.popup');
const closeicon = document.querySelector('.close-icon');
console.log(button);


button.addEventListener('click',()=>{
    popup.classList.add('open')
})
closeicon.addEventListener('click',()=>{
    popup.classList.remove('open')
})