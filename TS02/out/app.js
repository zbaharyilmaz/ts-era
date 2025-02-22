"use strict";
//! Intersection
const Employee1 = {
    name: "Ali",
    age: 30,
    privilages: ["Data Enter"],
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
    console.log(a + b);
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
// 6.Rest Parametresi
//Rest parametresi(...)
function topla(...degerler) {
    return degerler.reduce((acc, sayi) => acc + sayi, 0);
}
console.log(topla(56, 34, 23, 64, 56));
// 7.Anonim fonksiyonlar
const carpma = function (x, y) {
    return x * y;
};
console.log(carpma(43, 76));
/* -------------------------------------------------------------------------- */
//! CLASSES
class Student {
    //Constructor
    constructor(code, ad) {
        this.studentNumber = code;
        this.studentName = ad;
    }
    // Method - Yani fonksiyonlar
    getFullName() {
        console.log(`Fullname: ${this.studentNumber} - ${this.studentName}`);
    }
}
const student1 = new Student(134523, "Ali");
console.log(student1);
const student2 = new Student(67675, "Ömer");
console.log(student2);
student1.getFullName();
/* -------------------------------------------------------------------------- */
//! Classes Inheritance
class Person {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
}
//Inhertiance - Person yapısından Extend ile miras alıyoruz
class Adm extends Person {
    constructor(adminCode, name, lastname) {
        super(name, lastname);
        this.AdminCode = adminCode;
    }
}
const admin1 = new Adm(345, "Ali", "Veli");
console.log(admin1);
