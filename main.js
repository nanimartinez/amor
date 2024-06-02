for (let i = 0; i < 1; i++) {
    let respuesta = prompt("Mario Paez ¿Quieres ser mi amor?");
    if (respuesta.toLowerCase() === "sí" || respuesta.toLowerCase() === "si") {
      alert("Yo también quiero ser tu amor");
      break; // Salimos del bucle si la respuesta es sí
    } else {
      i--; // Restamos uno al contador para que el bucle se repita
    }
  }