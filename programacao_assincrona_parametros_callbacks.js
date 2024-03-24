
/*
Partindo do principio de que funções de call backs são simplesmente
funções essa podem receber parametros tambem    

*/
function enviarEmail(corpo,para,callback){
    setTimeout(()=>{
        console.log(`
        Para: ${para}
        -----------------------------------
        ${corpo}
        -----------------------------------
        De: Ivan Rodrigues`
        );
  
        callback(10,5,'Ivan Rodrigues');
    },8000);
}



console.log('Inicio de envio de E-mail');


//aqui amel de passar uma função eu ainda passo 3 parametros pra ela 

enviarEmail('Seja bem vindo','Victor Lima',(amount,time,name)=>{

    console.log(`Dados do envio 
     Quantos e-mails foram enviados ${amount}
     -------------------------------------------
     Em quanto tempo: ${time}
     -------------------------------------------
     Quem enviou: ${name}
     `)
    console.log("Tudo, ok")
   
});




