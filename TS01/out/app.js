"use strict";
console.log("Merhaba Typescript");
let topla = 23 + 45;
const toplam = (a, b) => a + b;
console.log(toplam(44, 56));
let b = 5;
b = "Hello";
console.log(b);
let c = 45;
console.log(typeof c);
c = "Hello";
console.log(typeof c);
let CodeList = [34, 56];
console.log(CodeList);
CodeList.push("Ali");
console.log(CodeList);
let serialList = [23324, 455657, 675667];
console.log(serialList);
let tuple1;
tuple1 = [34, "Sema", "Güven"];
console.log(tuple1);
tuple1 = ["Ali", "Güven", 36];
console.log(tuple1);
let sinif;
sinif = [[23, "Ahmet"], [21, "Ali"], [24, "Sema"]];
sinif.push([22, "Selma"]);
console.log(sinif);
let car = ["BMW", 2023];
let [brand, model] = car;
console.log(brand);
console.log(model);
let settings = ["Dark Mode", 1];
settings = ["lightMode", 2];
settings[0] = "NormalMode";
console.log(settings);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
let selectedColor = Color.green;
console.log(selectedColor);
var Role;
(function (Role) {
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["User"] = 2] = "User";
    Role[Role["Guest"] = 3] = "Guest";
})(Role || (Role = {}));
console.log("Role User", Role.User);
var statusCode;
(function (statusCode) {
    statusCode[statusCode["NotFound"] = 404] = "NotFound";
    statusCode[statusCode["Success"] = 200] = "Success";
    statusCode[statusCode["Accepted"] = 202] = "Accepted";
    statusCode[statusCode["BadRequest"] = 400] = "BadRequest";
})(statusCode || (statusCode = {}));
console.log(statusCode.Success);
var UserRole;
(function (UserRole) {
    UserRole["admin"] = "ADMINISTRATOR";
    UserRole["editor"] = "EDITOR";
    UserRole["viewer"] = "VIEWER";
})(UserRole || (UserRole = {}));
console.log(UserRole.admin);
var days;
(function (days) {
    days["monday"] = "Pazartesi";
    days["tuesday"] = "Sal\u0131";
})(days || (days = {}));
console.log(days.monday);
console.clear();
let h = 45;
h = "Merhaba";
let veri = "Merhaba";
console.log(veri.toUpperCase());
veri = 45;
let veri1;
veri1 = "Nasılsın";
console.log(typeof veri1);
console.log(veri1.toUpperCase());
veri1 = 45;
console.log(typeof veri1);
console.log(veri1 + 68);
if (typeof veri1 == "string") {
    console.log(veri1.toLowerCase());
}
veri1 = "Nasılsın";
console.log(veri1.length);
function selamla(isim) {
    console.log(`Merhaba ${isim}`);
    return;
}
selamla("Ömer");
let a = 45;
let s;
s = 45;
s = "Merhaba";
s = false;
function karsila(veri) {
    if (typeof veri == "string") {
        console.log("merhaba", veri);
    }
    else {
        console.log("sonuc", veri * veri);
    }
}
karsila("Emre");
karsila(true);
let kullaniciAdi = "Zehra";
let sifre = true;
let myPet = "Cat";
let yourPet = 34;
console.log(yourPet);
let herPet = "snake";
let cevap;
cevap = "Evet";
cevap = "kararsızım";
