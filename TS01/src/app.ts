console.log("Merhaba Typescript")

let topla=23+45

// Toplama işlemi ile sonucu gösterdik
const toplam=(a,b)=> a+b
// Fonksiyonu çağırdık
 console.log(toplam(44,56))

 // B değerinden dolayı zaten tipini otomataik algılıyor
 let b=5
 b="Hello"
console.log(b)

//! TYPE ANNOTATION
// Ts de type annotation ile kesin olarak tipini belirtiyoruz
let c:number=45
console.log( typeof c)
c="Hello"
console.log( typeof c)

// ! ARRAY DATA TYPE
// Belli bir tür tanımlaması yapıldığında array hep o türde olmalı
let CodeList:number[]=[34,56]
console.log(CodeList)
CodeList.push("Ali")
console.log(CodeList)
/* -------------------------------------------------------------------------- */
// Generic Array tanımlaması
let serialList:Array<number>=[23324,455657,675667]
console.log(serialList)
/* -------------------------------------------------------------------------- */
//! TUPLE
// TypeScript'te **Tuple (Demet)**, **sabit uzunluktaki ve belirli türlerde elemanlar içeren bir dizi türüdür**. Normal dizilerden farkı, her elemanın belirlenen veri tipine sahip olması gerektiğidir.

// Tipleri belli bir array,sayısı sabit

let tuple1:[number,string,string]
tuple1=[34,"Sema","Güven"]
console.log(tuple1)
tuple1=["Ali","Güven",36]  // Ts de bir hatadır
//Tuple tanımlandığı veri türüne göre aynı sayıda ve aynı düzende veri eklenmeli
console.log(tuple1)

/* -------------------------------------------------------------------------- */
//! Tuplelar Arrayı
let sinif:[number,string][]
sinif=[[23,"Ahmet"],[21,"Ali"],[24,"Sema"]]
sinif.push([22,"Selma"])
console.log(sinif)

/* -------------------------------------------------------------------------- */
// Tuple içinde Destructure

let car:[string,number]=["BMW",2023]

let [brand,model]=car
console.log(brand)
console.log(model)
/* -------------------------------------------------------------------------- */
//Tuple içindeki değerlerin değiştirilmesini engellemek için readonly kullanabilirsiniz:

let settings:readonly [string,number]=["Dark Mode",1]
settings=["lightMode",2]
settings[0]="NormalMode"
console.log(settings)

/* -------------------------------------------------------------------------- */
//! ENUM 


// enum, TypeScript’te anlamlı ve sabit değerleri bir arada tutmak için kullanılan bir veri yapısıdır.

//  Kodun okunabilirliğini artırır
//  Sabit değerleri merkezi bir şekilde yönetir
// String veya sayısal değerler ile çalışabilir


// Otomatik olarak numaralandırıyor. 0 dan başlatılıyor
enum Color{
    red,
    green,
    blue
}

let selectedColor:Color=Color.green
console.log(selectedColor)
/* -------------------------------------------------------------------------- */
// Numaralndırmayı bizde belirleyebileriliz
enum Role{
    Admin=1,
    User,
    Guest
}

console.log("Role User",Role.User)
/* -------------------------------------------------------------------------- */
enum statusCode{
    NotFound=404,
    Success=200,
    Accepted=202,
    BadRequest=400
}

console.log(statusCode.Success)
/* -------------------------------------------------------------------------- */
enum UserRole{
    admin="ADMINISTRATOR",
    editor="EDITOR",
    viewer="VIEWER"
}

console.log(UserRole.admin)
/* -------------------------------------------------------------------------- */
enum days{
    monday="Pazartesi",
    tuesday="Salı"
}

console.log(days.monday)

//! ANY
// Typescipt en esnek veri türü
// TypeScript'in sıkı tür denetimini devre dışı bırakır
//  Önceden türü bilinmeyen veriler için kullanılabilir
console.clear()
let h:any=45
h="Merhaba"
let veri:any="Merhaba"
console.log(veri.toUpperCase())
veri=45
// console.log(veri.toUpperCase())
/* -------------------------------------------------------------------------- */
// ! Unknown Veri Türü

let veri1:unknown;

veri1="Nasılsın"
//Burada unknown, farklı türlerde verileri kabul ediyor. Ancak, doğrudan bir işlem yapmaya kalkarsan hata alırsın.
console.log(typeof veri1)
console.log(veri1.toUpperCase())

veri1=45
console.log(typeof veri1)
console.log(veri1+68)


// Tip kontrolü yapılmalı - yokdaunkonwn ile verilen bir değer işleme sokulamaz
if (typeof veri1=="string" ){
    console.log(veri1.toLowerCase())
}
// Tip kontrolü 2. yöntem
veri1="Nasılsın"

console.log((veri1 as string).length)

// ! VOID türü
// Return ile bir değer döndermeyecek anlamındadır
// void, bir fonksiyonun herhangi bir değer döndürmediğini belirtmek için kullanılan özel bir türdür.
// return kullanmazsın veya return; yazarsın, ama değer döndüremezsin.
// Genellikle  (console.log, alert, event handler vb. kullanılır.

function selamla(isim:string):void{
    console.log(`Merhaba ${isim}`)
    return 
}

selamla("Ömer")

//! UNION  (Birleşim)  Js deki or yapısı 


let a :number=45
// number veya string olabilir
let s:number | string

s=45
s="Merhaba"
s=false


/* -------------------------------------------------------------------------- */
function karsila(veri:string | number){

if (typeof veri=="string"){
    console.log("merhaba",veri)
}
else{
    console.log("sonuc",veri*veri)
}
}

karsila("Emre")
karsila(true)
/* -------------------------------------------------------------------------- */
//! TYPE ALIASES

type name=string;

let kullaniciAdi:name="Zehra"

type kombine=number | string | boolean 

let sifre:kombine=true

/* -------------------------------------------------------------------------- */

// ! String Literal

type Pet="Dog" | "Cat" | "Bird" | "Turtle" | "iguana" | number

let myPet:Pet="Cat"
let yourPet:Pet=34 
console.log(yourPet)
let herPet:Pet="snake"

/* -------------------------------------------------------------------------- */
type secenekler="Evet" | "Hayır" | "Belki"

let cevap:secenekler

cevap="Evet"
cevap="kararsızım"