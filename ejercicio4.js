let generarCodigo = (str) => {
  let arrStr = str.split(" ");
  return arrStr.map((string) => string.slice(0, 2).toLowerCase()).join("");
};

generarCodigo("juan david berbeo");
