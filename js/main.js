let asientos = [];

const crearAsientos = () => {
  for (let i = 0; i < 8; i++) {
    asientos[i] = [];
    for (let j = 0; j < 9; j++) {
      asientos[i][j] = {
        "letra": String.fromCharCode(65 + j),
        "fila": 8 - i,
        "ocupado": false
      };
    }
  }
};

crearAsientos();
console.log(asientos);