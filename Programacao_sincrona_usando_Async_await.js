/*
Usar async await diminui a quantidade de codigo escrito 
porém o preço que se paga por isso é tornar o codigo bloqueante 
*/

function pegarUsuarios(){
  return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        resolve([
            {name:"Victor", lang:"JS"},
            {name:"Lima",lang:"C#"},
            {name:"Daniel", lang:"Java"}
        ])
     },3000)
  })
}

// a palavra async avisa que a função é assincrona 
async function principal(){
     // a palavra await manda a função esperar ate que a função pegar usuario seja concluida 
     // para depois ela exibir o console.log
     var usuarios = await pegarUsuarios();
     console.log(usuarios);
}

principal();

