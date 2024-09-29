"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UmaClasse = void 0;
class UmaClasse {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
    getNome() {
        return this.nome;
    }
    getIdade() {
        return this.idade;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setIdade(idade) {
        this.idade = idade;
    }
}
exports.UmaClasse = UmaClasse;
const objClass = new UmaClasse("Name", "Sobre", 2);
//# sourceMappingURL=uml.js.map