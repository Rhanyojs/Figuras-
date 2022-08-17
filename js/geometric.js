const myModule = (() => {
  "use strict";

  //Area y perimetro de cuadrado
  const valueResult = document.getElementById("result");
  const valueResult01 = document.getElementById("result");
  const valueResult02 = document.getElementById("result");

  /*Cuadrado*/
  const perimSquare = (side) => side * 4;
  const areaSquare = (side) => side * side;

  /*Triangulo*/
  const perimTriangle = (side1, side2, side3) => side1 * side2 * side3;
  const areaTriangle = (base, height) => (base * height) / 2;

  /* Circulo*/
  const diamcircle = (side) => side * 2;
  const perimcircle = (saide) => diamcircle(saide) * Math.PI;
  const areacircle = (saide) => saide * saide * Math.PI;

  const btnPerimSquare = document.querySelector("#btnPerimSquare"),
    btnAreaSquare = document.querySelector("#btnAreaSquare"),
    btnPerimTriangle = document.querySelector("#btnPerimTriangle"),
    btnAreaTriangle = document.querySelector("#btnAreaTriangle"),
    btnDiamCircle = document.querySelector("#btnDiamCircle"),
    btnPerimCircle = document.querySelector("#btnPerimCircle"),
    btnAreaCircle = document.querySelector("#btnAreaCircle");

  btnPerimSquare.addEventListener("click", () => {
    let inputSide = document.getElementById("inputSide");
    let value = Number(inputSide.value);

    const result = `El perímetro de cuadrado es: ${perimSquare(value)} cm`;
    valueResult.innerText = result;
  });

  btnAreaSquare.addEventListener("click", () => {
    let inputSide = document.getElementById("inputSide");
    let value = Number(inputSide.value);

    const result = `El area de cuadrado es: ${areaSquare(value)} cm^2`;
    valueResult.innerText = result;
  });

  btnPerimTriangle.addEventListener("click", () => {
    let inputSide1 = document.getElementById("inputSide1");
    let inputSide2 = document.getElementById("inputSide2");
    let inputSide3 = document.getElementById("inputSide3");
    inputSide1 = Number(inputSide1.value);
    inputSide2 = Number(inputSide2.value);
    inputSide3 = Number(inputSide3.value);

    const result = `El perímetro del triangulo es: ${perimTriangle(
      inputSide1,
      inputSide2,
      inputSide3
    )} cm`;
    valueResult01.innerText = result;
  });

  btnAreaTriangle.addEventListener("click", () => {
    let base = document.getElementById("inputBase");
    let height = document.getElementById("inputHeight");
    base = Number(base.value);
    height = Number(height.value);

    const result = `El area  del triangulo es: ${areaTriangle(
      base,
      height
    )} cm^2 `;
    valueResult01.innerText = result;
  });

  btnDiamCircle.addEventListener("click", () => {
    let side = document.getElementById("side");
    let value = Number(side.value);

    const result = `El diámetro de circulo es: ${diamcircle(value)} cm`;
    valueResult02.innerText = result;
  });

  btnPerimCircle.addEventListener("click", () => {
    let side = document.getElementById("side");
    let value = Number(side.value);

    const result = `El perímetro de circulo es: ${perimcircle(value)} cm`;
    valueResult02.innerText = result;
  });

  btnAreaCircle.addEventListener("click", () => {
    let side = document.getElementById("side");
    let value = Number(side.value);

    const result = `El area de circulo es: ${areacircle(value)} cm^2`;
    valueResult02.innerText = result;
  });

  //return {
  //cpq: calculatePerimSquare,
  //caq: calculateAreaSquare,
  //};
})();
