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


/*
Quando o async esta sendo usado não da pra usar somente o catch pra pegar o erro e tratar
pra isso tem uma estrutura chamada essa estrutura vai tenta executar tudo oque estiver dentro do try 
try{
    se por algum acaso qualquer linha falhar na execução ele vai apra o catch
}catch(error){

    console.log(error)
}  

como não existe um then() pra chamar o catch então a sequencia deve ser escrita dentro 
do bloco try 

*/

async function principal(){

    try{

        var id = await pegarId();
        
        var email = await buscarEmailNoBanco(id);

        enviarEmail("Olá, como vai ?",email)
        
    }catch(erro){

        console.log(erro)

    }
}