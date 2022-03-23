//Brauzer xəbərdarlıqları
/*Konsol adətən istifadəçiyə görünmür, 
ona görə də onunla qarşılıqlı əlaqə yaratmaq üçün xüsusi dialoq pəncərələri yaradıla bilər.*/
// alert('Bu bir xəbərdarlıq bildirimidir !');
// confirm('Bu bir təsdiq bildirimidir!');
// prompt('Bu bir daxiletmə bildirimidir! ');

//Rəqəm tipinə çevrilmə
let numStr = '3456';
console.log(typeof(numStr));
//string
let numNumber = Number(numStr);
console.log(typeof(numNumber));
//number
let numBoolean = Boolean(numNumber);
console.log(typeof(numBoolean));
//Boolean
console.log(numBoolean);
//true

let value = 'str43';
valueCon = Number(value);
console.log(typeof(valueCon));
//Number
console.log(valueCon);
//NaN

//Daxiletmə bildirimi
/*prompt() istifadəçiyə dəyər təyin eməyi təklif edir və bu dəyəri dəyişənə mənimsətir.
İstifadəçinin daxil etdiyi dəyər mətn kimi saxlanılır. */
let number = prompt('Ədədi daxil edin!');
console.log(typeof(number));
//string

//Təsdiq bildirimi
/* confirm() istifadəçidən suala bəli və ya yox cavabını seçməyi tələb edir. 
İstifadəçi cavabının nəticəsi dəyişənə boolean tip true/false dəyəri kimi mənimsətilir.*/

let confirmValue = confirm('Bu əməliyyatı təsdiq edirsinizmi ?')
    // console.log(confirmValue);
    //Ok => true || Cancel => false
console.log(typeof(confirmValue));
//boolean




//Məlumatın tip çevrilməsi:
//1.Avtomatik tip çevrilməsi
//Hal hazırda JavaScript-də məlumatlar avtomatik olaraq bir tipdən digərinə çevrilə bilir və
//amma o həmişə gözlədiyimiz kimi işləmir.

const value1 = 25 / '5';
console.log(value1);
//5
console.log(typeof(value1));
//Number

const value2 = 25 + '5';
console.log(value2);
//255
console.log(typeof(value2));
//String

const value3 = 2 + 5 + '5';
console.log(value3);
// 75
console.log(typeof(value3));
//String


//Rəqəm tipinə çevrilmə
/*Bir dəyəri rəqəmsal tipə açıq şəkildə çevirməyin 2 yolu var:
dəyərin qarşısına + operatoru qoyun,
Number() əmrindən istifadə edin. */

const first = '25';
const second = '5';
console.log(+first + Number(second));
// 30


//Məntiqi true dəyəti 1 rəqəminə çevrilit, false isə — 0 rəqəminə .
console.log(Number(true));
// 1
console.log(Number(false));
// 0

//Xüsusi olan null dəyəri və boş sətir 0 rəqəminə çevrilir, undefined isə NaN-a çevrilir.
console.log(Number(null));
// 0
console.log(Number(''));
// 0

console.log(Number(undefined));
// NaN


//Mətn tipinə çevrilmə
//Bir dəyəri açıq şəkildə mətnə çevirmək üçün String() əmrindən istifadə edin.

String(null);
// "null"
String(undefined);
// "undefined"
String(true);
// "true"
String(123);
// "123"