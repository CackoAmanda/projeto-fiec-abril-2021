function validar() {
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var data = document.getElementById("data").value;
    var sexo = document.getElementById("sexo").value;
    var email = document.getElementById("email").value;
    var celular = document.getElementById("celular").value;
    var nivel = document.getElementById("nivel").value;
    var media = document.getElementById("media").value;
    var botao = document.getElementById("botao").addEventListener("click", validar);

    if (nome == "", cpf == "", data == "", sexo == "", email == "", celular == "", nivel == "", media == "") {
        alert ("Todos os campos devem ser preenchidos")
    }
}

//document.getElementById("").style.borderColor = "red";
