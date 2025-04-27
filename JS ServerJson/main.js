fetch("http://localhost:3333/products").then(response => response.json()).then(data => console.log(data))

fetch(`http://localhost:3333/products/${id}`).then(response => response.json()).then(data => console.log(data))