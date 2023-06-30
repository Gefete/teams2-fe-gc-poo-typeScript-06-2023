"use strict";
class MainApp {
    crearEspectadores() {
        let espectadores = [];
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (let i = 0; i < 100; i++) {
            let random_name = "";
            let random_age = Math.floor(Math.random() * 99);
            let random_money = Math.floor(Math.random() * 50);
            let name_length = Math.floor(Math.random() * 15);
            random_name += characters.charAt(Math.floor(Math.random() * name_length));
            espectadores.push(new Espectador(random_name, random_age, random_money));
        }
        return espectadores;
    }
}
