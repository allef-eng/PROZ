// Criar elemento
let article = document.createElement("article")
// Manipular o elemento 
article.innerHTML = `
<h3>Burguer King</h3>
<p class="subtitulo">Hambuerguer para todos</p>
<div class="data"> 06/07/2022</div>
<p>Restaurante em consolação com comida por kilo no almoço e rodizio de pizzas à noite,
tudo 100% vegano. Vale muito a pena conhecer </p>
`
// Adicionar o elemento na página
let main = document.querySelector("main")
main.appendChild(article)