/*
Um erro de porcessamento ou no porprio copdigo pode travar o sistema 
então as pormisses são uma alternativa, para simular um problema 
eu criei a variavel deu erro.

Se ele for verdadeira a pormisse se torbna rejeitada 
e entrada na função catch pra tratar o erro.

Se a avrivel for falsa ela vai apra a função then() 
que mostra a mensagem a função then() ao é execuatada quando o processo
que chama ela é concluido se pór algum motivo não der certo 
ela chama a função catch vai tomar a alguma providencia ou 
orientar o computador para o porximo passo caso esse erro aconteça    


*/


function enviarEmail(corpo,para){
   
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            var deuErro = false;

            if(deuErro){

                resolve(); // promessa cumprida 

            }else{

                reject(); // promessa não cumprida 
            }

        },4000)
    })
   
       
}


enviarEmail("email teste ",'ivan@teste.com').then(()=>{
    console.log("Promessa cumprida ")
}).catch(()=>{
    console.log("Promessa rejeitada ")
     
})