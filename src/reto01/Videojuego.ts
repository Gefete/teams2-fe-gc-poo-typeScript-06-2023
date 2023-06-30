class Videojuego {
  protected titulo: string;
  protected horas_estimadas: number = 10;
  protected entregado: boolean = false;
  protected genero: string;
  protected compania: string;

  constructor(titulo: string, genero: string, compania: string) {
    this.titulo = titulo;
    this.genero = genero;
    this.compania = compania;
  }

  getTitulo(): string {
    return this.titulo;
  }
  getHorasEstimadas(): number {
    return this.horas_estimadas;
  }
  getGenero(): string {
    return this.genero;
  }
  getCompania(): string {
    return this.compania;
  }
  setTitulo(titulo: string): void {
    this.titulo = titulo;
  }
  setHorasEstimadas(horas_estimadas: number): void {
    this.horas_estimadas = horas_estimadas;
  }
  setGenero(genero: string): void {
    this.genero = genero;
  }
  setCompania(compania: string): void {
    this.compania = compania;
  }
  toString(): string {
    return `Título: ${this.titulo}, Horas estimadas: ${
      this.horas_estimadas
    }, Entregado: ${this.entregado ? "si" : "no"}, Género: ${this.genero}, Compañia: ${this.compania}`;
  }
}
