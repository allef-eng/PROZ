let titulo = document.querySelector("h1");
let lista_nao_ordenada = document.querySelector("ul");
let link = document.querySelector("a")
let lista_ordenada = document.querySelector("ol")

titulo.innerText = "Primeira intereção com innerText"

lista_nao_ordenada.innerHTML = `

<li>Elemento 1</li>
<li>Elemento 2</li>
<li>Elemento 3</li>

`
link.innerText = "Acesse o site da PROZ"

lista_ordenada.innerHTML = `

<li><a href="https://facebook.com">  FACEBOOK  </a> </li>
<li><a href="https://google.com">    GOOGLE    </a> </li>
<li><a href="https://instagram.com"> INSTAGRAM </a> </li>

`