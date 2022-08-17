const myModule = (() => {
  "usar estricto";
  let h = document.getElementById("resultado"),
    i = document.getElementById("resultado"),
    j = document.getElementById("resultado"),
    k = (a) => 4 * a,
    l = (a) => a * a,
    m = (a, b, c) => a * b * c,
    n = (a, b) => (a * b) / 2,
    o = (a) => 2 * a,
    p = (a) => o(a) * Math.PI,
    q = (a) => a * a * Math.PI,
    a = document.querySelector("#btnPerimSquare"),
    b = document.querySelector("#btnAreaSquare"),
    c = document.querySelector("#btnPerimTriangle"),
    d = document.querySelector("#btnAreaTriangle"),
    e = document.querySelector("#btnDiamCircle"),
    f = document.querySelector("#btnPerimCircle"),
    g = document.querySelector("#btnAreaCircle");
  a.addEventListener("click", () => {
    let a = Number(document.getElementById("inputSide").value),
      b = `El per\xedmetro de cuadrado es: ${k(a)} cm`;
    h.innerText = b;
  }),
    b.addEventListener("click", () => {
      let a = Number(document.getElementById("inputSide").value),
        b = `El area de cuadrado es: ${l(a)} cm^2`;
      h.innerText = b;
    }),
    c.addEventListener("click", () => {
      let a = document.getElementById("inputSide1"),
        b = document.getElementById("inputSide2"),
        c = document.getElementById(" inputSide3");
      (a = Number(a.value)), (b = Number(b.value)), (c = Number(c.value));
      let d = `El per\xedmetro del triangulo es: ${m(a, b, c)} cm`;
      i.innerText = d;
    }),
    d.addEventListener("click", () => {
      let a = document.getElementById("inputBase"),
        b = document.getElementById("inputHeight");
      (a = Numero(a.valor)), (b = Numero(b.valor));
      let c = `El area del triangulo es: ${n(a, b)} cm^2 `;
      i.innerText = c;
    }),
    e.addEventListener("clic", () => {
      let a = Number(document.getElementById("side").value),
        b = `El di\xe1metro de circulo es: ${o(a)} cm`;
      j.innerText = b;
    }),
    f.addEventListener("click", () => {
      let a = Number(document.getElementById("side").value),
        b = `El per\xedmetro de circulo es: ${p(a)} cm`;
      j.innerText = b;
    }),
    g.addEventListener("click", () => {
      let a = Number(document.getElementById("side").value),
        b = `El area de circulo es: ${q(a)} cm^2`;
      j.innerText = b;
    });
})();
