"use strict";
//! Intersection 
const Employee1 = {
    name: "Ali",
    age: 30,
    privilages: ["Data Enter"]
};
/* -------------------------------------------------------------------------- */
//! Type Assertion
let str;
str = "Hello world";
// Type assertion as keyword ile  tanımlanabilir
console.log(str.toUpperCase());
// generic olarak tanımlanabilir
console.log(str.toLowerCase());
str = 45;
str = false;
/* -------------------------------------------------------------------------- */
//! FONKSIYONLAR
//1. Fonksiyonu void olarak tanımlama
// Void fonksiyon geriye bir değer döndermez
function toplam(a, b) {
    console.log(b);
    console.log((a + b));
    return;
}
toplam(34, 67);
/* -------------------------------------------------------------------------- */
//2.İstege bağlı parametreler (? operatorü)
// Bazı parametrelerin isteğe bağlı olması için ? kullanılır.
function selamla(msj, name, lastname) {
    console.log(`${msj} ${name} ${lastname}`);
}
selamla("Merhaba", "Ömer", "Güven");
// 3. Fonksiyonlarda default Value(varsayılan değer) verilebilir
function karsila(name, msj = "Hoşgeldin") {
    return `${name} ${msj}`;
}
console.log(karsila("Sema", "Naber"));
/* -------------------------------------------------------------------------- */
//4. Arrow Function
const cikarma = (a, b) => a - b;
console.log(cikarma(43534, 56));
function birlestir(a, b) {
    return a + b;
}
console.log(birlestir("Aslı", "Demir"));
console.log(birlestir(3543, 676));
console.log(birlestir(true, false));
console.log(birlestir([3, 5, 6], [34543, 56]));
function sum(...values) {
    return values.reduce((acc, val) => acc + val, 0);
}
console.log(sum(89, 0, 9, 1, 10, 1, 23));
