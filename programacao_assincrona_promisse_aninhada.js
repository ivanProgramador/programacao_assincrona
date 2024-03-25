/*
No caso abaixo eu preciso executar 3 etapas antes de enviar 
de fato o e-mail 
*/

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

//acima eu tenho  funções agora eu cou executa-las em sequencia usando pormessas aninhadas 

pegarId().then((id)=>{  //função 1

    buscarEmailNoBanco(id).then((email)=>{ // função 2

        enviarEmail("Olá, como vai ?", email).then(()=>{ //função 3

             console.log("E-mail enviado para: " + email+" com o id: "+id);

         }
        )
    })
})

/*
Nesse momento eu tenho 3 promisses aninhadas 
mas eu posso ter bem mais, porém existe um problema
que não pode ser visto agora porque a logica dessas 3 funções é simples 
e não exige muito código.

Fazer o aninhamento de promisses pode ajudar em alguns casos mas  
também pode fazer o desenvolvedor se perder no codigo,
e visualmente o código fica desorganizado.


*/