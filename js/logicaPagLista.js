let buttonImprimirLista = document.getElementById('imprimirLista');
buttonImprimirLista.addEventListener('click', (event)=> {
    event.preventDefault();
    console.log("Imprimindo lista....");
    escondeBotao();
    this.print();
}); 

function escondeBotao(){
    buttonImprimirLista.classList.add('botaoEscondido');
    debugger
    setInterval(function(){ 
        mostraBotao();
    }, 3000);
}

function mostraBotao() {
    buttonImprimirLista.classList.remove('botaoEscondido');
}

let ItensLista = JSON.parse(localStorage.getItem('ItemsLista'));

let divChurrascao = document.getElementById("listaChurrascao");

ItensLista.forEach(item => {
    console.log("Item da vez: " + item);
    let itemNovo = new Lista(item, "../img/steak.png");
    divChurrascao.appendChild(itemNovo);
});


