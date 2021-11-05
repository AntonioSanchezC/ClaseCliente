aleatorio = (n) => {

numerosMostrar = Math.floor(Math.random()*(1,n))+1

return numerosMostrar

}

num=prompt("Inserte un numero")
num=parseInt(num)
console.log(aleatorio(num))

