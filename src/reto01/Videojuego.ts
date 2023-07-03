class Videojuego implements IEntregable{
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
  
  entregar(): void {
    this.entregado = true;
  }
  devolver(): void {
    this.entregado = false;
  }
  isEntregado(): boolean {
    return this.entregado;
  }
  compareTo(a: Object): number {
    if(a instanceof Videojuego){
      if(this.horas_estimadas > a.getHorasEstimadas()) return -1;
      else if(this.horas_estimadas === a.getHorasEstimadas()) return 0;
      else return 1;
    }else{
      return -1;
    }
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
