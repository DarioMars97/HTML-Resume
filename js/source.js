

const mainElements = Array.from(document.querySelectorAll(".main-container"));

const buttons = Array.from(document.querySelectorAll("button"));

buttons.forEach( button => {
    button.addEventListener('click', ()=>{
        mainElements.forEach(mainEl => {
            if(button.textContent.toLowerCase() === mainEl.id){
                if (Array.from(mainEl.classList).includes('hide')) {
                    mainEl.classList.remove('hide');
                }
            }else{
                if (Array.from(mainEl.classList).includes('hide')) {
                    
                }else{
                    mainEl.classList.add('hide');
                }
            }
        });
    })
});