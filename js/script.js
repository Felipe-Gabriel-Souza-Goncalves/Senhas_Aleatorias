function updateCarac(){
    document.getElementById('numCarac').innerText = document.getElementById('passwordLength').value + ' caracteres'
}

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
        document.getElementById("senha").innerHTML = "Selecione as caixas de caracteres desejados!"
        document.getElementById("senha").style.color = "lightcoral"
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
    document.getElementById("senha").style.color = "black"
    document.getElementById("senha").style.fontStyle = "normal"
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
    caractere.classList.add(`botaoN`)
    
    document.getElementById("areaPersonalizada").appendChild(caractere)
}

function generateCustomPassword(){
    senhaCriada = ""
    for(let i =0; i<senhaPersonalizada.length; i++){
        var index = Math.floor(Math.random()*senhaPersonalizada[i].length)
        senhaCriada += (senhaPersonalizada[i])[index]
    }
    document.getElementById("senha").innerHTML = senhaCriada
    document.getElementById("senha").style.color = "black"
    document.getElementById("senha").style.fontStyle = "normal"
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
        document.getElementById("areaPersonalizada").style.display = "flex"
        document.getElementById("opcoesValidas").style.display = "none"
    } else{
        document.getElementById("btnEscolhas").style.display = "none"
        document.getElementById("areaPersonalizada").style.display = "none"
        document.getElementById("opcoesValidas").style.display = "block"

    }
}

function copyToClipboard(tipo){
    const aleatorio = document.getElementById("senha").innerHTML

    let texto = "";
    if(aleatorio != "Selecione as caixas de caracteres desejados!" && tipo == "senhaAleatoria"){
        texto = aleatorio
    } else if(personalizado != "" && tipo == "senhaPersonalizada"){
        texto = personalizado
    } else{
        return
    }

    navigator.clipboard.writeText(texto)
    alert("Copiado para a área de transferencia")
}