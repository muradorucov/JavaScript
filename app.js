// Console əmrləri

console.clear();//Console-u təmizləyir
console.log('Bu əmr console mesaj çıxradır !');
console.warn('Bu əmr console xəbərdarlıq yazısı çıxardır !');
console.error('Bu əmr console error mesajı çıxardır !')

//Dəyişənin elan olunması

let nameofFirst = 'Babek';
nameofFirst = 'Murad';
nameofSecond = 'Orucov';
// alert(nameofFirst)


//Sabit deyishen 
const name = 'Hesen'
// name = 'Orucov';
console.log(name);


//rəqəmsal əməliyyatlar
const first = 2013;
const second = 2004;
console.log(first + second);
// 4017
console.log(first - second);
// 9
console.log(first * second);
// 4034052
console.log(first / second);
// 1.0044910179640718

// let num = 5;
// num = num + 10;
// console.log(num);
// 15

let num = 5;
num += 10; 
console.log(num);
// 15

const numKesr = 2013;
console.log(numKesr % 3);
// 0
// ++ (inkrement) və -- (dekrement) 

const message = 'Did somebody say "Yoga"?';
console.log(message);

const messagE = '\'He\'s coming to visit you';
console.log(messagE);

const nameArr = 'Trevor';
console.log(nameArr.length);
console.log(nameArr[5]);
console.log(nameArr.indexOf('T'));
console.log(nameArr.indexOf('t'));
console.log(nameArr.indexOf('vor'));

// function cap(){
//     document.write("Salam Dunya");
//     document.write(777+554);
// }

// var a = 6;
// var b = 8;
// c = a + b;
// document.write(c);

/*
Funksiyalar parametr qəbul edib etməməsinə görə iki yerə ayılır:
   - Parametr qəbul edən ,
   - Parametr qəbul etməyən.
Misal:
*/


// parametrsiz funksiya
function cap(){
    alert('hello world')
}

//parametrli funksiya
function param(c,d){
    document.write(c+d)
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
function hasil(i){
    return i**5
}
var a=hasil(10);

