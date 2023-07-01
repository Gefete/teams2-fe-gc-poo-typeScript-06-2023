class Libro {
  protected ISBN: string;
  protected titulo: string;
  protected autor: string;
  protected n_pag: number;

  constructor(ISBN: string, titulo: string, autor: string, n_pag: number) {
    this.ISBN = ISBN;
    this.titulo = titulo;
    this.autor = autor;
    this.n_pag = n_pag;
  }

  getISBN(): string {
    return this.ISBN;
  }

  setISBN(ISBN: string) {
    this.ISBN = ISBN;
  }

  getTitulo(): string {
    return this.titulo;
  }

  setTitulo(titulo: string) {
    this.titulo = titulo;
  }

  getAutor(): string {
    return this.autor;
  }

  setAutor(autor: string) {
    this.autor = autor;
  }

  getN_pag(): number {
    return this.n_pag;
  }

  setN_pag(n_pag: number) {
    this.n_pag = n_pag;
  }
  
}
