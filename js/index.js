let formChurras = document.getElementById('cc-churras-form');
let resultadoChurrasDiv = document.getElementById('resultadoChurras');

formChurras.addEventListener('submit', (event)=> {
    event.preventDefault();
    console.log("Preparando churrasco...");
    fetchItensLista();
    fetchPessoas();
    fazPaginaComLista();
});     

function fetchItensLista(){

    let checkBoxesDaPagina = pegaCheckboxesDaPagina(); 
    let nomeItensMarcados = pegaNomeCheckboxMarcados(checkBoxesDaPagina);

    armazenaItensDaLista(nomeItensMarcados);

}

function fetchPessoas(){
    let qtdAdultos = pegaElementosForm("adultos");
    let qtdCriancas = pegaElementosForm("criancas");

    armazenaQtdPessoas(qtdAdultos, qtdCriancas);
}

function pegaElementosForm(stringQuem){

    if(stringQuem === 'adultos'){
        let adultos = document.getElementById('pessoasInput').value;
        console.log("Sao " + adultos + " adultos.")
        return adultos;

    } else if( stringQuem === 'criancas'){
        let criancas = document.getElementById('criancasInput').value;
        console.log("Sao " + criancas + " crianças.")
        return criancas;
    }
    return -1;
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

function pegaNomeCheckboxMarcados(itens){
    let itensChecados = [];
    itens.forEach(item => {
        if(item.checked == true){
            //console.log("Item checado: " + item.name);
            itensChecados.push(item.name);
        }
    });
    return itensChecados;
}

function armazenaQtdPessoas(qtdAdultos,qtdCriancas){

    let qtdPessoas = [qtdAdultos, qtdCriancas];

    if(localStorage.getItem('qtdPessoas') == null){
        console.log("Criando JSON com a qtdPessoas...");
        localStorage.setItem('qtdPessoas', JSON.stringify(qtdPessoas));
    } else {
        localStorage.removeItem("qtdPessoas");
        armazenaQtdPessoas(qtdAdultos, qtdCriancas);
    }
    debugger
}

function armazenaItensDaLista(ItensLista){
    if(localStorage.getItem('ItensLista') == null){
        console.log("Criando JSON com os itens da lista...");
        localStorage.setItem('ItensLista', JSON.stringify(ItensLista));
    } else {
        localStorage.removeItem("ItensLista");
        armazenaItensDaLista(ItensLista);
    }
}

function fazPaginaComLista(){
    let pagListaChurrasco = window.open("pages/lista.html");
    //opened.document.write();
}

