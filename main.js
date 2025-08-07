let contadorLikes1 = 0;
let contadorLikes2 = 0;
let contadorLikes3 = 0;

let btnLike1 = document.getElementById("btn-like1");
let btnLike2 = document.getElementById("btn-like2");
let btnLike3 = document.getElementById("btn-like3");

btnLike1.addEventListener("click", () => {
    contadorLikes1++;
    document.querySelector("#contador-likes-1").textContent = `${contadorLikes1} Me Gusta!`;
})