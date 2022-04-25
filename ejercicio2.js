let contraseña = (str) => {
  let string = str
    .replaceAll("a", 4)
    .replaceAll("e", 3)
    .replaceAll("i", 1)
    .replaceAll("o", 0)
    .replaceAll(" ", "");

  return string;
};

contraseña("esta es una prueba");
