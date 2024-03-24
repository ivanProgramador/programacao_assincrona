

/*
 A função enviarEmail() tem um tempo definido de 8 segundos para executar 
 mas os comandos console.log fora dessa função não tem.
 Em um cenário de programação sincrona o primeiro console.log 
 seria executado depois ele ia esperar 8 segundos para executar a função enviarEmail()
 E só depois os outros console.log seriam exibidos na tela.

 Mas como estamos em um cenario assincrono primiero o porcessador executa
 as funções que levam menos tempo e depois ele termina de excutar a mais 
 complexa que exige os 8 segundos, o probela ai e uqe o usuário vai
 receber que mensagem avisando do envio do e-mail sem ele ter sido enviado ainda 
 porque não existe uam sequencia pre-definida de execução.
 
 mas mesmo na porgramação assincrona tem opções que podem resolver isso 
 tornando sincrona a apsrte do código que ineteressa. 
 
 
*/
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



console.log('Inicio de envio de E-mail');
enviarEmail('Seja bem vindo','Victor Lima');
console.log('Seu e-mail foi enviado deve chegar em minutos');
console.log('Tudo, OK');