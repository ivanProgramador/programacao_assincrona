/*
Promisses são dunções executadas conforme a condição 
em alguns casos vai ser preciso passar parametros para essas promisses,
seja apara passar mensagens de erro, avisos ao usuario 
ou direcionar o processamento da função  

a função: resolve() está ligada ao then() é a parte que deu certo executar
          então pode receber apenas um parametro "que ela recebe função eu já sei
          mas falando de parametro que serian variveis ela so recebe uma"
          agora se eu queiser passar mais de uma informação eu vou ter que criar 
          um objeto literal, usando a estrategia chave/valor para poder passar as 
          informações.

a função: reject() esta ligada ao catch() e somente a ele quando da errado ela executa
          função catch(), a função reject tambem so recebe um parametro e se eu quiser
          passar mais de um a estratégia é a mesma   
*/



function enviarEmail(corpo,para){
   
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            var deuErro = false;

            if(!deuErro){

                resolve({time:6 ,to:"ivan@teste.com"}) //passando um objeto para a resolve()

            }else{

                reject("fila cheia :( "); // passando uma mensagem para reject
            }

        },4000)
    })
   
       
}

//na função then eu passo o abjeto desestruturado em suas variveis
enviarEmail("email teste ",'ivan@teste.com').then(({time,to})=>{

    console.log(`
              tempo de envio: ${time} 
               ---------- 
               para:${to}`
             )
   

}).catch((erro)=>{

    console.log("Não foi possivel enviar : " + erro)
     
})