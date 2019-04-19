let formChurras = document.getElementById('cc-churras-form');
let resultadoChurrasDiv = document.getElementById('resultadoChurras');
//console.log(formChurras);
formChurras.addEventListener('submit', (event)=> {
    event.preventDefault();
    console.log("Preparando churrasco...")
    pegaElementosForm();
    adicionaResultado();
});     

function pegaElementosForm(){
    let adultos = document.getElementById('pessoasInput').value;
    let criancas = document.getElementById('criancasInput').value;

    /* PEGA O NOME DOS CHECKBOXES */
    let carneAlcatra = document.getElementById('tp-alcatara').name;
    let carneSol = document.getElementById('tp-sol').name;
    let carneContra = document.getElementById('tp-contra').name;
    let carnePicanha = document.getElementById('tp-picanha').name;
    let carneMaminha = document.getElementById('tp-maminha').name;
    let carneCordeiro = document.getElementById('tp-cordeiro').name;

    //falta implementar logica, para checar se o checkbox está marcado, e se estive entao pegar o nome do checkbox marcado e 
    //adicionar essa string ao array dentro de um objeto chamado Churrasco
}

function adicionaResultado(){

}

