//Vamos criar uma variável e armazenar um valor nela
var registro = window.prompt("Entre com seu nome: ")

//Vamos chamar o localStorage. Ele vem do window. No caso vamos usar o setItem.

//window.localStorage.setItem("Nome", nome)

//Podemos escrever de uma maneira mais curta

localStorage.setItem("Nome", registro)

//Para recuperar o valor armazenado em uma key do localStorage, usamos o getItem:
alert(localStorage.getItem("Nome"))

//Se ao invés de apresentar a key em uma janela alert, quiser apresentar na página, podemos usar o document.write:
//document.write("O seu nome é : " + registro)

//Utilize o mesmo procedimento e crie variáveis para endereço, CPF, número de dependentes

var endereco = window.prompt("Entre com seu endereço: ")
localStorage.setItem("Endereço", endereco)
alert(localStorage.getItem("Endereço"))

var cpf = window.prompt("Entre com seu CPF: ")
localStorage.setItem("CPF", cpf)
alert(localStorage.getItem("CPF"))

var dep = window.prompt("Entre com o número de dependentes: ")
localStorage.setItem("Número de dependentes", dep)
alert(localStorage.getItem("Número de dependentes"))