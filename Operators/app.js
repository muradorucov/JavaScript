//Müqayisə operatorları
//nəticəsi — true və ya false olan boolean dəyəridir.
console.log(12 > 10);
//true
console.log(12 < 10);
//false
console.log(12 >= 10);
//true
console.log(12 <= 10);
//false
console.log(15 >= 15);
//true


/*Bərabərliyin və bərabərsizliyin yoxlanılması üçün xüsusi == və != operatorları var.
Müqayisə edərkən dəyərlər eyni tipə uyğunlaşır. */
console.log(12 == '12');
//true
console.log(12 != '12');
//false
console.log(12 != 12);
//false
console.log(null == ' ');
//flase
console.log(0 == ' ');
//true


/*Tip uyğunlaşmasından istifadə etmədən dəyərləri müqayisə etmək üçün,
tipə dəqiq müqayisə operatorlarından === və !== istifadə olunur. */

console.log(12 === '12');
//flase
console.log(12 !== '12');
//true
console.log(0 === '');
//flase
console.log(null === ' ');
//false
console.log(typeof(null));
//object


//Məntiq operatorları
//Məntiqi VƏ (AND) conjunction
/*Məntiqi operator &&(Və, and, birləşmə(conjunction))  
iki məntiqi dəyəri birləşdirir, və yalnız hər iki dəyər true olarsa geriyə true dəyəri qaytarır.*/
value = 8
console.log(value >= 10 && value <= 15);
//value 10 və 15 aralığında ədəd alarsa console-a true, bunlardan fərqli ədəd alarsa false qaytaracaq.

//Məntiqi VƏ YA (OR) disjunction
/*Məntiqi operator || (OR, və ya, ayrılma(disjunction)) 
iki boolean dəyəri birləşdirir və ən azı bir dəyər true olarsa, true qaytarır.*/
num = 89;
console.log((num < 80) || (num > 100));
// true, num 80-dan kiçik və ya 100-dən böyükdürsə


//Məntiqi YOX inversion
/*Məntiqi dəyəri onun əks dəyərinə dəyişdirmək üçün 
 ! (YOX, not, inversiya(inversion)) operatoru istifadə olunur .*/
console.log(!true);
console.log(!false);


//Şərt operatoru
//JavaScript-də budaqlanan alqoritmi həyata keçirmək üçün şərti operatordan istifadə olunur.
value1 = 10;
if (value1 > 12) {
    value1++;
    console.log(value1);
}
console.log(value1);

//Əgər şərt dəyəri false qaytaran zaman bir sıra əməliyyatlar görməlisizsə, 
//onda daha bir else açar sözü istifadə edərək, digər bir blok əlavə edilir.
value2 = 18;
if (value2 > 10) {
    console.log(value2 + ' 10-dan böyükdür !')
} else {
    console.log(value2 + ' 10-dan kiçikdir !')
}


//else if ifadəsindən istifadə etməklə bir neçə şərt sıralana bilər.
if (num > 5) {
    num = num + 5;
} else if (num > 0) {
    num = num + 10;
} else {
    num = num + 15;
}

//Dəyişənin görünmə sahəsi
//Əgər fiqurlu mötərizə ({ }) daxilində bir dəyişən elanı varsa, onun dəyəri yalnız { } gövdəsi daxilində əlçatandır.
let num1 = 10;

if (num1 > 5) {
    let a = 2;
    console.log(num1 + a);
    // 12
}
console.log(num + a);
// error: a is not defined