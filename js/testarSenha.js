const avisos = document.getElementsByClassName("aviso")

function addAviso(index, hasCriteria = true){
  if(hasCriteria){
    avisos[index].classList.add("ativo")
  } else {
    if(avisos[index].classList.contains("ativo")){
      avisos[index].classList.remove("ativo")
    }
  }
}


document.getElementById("password").addEventListener("input", () =>{
  const senhaArray = document.getElementById("password").value.split("")
  const results = [
    ["numeros", false],
    ["letrasMin", false],
    ["letrasMai", false],
    ["carac especial", false],
  ]

  for(const carac in senhaArray){
    if(numeros.includes(senhaArray[carac])){
      results[0][1] = true
      continue
    }
    if(letrasMin.includes(senhaArray[carac])){
      results[1][1] = true
      continue
    }
    if(letrasMai.includes(senhaArray[carac])){
      results[2][1] = true
      continue
    }
    if(caracEspecial.includes(senhaArray[carac])){
      results[3][1] = true
      continue
    } 
  }

  if (senhaArray.length >= 8) {
    addAviso(4, true)
  } else{
    addAviso(4, false)
  }

  for(let i in results){
    addAviso(i, results[i][1])
  }

})

function togglePasswordVisibility(){
  const eye = document.getElementById("eye_password")
  const passwordInput = document.getElementById("password")

  if(eye.src.includes("images/eye_open.svg")){
    eye.src = "images/eye_closed.svg"
    passwordInput.type = "password"

  } else if(eye.src.includes("images/eye_closed.svg")){
    eye.src = "images/eye_open.svg"
    passwordInput.type = "text"
  }
}