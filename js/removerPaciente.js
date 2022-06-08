let Tabela = document.querySelector("#tabela-pacientes");

Tabela.addEventListener("dblclick",function(event){
    
    event.target.parentNode.classList.add("fadeOut")

    setTimeout(function(){
        if (event.target.tagName == 'TD')
        {
             event.target.parentNode.remove();
        }
    },500)
    
})



