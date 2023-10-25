var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }
    return Livro;
}());
var LivroCategoria = /** @class */ (function (_super) {
    __extends(LivroCategoria, _super);
    function LivroCategoria(titulo, autor, ano, categoria) {
        var _this = _super.call(this, titulo, autor, ano) || this;
        _this.categoria = categoria;
        return _this;
    }
    LivroCategoria.prototype.exibirDetalhes = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo, ", Autor: ").concat(this.autor, ", Ano: ").concat(this.ano, ", Categoria: ").concat(this.categoria));
    };
    LivroCategoria.prototype.éAntigo = function () {
        return this.ano < 2000;
    };
    return LivroCategoria;
}(Livro));
var listaDeLivros = [
    new LivroCategoria("A Sombra do Vento", "Carlos Ruiz Zafón", 2001, "Ficção Científica"),
    new LivroCategoria("Orgulho e Preconceito", "Jane Austen", 1813, "Romance"),
    new LivroCategoria("O Nome do Vento", "Patrick Rothfuss", 2007, "Fantasia"),
];
listaDeLivros.forEach(function (livro) {
    livro.exibirDetalhes();
    if (livro.éAntigo()) {
        console.log("Este livro é antigo.");
    }
    else {
        console.log("Este livro não é antigo.");
    }
});
