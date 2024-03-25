function pegarId(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(5);
        },1500)
    })
}

function buscarEmailNoBanco(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("victor@teste.com");
        },1500)
    })
}

function enviarEmail(corpo,para){


    return new Promise((resolve,reject)=>{
        var deuErro = false;

        if(!deuErro){
            resolve({time:6,to:"victor@teste.com"});
        }else{
            reject("fila cheia")
        }
    })
}

//a palavara asinc avisa que a função é assincrona 
//usando o await eu evito digitar o then() que depois precisa de um função de call back pra executar
// e retornar o resultado para a veriavel tudo isso fica resumid em uma palavra await

async function principal(){

    //espra a função pega id colocar o id na variavel id 
    var id = await pegarId();

    // espera a função de busca restornar o emial com base no id que veio da função
    //anterior 
    var email = await buscarEmailNoBanco(id);

    //executa a função de envio

    enviarEmail("Olá, como vai ?",email)
}