const input = document.querySelector('input');

input.addEventListener('input',(e)=>{
    const inputValue = e.target.value;
    // console.log(e.target.value);
   
    if(inputValue.length === 4){
        // const formattedValue = inputValue.substr(0,3);
        const formattedVAlue= `+(${inputValue.substr(0,3)}) - ${inputValue[inputValue.length-1]}`
        input.value=formattedVAlue;
    }
    else if(inputValue.length===9){
        input.value =inputValue.substr(2,3);
    }



    
    
})

    