"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.converterBinarioparaOctal = void 0;
const promptSync = require('prompt-sync');
const promp = promptSync();
function converterBinarioparaOctal() {
    console.log("");
    console.log("═════════════════════════════════════");
    console.log("      CONVERSÃO BINÁRIO X OCTAL      ");
    console.log("");
    let valido = "Invalido";
    let binario = "";
    do {
        binario = promp("Digite um numero binario para converter: ");
        console.log();
        let pontouvirgula = binario.includes(".") || binario.includes(",");
        if (pontouvirgula) {
            valido = "Invalido";
        }
        else {
            for (let index = 0; index < binario.length; index++) {
                let letraAtual = binario[index];
                if (letraAtual !== "1" && letraAtual !== "0") {
                    valido = "Invalido";
                }
                if (letraAtual === "1" || letraAtual === "0") {
                    valido = "valido";
                }
            }
        }
        if (valido == "Invalido") {
            console.log("Binario Invalido.");
        }
    } while (`${valido}` === "Invalido");
    let potencia = 0;
    let decimal = 0;
    let octal = 0;
    let Resul = "";
    if (binario) {
        for (let index = binario.length - 1; index >= 0; index--) {
            if (binario[index] === "1") {
                decimal += 2 ** potencia;
            }
            potencia++;
        }
        do {
            octal = Math.floor(decimal % 8);
            decimal /= 8;
            Resul += octal.toString();
        } while (decimal > 1);
    }
    function reverseString(str = "") {
        return str.split("").reverse().join("");
    }
    console.log("Resultado: ");
    console.log("Binario: ", `${binario}`);
    console.log("Octal: ", reverseString(Resul));
    console.log("═════════════════════════════════════");
}
exports.converterBinarioparaOctal = converterBinarioparaOctal;
