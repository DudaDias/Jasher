function login(){
  
    let user = prompt("Informe o nome de usuário:");
    console.log(user);
 
    let senha = prompt("Informe sua senha:");
    console.log(senha);


    if(user == 'professor' && senha == 456) {

        console.log('Tudo certo!');
        alert(`lOGIN REALIZADO COM SUCESSO!`)
    }

    else if( user == 'aluno' && senha == 123) {

        console.log('Tudo certo!');
        alert(`lOGIN REALIZADO COM SUCESSO!`)
    }

    else{

        console.log("Deu ruimm!");
        alert(`lOGIN INVÁLIDO`);
    }
 }