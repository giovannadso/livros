class Livro {
    titulo:string;
    autor: string;
    ano: number;

    constructor(titulo, autor, ano) {
      this.titulo = titulo;
      this.autor = autor;
      this.ano = ano;
    }
  }

  class LivroCategoria extends Livro {
    categoria:string;
    
    constructor(titulo, autor, ano, categoria) {
      super(titulo, autor, ano);
      this.categoria = categoria;
    }
  
    exibirDetalhes() {
      console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.ano}, Categoria: ${this.categoria}`);
    }
  
    éAntigo() {
      return this.ano < 2000;
    }
  }
  
  const listaDeLivros = [
    new LivroCategoria("A Sombra do Vento", "Carlos Ruiz Zafón", 2001, "Ficção Científica"),
    new LivroCategoria("Orgulho e Preconceito", "Jane Austen", 1813, "Romance"),
    new LivroCategoria("O Nome do Vento", "Patrick Rothfuss", 2007, "Fantasia"),
  ];
  
  listaDeLivros.forEach((livro) => {
    livro.exibirDetalhes();
    if (livro.éAntigo()) {
      console.log("Este livro é antigo.");
    } else {
      console.log("Este livro não é antigo.");
    }
  });
  