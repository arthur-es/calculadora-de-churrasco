let buttonImprimirLista = document.getElementById('imprimirLista');
buttonImprimirLista.addEventListener('click', (event)=> {
    event.preventDefault();
    console.log("Imprimindo lista....");
    escondeBotao();
    this.print();
}); 

function escondeBotao(){
    buttonImprimirLista.classList.add('botaoEscondido');
    setInterval(function(){ 
        mostraBotao();
    }, 3000);
}

function mostraBotao() {
    buttonImprimirLista.classList.remove('botaoEscondido');
}

let ItensLista = JSON.parse(localStorage.getItem('ItensLista'));
let QtdPessoas = JSON.parse(localStorage.getItem('qtdPessoas'));

let divChurrascao = document.getElementById("listaChurrascao");
let divAviso = document.getElementById("divAviso");

ItensLista.forEach(item => {
    console.log("Item da vez: " + item);
    let itemNovo = new Lista(item, "../img/check-box-empty.png");
    divChurrascao.appendChild(itemNovo);
});

let pAvisoQtdPessoas = document.createElement('p');
pAvisoQtdPessoas.setAttribute('class', 'pAvisoQtdPessoas');
pAvisoQtdPessoas.textContent = "*Esse churrasco foi planejado levando em consideração a presença de " + QtdPessoas[0] 
                                + " adultos e " + QtdPessoas[1] + " crianças.";
divAviso.appendChild(pAvisoQtdPessoas);
    