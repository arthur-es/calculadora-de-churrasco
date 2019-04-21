class Lista extends HTMLElement {
    constructor(nome, iconeLink) {
        super();
        this.icone = iconeLink;
        this.nome =  nome;
    }

    connectedCallback() {
        this.innerHTML = `
        <ul>
            <li>
                <span>
                    <img src="${this.icone}">
                <span>
                <p> ${this.nome} </p>
            </li>
        </ul>
        `;
    }
}

customElements.define("ul-churras", Lista);