let formChurras = document.getElementById('cc-churras-form');
let resultadoChurrasDiv = document.getElementById('resultadoChurras');

formChurras.addEventListener('submit', (event)=> {
    event.preventDefault();
    console.log("Preparando churrasco...");
    fetchItemsLista();
});     

function fetchItemsLista(){

    let checkBoxesDaPagina = pegaCheckboxesDaPagina(); 
    let nomeItemsMarcados = pegaNomeCheckboxMarcados(checkBoxesDaPagina);

    armazenaItemsDaLista(nomeItemsMarcados);

}

function pegaElementosForm(){
    let adultos = document.getElementById('pessoasInput').value;
    let criancas = document.getElementById('criancasInput').value;
}

function pegaCheckboxesDaPagina(){
    //carnes
    let carneAlcatra = document.getElementById('tp-alcatara');
    let carneSol = document.getElementById('tp-sol');
    let carneContra = document.getElementById('tp-contra');
    let carnePicanha = document.getElementById('tp-picanha');
    let carneMaminha = document.getElementById('tp-maminha');
    let carneCordeiro = document.getElementById('tp-cordeiro');
    //linguicas
    let lingFrango = document.getElementById('ling-frango');
    let lingToscana = document.getElementById('ling-toscana');
    //carnes de frango
    let carneFrangoCoracao = document.getElementById('cf-coracao');
    let carneFrangoSobrecoxa = document.getElementById('cf-sobrecoxa');
    //bebidas e outros
    let bebidaCerveja600 = document.getElementById('b-cerveja600');
    let bebidaCervejaLataLong = document.getElementById('b-cervja-lata-long');
    let bebidaRefrigerante = document.getElementById('b-refrigerante');
    let comidaPaes = document.getElementById('c-paes');
    let comidaFarofa = document.getElementById('c-farofa');
    let outrosCarvao = document.getElementById('o-carvao');

    return [
            carneAlcatra, carneSol, carneContra, carnePicanha, carneMaminha, carneCordeiro, 
            lingFrango, lingToscana,
            carneFrangoCoracao, carneFrangoSobrecoxa,
            bebidaCerveja600, bebidaCervejaLataLong, bebidaRefrigerante,
            comidaPaes, comidaFarofa,
            outrosCarvao
    ];
}

function pegaNomeCheckboxMarcados(items){
    let itemsChecados = [];
    items.forEach(item => {
        if(item.checked == true){
            //console.log("Item checado: " + item.name);
            itemsChecados.push(item.name);
        }
    });
    return itemsChecados;
}

function armazenaItemsDaLista(ItemsLista){
    if(localStorage.getItem('ItemsLista') == null){
        console.log("Criando JSON com os itens da lista...");
        let ItemsLista = [];
        ItemsLista.push(ItemsLista);
        localStorage.setItem('ItemsLista', JSON.stringify(ItemsLista));
    } else {
        console.log("Recuperando JSON do localStorage e adicionando itens...");
        let ItemsLista = JSON.parse(localStorage.getItem('ItemsLista'));
        ItemsLista.push(ItemsLista);
        localStorage.setItem('ItemsLista', JSON.stringify(ItemsLista));
    }
}

function fazPaginaComLista(){
    let pagListaChurrasco = window.open("pages/lista.html");
    //opened.document.write();
    //opened.print();
}

