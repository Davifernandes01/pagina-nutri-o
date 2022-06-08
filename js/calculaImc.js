let titulo =  document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


let pacientes = document.querySelectorAll(".paciente");



for(var i = 0; i < pacientes.length; i++)
{

    let paciente = pacientes[i];
    //console.log(pacientes[i]);

            
        let tdPeso = paciente.querySelector(".info-peso");
        let peso = tdPeso.textContent;


        let tdAltura = paciente.querySelector(".info-altura");
        let altura = tdAltura.textContent;

        let tdImc = paciente.querySelector(".info-imc");

        let pesoEhValido = validaPeso(peso); // true our false
        let alturaEhValida = validaAltura(altura);

        // || = operador "ou"
        // && = operador "e"
        if(!pesoEhValido)
        {
            console.log("peso inválido")
            pesoEhValido = false
            tdImc.textContent = "peso invalido"
            paciente.classList.add("paciente-invalido")
        }

                if(!alturaEhValida)
                {
                console.log("altura inválida") 
                alturaEhValida = false;
                tdImc.textContent = "altura invalida"
                paciente.classList.add("paciente-invalido")

                }

        if(alturaEhValida && pesoEhValido)
        {
            let imc = calculaImc(peso,altura);
            tdImc.textContent = imc;
        }

 }


    function validaPeso(peso)
    {
        if(peso >= 0 && peso <1000)
        {
            return true;
        }else
        {
            return false;
        }

    }


    function validaAltura(altura)
    {
        if(altura >= 0 && altura <= 3.0)
            {
                 return true;
            }
            else
            {
                return false;
            }
    }


 function calculaImc(peso,altura)
 {
    let imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);

 }


