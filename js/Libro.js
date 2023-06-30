"use strict";
class Libro {
    // toString(): void{
    //     console.log(this.titulo+" con "+this.ISBN+" creado por "+this.autor+" tiene "+this.paginas);
    // }
    // He creado el ISBN en base al sistema de generación de EAN's: https://es.wikipedia.org/wiki/European_Article_Number
    generarISBN() {
        let codigoPais, editor, numero_articulo, digito_control;
        let sumaPares;
        let sumaImpares;
        let ISBN;
        codigoPais = (Math.floor(Math.random() * 1000)).toString();
        if (Number(codigoPais) < 100) {
            codigoPais = '00' + codigoPais;
        }
        console.log(codigoPais);
        editor = (Math.floor(Math.random() * 10000)).toString();
        numero_articulo = (Math.floor(Math.random() * 10000)).toString();
        // for (let i = digito_control.length-1; i >= 0 ; i--) {
        // }
    }
}
