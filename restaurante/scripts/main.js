$(document).ready(function() {
    $("#telefone").mask("(00) 00000-0000", {
        placeholder: "(12) 12345-1234"
    });

    $("form").validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: false
            }
        },
        messages: {
            nome: "Por favor, insira o seu nome",
            email: "Por favor, insira o seu e-mail",
            telefone: "Por favor, insira o seu telefone",
            mensagem: "Por favor, insira a sua mensagem"
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(e, val) {
            let camposIncorretos = val.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos.`);
            } else {
                alert("O formulário foi enviado com sucesso.")
            }
        }
    })
})
