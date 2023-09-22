const textoEscrito = document.getElementById('textoEscrito')
const Encriptar = document.getElementById('encriptarTexto')
const Desencriptar = document.getElementById('desEncriptarTexto')
const conetedor = document.getElementById('contenedor')


Encriptar.onclick = ()=>{
    let valorEscrito = textoEscrito.value
    const valorTexto = valorEscrito.toLowerCase()
    const resutado = document.getElementById('resultado')

    conetedor.classList.add('ocultar')

    if(valorEscrito === ""){
        conetedor.classList.remove('ocultar')
    }

    var textoEncriptado = valorTexto.replace(/e/img, "enter")
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes")
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai")
    var textoEncriptado = textoEncriptado.replace( /o/img, "ober")
    var textoEncriptado = textoEncriptado.replace( /u/img, "ufat")

    resutado.textContent = textoEncriptado;
    console.log(textoEncriptado)
}

Desencriptar.onclick = ()=>{
    let valorEscrito = textoEscrito.value
    const valorTexto = valorEscrito.toLowerCase()
    const resutado = document.getElementById('resultado')

    conetedor.classList.add('ocultar')

    if(valorEscrito === ""){
        conetedor.classList.remove('ocultar')
    }

    var textoDesencriptado = valorTexto.replace(/enter/img, "e")
    var textoDesencriptado = textoDesencriptado.replace(/imes/img, "i")
    var textoDesencriptado = textoDesencriptado.replace(/ai/img, "a")
    var textoDesencriptado = textoDesencriptado.replace( /ober/img, "o")
    var textoDesencriptado = textoDesencriptado.replace( /ufat/img, "u")

    resutado.textContent = textoDesencriptado;
    console.log(textoDesencriptado)
}