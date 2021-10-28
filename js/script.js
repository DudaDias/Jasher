
var action = document.querySelector('input[type="submit"]')

action.onclick = function login(){
  
    var user = document.querySelector("#user");
    var userValue = user.value;
    var senha = document.querySelector("#senha");
    var senhaValue = senha.value;
    console.log(userValue);
    console.log(senhaValue);

    if(userValue == 'professor' && senhaValue == 456) {

        console.log('Tudo certo!');
        alert(`lOGIN REALIZADO COM SUCESSO!`)
    }

    else if( userValue == 'aluno' && senhaValue == 123) {

        console.log('Tudo certo!');
        alert(`lOGIN REALIZADO COM SUCESSO!`)
    }

    else{

        console.log("Deu ruimm!");
        alert(`lOGIN INVÁLIDO`);
    }
 }