/*
Na programação assincrona um função não espera a outra terminar 
para iniciar a sua execução, isso siginifica que ela não tem um fluxo
bloqueante ou seja o seu codigo não para e espera a outra etapa começar.

Isso resolve um problema mas dependendo do contexto cria outro por exemplo: 

Nesse cadastro de usuário gravar os dados no banco e criar a hash de senha é mais 
rapido doque confirmar o e-mail, mas eu não posso gravar um usuário na base de dados 
sem confirmar o emial dele e sem que ele tenha uma hash de senha, muito menos fazer 
o upload da foto de um usuário que eu não conheço.

partindo desse principio a programação assincrona tem a oras certa de ser usada embora
ela tenha tenha suas vantagens nem todos os contextos são compativeis com ela. 

confirmar_email();
criar_hash_para_senha();
upload_de_foto();
gravar_dados();

oque pode ser feito ?

eu posso execuatr duas funções ao mesmo tempo no primeiro processo
enquanto eu confirmo o e-mial e ja vou criando a hash de senha, no segundo 
enquanto eu gravo os dados na base eu ja inicio o upload da foto.

demora menos e aproveita melhor o processador. ao inves de usar 4 porcesso eu só preciso de 2   


1 - confirmar_email(); 
1 - criar_hash_para_senha();

2 -grava na base de dados 
2 -upload_de_foto();


*/