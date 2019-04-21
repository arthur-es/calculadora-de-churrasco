let ItensLista = JSON.parse(localStorage.getItem('ItemsLista'));

let divChurrascao = document.getElementById("listaChurrascao");


ItensLista.forEach(item => {
    console.log("Item da vez: " + item);
    let itemNovo = new Lista(item, "../img/steak.png");
    divChurrascao.appendChild(itemNovo);
});


//this.print();

