const primeiro = document.querySelector('ul li.destaque')
console.log("Item destaque: ", primeiro.textContent)

const todos = document.querySelectorAll('.lista .item')
todos.forEach(item => console.log("Item: ", item.textContent))