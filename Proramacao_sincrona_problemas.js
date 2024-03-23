/*
Na programação sincrona uma função so começa a rodar 
depois que a outra termina a sincromia de inicio parece ser vantajosa
porém cada função envolvida na execução tem o seu porprio tempo para 
terminar de executar por exemplo: 

confirmar_email();       -> a conclusão dessa operação depende de servidores de email externos 
criar_hash_para_senha(); -> essa pode executada no servidor local 
upload_de_foto();        -> essa leva tempo para pegar a foto e salvar na pasta correta
gravar_dados();          -> essa depede do desempenho da maquina 

mas enquanto esse tempo somando não passa o cliente fica olhando para uma tela branca
e esperando o tempo que todas elas levam para executar o cadastro dele. 



*/