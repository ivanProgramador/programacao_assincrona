/*
 O controle de fluxo pode ser feito atraves call backs 
 que são funções envioadas como parametro para dentro da função principal
 usando como exemplo o codigo de envio de e-mails
 
 versão 1 sem os call backs ele avisa ao cliente que o e-mial chgou antes de enviar 
 eu vou refazer ele abaixo para que ele espere o envio para avisar ao cliente. 
 ---------------------------------------------------------------------------------


 function enviarEmail(corpo,para){
    setTimeout(()=>{
        console.log(`
        Para: ${para}
        -----------------------------------
        ${corpo}
        -----------------------------------
        De: Ivan Rodrigues`
        );
    },8000);
}



console.log('Inicio de evnvio de E-mail');
enviarEmail('Seja bem vindo','Victor Lima');
console.log('Seu e-mail foi enviado deve chegar em minutos');
console.log('Tudo, OK');

-------------------------------------------------------------------------
*/

//nessa versão 2 eu digo quando eu quero executar o aviso 

function enviarEmail(corpo,para,callback){
    setTimeout(()=>{
        console.log(`
        Para: ${para}
        -----------------------------------
        ${corpo}
        -----------------------------------
        De: Ivan Rodrigues`
        );
        // essa função só sera executada depois do envio do e-mail 
        callback();
    },8000);
}



console.log('Inicio de envio de E-mail');
//abaixo eu envio no terceiro parametro a função que vai avisar do envio

enviarEmail('Seja bem vindo','Victor Lima',()=>{
    console.log('Seu e-mail foi enviado deve chegar em minutos');
    console.log('Tudo, OK');
});




