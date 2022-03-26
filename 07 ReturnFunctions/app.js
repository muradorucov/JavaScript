/*
Funksiyalar parametr qəbul edib etməməsinə görə iki yerə ayılır:
   - Parametr qəbul edən ,
   - Parametr qəbul etməyən.
Misal:
*/

// parametrsiz funksiya
function cap() {
    alert('hello world')
}

//parametrli funksiya
function param(c, d) {
    document.write(c + d)
}
// param(3,4)
// var a = param(5,5)
// document.write(a+4)
/*
Eyni zamanda Funksiyalar dəyişənə mənimsədilə bilməsinə görə də iki yerə bölünür:
(bunlar həmdə cavab qaytaran və nəticə qaytaran da adlanırlar. Nəticə qaytaran funksiyalar return ilə işləyir.)
   - Mənimsədilə bilən
   - mənimsədilə bilməyən
Misal:
*/
function hasil(i) {
    return i ** 5
}
var a = hasil(10);

//Qaytarılan dəyər
//Bu funksiyanı bu formada çağırsanız, heç nə baş verməyəcək.
function diff(a, b) {
    return a - b;
}

diff(7, 5);

//Funksiya tərəfindən qaytarılan dəyər hər hansı bir şəkildə istifadə edilməlidir,
// əks halda o, sadəcə olaraq yox olacaq. Məsələn, funksiyanın nəticəsini konsola çıxara bilərsiniz.
function diffF(a, b) {
    return a - b;
}

console.log(diffF(7, 5));
// 2

// Yuxarıda da dediyim kimi digər halda bu dəyəri bir dəyişənə yazmaq və daha sonra onu istifadə etmək mümkündür.

function diffFF(a, b) {
    return a - b;
}
const difference = diffFF(7, 5);
console.log(difference);
// 2

//Funksiyanin yarimciq dayandirilmasi
//return komandasından sonra digər əmrlər olsa belə, funksiyanın yerinə yetirməsi dayandırılır.

function difffF(a, b) {
    let res = a - b;
    return res;
    // funksiyanın yerinə yetirilməsi burada dayanacaqdır 
    // və aşağıdakı heç bir əmr yerinə yetirilməyəcəkdir
    res = a + b;
}
console.log(difffF(7, 5));
// 2

//Funksiyanın dəyişənə yazılması
const dif = function(a, b) {
    return a - b;
}

console.log(dif(7, 5));
// 2

//Oxlu funksiya
const difh = (a, b) => {
    return a - b;
}
console.log(difh(7, 5));
// 2
//Oxlu funksiyalar — funksiya təyin etmək üçün qısaldılmış yoldur. 
//Bu funksiya anonimdir, yəni heç bir adı yoxdur, buna görə də müstəqil elan ediləndə bir dəyişənə mənisədilməsi tələb olunur.