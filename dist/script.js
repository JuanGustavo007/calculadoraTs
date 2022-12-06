"use strict";
const selecionarNumero = document.querySelectorAll(".numero");
const selecionarInpu = document.querySelector("input");
selecionarNumero.forEach((numero) => {
    if (numero instanceof HTMLElement) {
        numero.addEventListener("click", (e) => {
            numero.classList.add("mudar");
            setTimeout(() => {
                numero.classList.remove("mudar");
            });
            const valor = numero.innerText;
            if (selecionarInpu instanceof HTMLInputElement) {
                selecionarInpu.value += valor;
            }
            console.log(valor);
        });
        const valor = numero.innerText;
        console.log(valor);
    }
});
const calcular = document.querySelector(".calcular");
calcular === null || calcular === void 0 ? void 0 : calcular.addEventListener("click", () => {
    if (selecionarInpu instanceof HTMLInputElement) {
        if (selecionarInpu.value.includes("-")) {
            const valorDoVisor = selecionarInpu === null || selecionarInpu === void 0 ? void 0 : selecionarInpu.value.split("-");
            let arrayDeNumeros = valorDoVisor === null || valorDoVisor === void 0 ? void 0 : valorDoVisor.map((i) => +i);
            const valorCalculo = arrayDeNumeros === null || arrayDeNumeros === void 0 ? void 0 : arrayDeNumeros.reduce((a, b) => +a - +b);
            console.log(valorCalculo);
            console.log(arrayDeNumeros);
            console.log(valorDoVisor);
            if (selecionarInpu instanceof HTMLInputElement) {
                selecionarInpu.value = String(valorCalculo);
            }
        }
        if (selecionarInpu.value.includes("+")) {
            const valorDoVisor = selecionarInpu === null || selecionarInpu === void 0 ? void 0 : selecionarInpu.value.split("+");
            let arrayDeNumeros = valorDoVisor === null || valorDoVisor === void 0 ? void 0 : valorDoVisor.map((i) => +i);
            const valorCalculo = arrayDeNumeros === null || arrayDeNumeros === void 0 ? void 0 : arrayDeNumeros.reduce((a, b) => +a + +b);
            console.log(valorCalculo);
            console.log(arrayDeNumeros);
            console.log(valorDoVisor);
            if (selecionarInpu instanceof HTMLInputElement) {
                selecionarInpu.value = String(valorCalculo);
            }
        }
        if (selecionarInpu.value.includes("/")) {
            const valorDoVisor = selecionarInpu === null || selecionarInpu === void 0 ? void 0 : selecionarInpu.value.split("/");
            let arrayDeNumeros = valorDoVisor === null || valorDoVisor === void 0 ? void 0 : valorDoVisor.map((i) => +i);
            const valorCalculo = arrayDeNumeros === null || arrayDeNumeros === void 0 ? void 0 : arrayDeNumeros.reduce((a, b) => +a / +b);
            console.log(valorCalculo);
            console.log(arrayDeNumeros);
            console.log(valorDoVisor);
            if (selecionarInpu instanceof HTMLInputElement) {
                selecionarInpu.value = String(valorCalculo);
            }
        }
        if (selecionarInpu.value.includes("X")) {
            const valorDoVisor = selecionarInpu === null || selecionarInpu === void 0 ? void 0 : selecionarInpu.value.split("X");
            let arrayDeNumeros = valorDoVisor === null || valorDoVisor === void 0 ? void 0 : valorDoVisor.map((i) => +i);
            const valorCalculo = arrayDeNumeros === null || arrayDeNumeros === void 0 ? void 0 : arrayDeNumeros.reduce((a, b) => +a * +b);
            console.log(valorCalculo);
            console.log(arrayDeNumeros);
            console.log(valorDoVisor);
            if (selecionarInpu instanceof HTMLInputElement) {
                selecionarInpu.value = String(valorCalculo);
            }
        }
    }
    //   const separarValor: Number[] = valorDoVisor;
    //
    //
    //   console.log(valorCalculo);
    //   console.log(separarValor);
    //   console.log(valorDoVisor);
});
console.log(selecionarNumero);
const limpar = document.querySelector(".limpar");
if (limpar instanceof HTMLElement) {
    limpar.addEventListener("click", () => {
        if (selecionarInpu instanceof HTMLElement) {
            selecionarInpu.value = "";
        }
    });
}
const deletar = document.querySelector(".deletar");
if (deletar instanceof HTMLElement) {
    deletar.addEventListener("click", () => {
        if (selecionarInpu instanceof HTMLElement) {
            selecionarInpu.value = selecionarInpu.value.slice(0, -1) + "";
        }
    });
}
