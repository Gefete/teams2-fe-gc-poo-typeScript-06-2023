// Interfaz Asiento para implementar en la clase Cine
// Para que los atributos de asientos puedan reconocerse
interface IAsiento {
    letra: string;
    fila: number;
    ocupado: boolean;
    persona:string;
}