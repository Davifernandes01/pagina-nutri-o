let botaoAdiciona = document.querySelector("#buscar-pacientes")


botaoAdiciona.addEventListener("click", function()
{
   let xhr = new XMLHttpRequest();
    
   xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes")

   xhr.addEventListener("load", function()
   {

       
   
    if(xhr.status == 200)
    {
        
       let resposta = xhr.responseText;
       let pacientes = JSON.parse(resposta)
       
       pacientes.forEach(function(paciente)
        {
            adicionaPacienteNaTabela(paciente)
        })
    }
        else
            {
                
                console.log(xhr.status);
                console.log(xhr.responseText);

                let erroAjax = document.querySelector("#erro-ajax")
                console.log(erroAjax)
            
                erroAjax.classList.remove("invisivel2")


            }
           
       
   }) 

    xhr.send();

})