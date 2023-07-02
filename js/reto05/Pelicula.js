"use strict";
class Pelicula {
    // ====== CONSTRUCTOR =====
    constructor(director) {
        this.titulo = this.generarTitulo();
        this.duracion = this.generarDuracion();
        this.edad_minima = this.generarEdadMinima();
        this.director = director;
    }
    // ====== SETTERS =====
    setTitulo(newTitulo) {
        this.titulo = newTitulo;
    }
    setDuracion(newDuracion) {
        this.duracion = newDuracion;
    }
    setEdadMinima(newEdad) {
        this.edad_minima = newEdad;
    }
    setDirector(newDirector) {
        this.director = newDirector;
    }
    // ====== GETTERS =====
    getTitulo() {
        return this.titulo;
    }
    getDuracion() {
        return this.duracion;
    }
    getEdadMinima() {
        return this.edad_minima;
    }
    getDirector() {
        return this.director;
    }
    // ====== toString() =====
    toString() {
        console.log(this.titulo + " tiene una duración de " + this.duracion + " minutos, la edad mínima para el visionado son " +
            this.edad_minima + " años y el creador es " + this.director);
    }
    // ====== MÉTODOS =====
    // Con mi generador de nombres automático, creo el nombre de la película
    generarTitulo() {
        // Creo la variable que recogerá el título
        let titulo;
        // Creo una variable predefinida con 2 artículos. Ambos singulares.
        let titulo_articulos = ["La", "El"];
        // Creo otra variable con 40 sustantivos diferentes y en singular. Los 20 primeros femeninos, 20 últimos masculinos
        let titulo_sustantivos1 = ["Casa", "Inteligencia", "Orquesta", "Jirafa", "Mesa", "Lámpara", "Cara", "Moto", "Radio", "Foto",
            "Canción", "Emoción", "Televisión", "Conversión", "Sazón", "Razón", "Contención", "Claridad", "Verdad", "Sociedad",
            "Camión", "Recuerdo", "Rebaño", "Perro", "Cura", "Fantasma", "Mapa", "Sistema", "Mundo", "Techo",
            "Deseo", "Rodaje", "Maquillaje", "Homenaje", "Refrán", "Desdén", "Motín", "Camión", "Escalón", "Atún"];
        // Otra variable con 10 adjetivos diferentes predefinidos
        let titulo_adjetivos = ["Grande", "Pequeño", "Rápido", "Lento", "Fuerte", "Débil", "Caliente", "Frío", "Feliz", "Triste"];
        // 20 sustantivos más, 10 femeninos y 10 masculinos. Todos singulares
        let titulo_sustantivos2 = ["Ambulancia", "Ametralladora", "Antropóloga", "Araña", "Armonía", "Arpa", "Arquitectura", "Atracción", "Bendición", "Bicicleta",
            "Aceite", "Edificio", "Panteón", "Acero", "Ejército", "Papel", "Ajedrez", "Endoscopio", "Paquete", "Alcohol"];
        // Creo 3 variables para controlar y almacenar los random y poder hacer modificaciones. La última almacenará una string
        let articuloGenero;
        let sustantivos1Genero;
        let adjetivosGenero;
        let sustantivos2Genero;
        let preposicion;
        // Genero el random para el género del artículo del título
        articuloGenero = Math.round(Math.random());
        // Si es femenino, fuerzo a que busque un sustantivo femenino de la lista de sustantivos1
        if (articuloGenero == 0) {
            sustantivos1Genero = Math.floor(Math.random() * 19);
        }
        else {
            // Sino, busca entre los 20 masculinos del final
            sustantivos1Genero = Math.floor(Math.random() * ((titulo_sustantivos1.length - 1) - 20 + 1)) + 20;
        }
        adjetivosGenero = Math.floor(Math.random() * 9);
        // Genero el random del sustantivo 2
        sustantivos2Genero = Math.floor(Math.random() * 20);
        // Si es menor que 10, es femenino y la preopisición será "de la"
        if (sustantivos2Genero < 10) {
            preposicion = " de la ";
            // Sino, será "del"
        }
        else {
            preposicion = " del ";
        }
        // Asigno a título un valor de cada uno de los arrays anteriormente establecidos para generar un título aleatorio
        titulo = "" + titulo_articulos[articuloGenero] + " " + titulo_sustantivos1[sustantivos1Genero] + " " +
            titulo_adjetivos[adjetivosGenero] + preposicion + titulo_sustantivos2[sustantivos2Genero];
        return titulo;
    }
    // Genero la duración de la película
    generarDuracion() {
        let duracion;
        // Duración aleatoria entre 48 y 300 minutos
        duracion = Math.floor(Math.random() * (300 - 48 + 1) + 48);
        return duracion;
    }
    // También una edad
    generarEdadMinima() {
        // Comprendida entre los siguientes valores
        let edades = [0, 7, 12, 16, 18];
        let edad;
        edad = edades[Math.floor(Math.random() * edades.length - 1)];
        return edad;
    }
}
