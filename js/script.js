window.onload = function(){
   
    $("button").click(function(){
       
       valor = document.querySelector("input");
       if(!/\d{8}$/.test(valor.value)){
            limparDadosCep();   
            alert("Cep não informado ou valor digitado está incorreto. Verifique!");            
            valor.focus();
       }else{
            pesquisaCep(valor.value);
       }
    });

}

function limparDadosCep(){
    let dados = document.querySelectorAll("tbody>tr");        
    dados.forEach((vlr,index) =>{

        vlr.innerHTML ="";  

    });
}

function pesquisaCep(vlrCep){      
    url = "https://viacep.com.br/ws/"+vlrCep+"/json/";
    $.ajax({
        url : url,
        type: "GET",
        success: function(response){            
           
            let dados = document.querySelectorAll("tbody>tr");        
            dados.forEach((vlr,index) =>{
                vlr.style.color="red";
                $("tbody>tr").css("fontSize","17px");
                switch (index) {
                    case 0:
                        vlr.innerHTML = response.cep;
                        break;
                    case 1:
                        vlr.innerHTML = response.logradouro;
                        break;
                    case 2:
                        vlr.innerHTML = response.complemento=="" ? "---------" : response.complemento;
                        break;
                    case 3:
                        vlr.innerHTML = response.bairro;
                        break;
                    case 4:
                        vlr.innerHTML = response.localidade;
                        break;
                    case 5:
                        vlr.innerHTML = response.uf;
                        break;
                    case 6:                        
                        vlr.innerHTML = response.ibge;
                        break;                                            
                }
                                                                                                        
            });
                                                   
        }
    })    
}
