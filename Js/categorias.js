const categoriesholder = document.getElementById('pizzas')
let categories = ['MUZZA', 'SIMPLES', 'GOURMET', 'SUPER GUSTOS']
categories.forEach(categoria => {
    categoriesholder.innerHTML += `<li><a href="#" onclick='filterbyProduct(1)'>${categoria}</a></li>`
})

/*const categoriesholder = document.getElementById('pizzasChicas')
let categories = ['MUZZA', 'SIMPLES', 'GOURMET', 'SUPER GUSTOS']
categories.forEach(categoria => {
    categoriesholder.innerHTML += `<li><a href="#" onclick='filterbyProduct(1)'>${categoria}</a></li>`
})*/

/*const categoriesholder = document.getElementById('empanadas')
let categorie = ['1', '2', '3', 'holi']
categorie.forEach(category => {
    categoriesholder.innerHTML += `<li><a href="#" onclick='filterbyProduct(1)'>${category}</a></li>`
})*/
