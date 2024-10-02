"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
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
exports.Pessoa = Pessoa;
const objClass = new Pessoa("Name", "Sobre", 2);
console.log(objClass);
//# sourceMappingURL=uml.js.map