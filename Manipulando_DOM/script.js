let body = document.querySelector("body");

let titulo = document.createElement("h1");

titulo.id = "titulo";
titulo.innerText = "Pizzaria";

let produto = document.createElement("div");

// Manipulando o elemento
produto.innerHTML = `
  <div>
    <h2>PIZZA de queijo classixa</h2>
    <img src="https://www.foodandwine.com/thmb/4qg95tjf0mgdHqez5OLLYc0PNT4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" alt="x-salada">
    <p>Pizza de queijo bem suculenta.</p>
    <p id="pizza queijo">R$ 32,90</p>
  </div>
`;

body.appendChild(titulo);
body.appendChild(produto)