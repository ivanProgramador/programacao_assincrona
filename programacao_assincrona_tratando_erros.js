
/*
O tratamento de erros traves deuma função de call back 
pode ser feito atraves de uma logica interna dentro da porporia função de call back 
no caso a função que eu estou enviando como terceiro parametro
possui uma variavel chamada erro.

na minha função de enviar emial se apor algum motivo uma falha acontece
ela recebe true, e quando a função de call back é chamada ela recebe a variavel 
deuErro como parametro 

e dentro dela existe a lógica para se executada em caso de erros 
no caso aqui eu apenas coloco um texto de aviso mais ação a ser tomada vai 
depender muito do contexto 


*/


function enviarEmail(corpo,para,callback){

    setTimeout(()=>{

        // logica 

        var deuErro = true;

        if(deuErro){

            callback("O envio do e-mail falhou");

        }else{
            callback();
        }


    },8000);
}



console.log('Inicio de envio de E-mail');

enviarEmail('teste','teste',(erro)=>{


    if(erro == undefined){
        console.log('Tudo, ok')
    }else{
        console.log('Erro: '+ erro);

    }
    
   
});




