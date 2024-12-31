const numeros = ["0","1","2","3","4","5","6","7","8","9"]
const letrasMin = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
const letrasMai = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const caracEspecial = ["!","#","&","*","-","_","$","%"]
const arrayDeArrays = [numeros, letrasMin, letrasMai, caracEspecial]


function generatePassword(){
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
