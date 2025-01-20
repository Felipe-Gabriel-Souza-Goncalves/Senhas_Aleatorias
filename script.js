const numeros = ["0","1","2","3","4","5","6","7","8","9"]
const letrasMin = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
const letrasMai = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const caracEspecial = ["!","#","&","*","-","_","$","%"]
const arrayDeArrays = [numeros, letrasMin, letrasMai, caracEspecial]


function generatePassword(){
    senhaPersonalizada = []

    var passLength = parseInt(document.getElementById("passwordLength").value)
    var caracteresPermitidos = []
    var senhaCriada = "";

    var caracteres = document.getElementsByClassName("caracteres")
    for(let i = 0; i< caracteres.length; i++){
        if(caracteres[i].checked == true){
            caracteresPermitidos.push(arrayDeArrays[i])
        }
    }
    if(caracteresPermitidos.length == 0){
        return
    }

    for(let i = 0; i<passLength; i++){
        var array;

        let arrayEscolhido = Math.floor(Math.random()*caracteresPermitidos.length)
        array = caracteresPermitidos[arrayEscolhido]
        let arrayIndex = Math.floor(Math.random()*caracteresPermitidos[arrayEscolhido].length)

        senhaCriada+= `${array[arrayIndex]}`

    }
    document.getElementById("senha").innerHTML = senhaCriada
}

var senhaPersonalizada = []
function customPasswordFormat(tipo){
    var titulo;
    switch(tipo){
        case "numero":
            senhaPersonalizada.push(numeros)
            titulo = "Número"
            break;
        case "letra min":
            senhaPersonalizada.push(letrasMin)
            titulo = "Letra Minúscula"
            break;
        case "letra mai":
            senhaPersonalizada.push(letrasMai)
            titulo = "Letra Maiúscula"
            break;
        case "carac espec":
            senhaPersonalizada.push(caracEspecial)
            titulo = "Caracter especial"
            break;
    }
    var caractere = document.createElement("span")
    caractere.innerHTML = titulo
    caractere.style.font = "10px Arial, bold"
    caractere.style.border = "1px solid black"
    caractere.style.padding = "3px"
    caractere.style.margin = "10px 5px"
    caractere.setAttribute("class", `botaoN`)
    
    document.getElementById("areaPersonalizada").appendChild(caractere)
}

function generateCustomPassword(){
    senhaCriada = ""
    for(let i =0; i<senhaPersonalizada.length; i++){
        var index = Math.floor(Math.random()*senhaPersonalizada[i].length)
        senhaCriada += (senhaPersonalizada[i])[index]
    }
    document.getElementById("senhaPersonalizada").innerHTML = senhaCriada

}

function removeCharacter(){
    senhaPersonalizada = []
    caractere = document.querySelectorAll(".botaoN")
    for(let i =caractere.length -1; i>=0 ; i--){
        caractere[i].remove()
    }
    senhaCriada = ""
    document.getElementById("senhaPersonalizada").innerHTML = senhaCriada

}

var ativo = false
function toggleCustom(){
    ativo = !ativo
    if(ativo){
        document.getElementById("btnEscolhas").style.display = "flex"
        document.getElementById("areaPersonalizada").style.display = "block"
        document.getElementById("opcoesValidas").style.display = "none"
    } else{
        document.getElementById("btnEscolhas").style.display = "none"
        document.getElementById("areaPersonalizada").style.display = "none"
        document.getElementById("opcoesValidas").style.display = "block"

    }
}

function copyToClipboard(tipo){
    aleatorio = document.getElementById("senha").innerHTML
    personalizado = document.getElementById("senhaPersonalizada").innerHTML
    texto = "";
    if(aleatorio != "" && tipo == "senhaAleatoria"){
        texto = aleatorio
    } else if(personalizado != "" && tipo == "senhaPersonalizada"){
        texto = personalizado
    } else{
        return
    }

    navigator.clipboard.writeText(texto)
    alert("Copiado para a área de transferencia")
}