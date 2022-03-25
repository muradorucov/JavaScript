//Şərtli dövr


/**Bəzən proqramda eyni əməliyyatları bir neçə dəfə təkrarlamaq lazım olur.
Məsələn, account dəyişənində istifadəçinin hesabında olan pulun miqdarı saxlanılır.
Proqram, istifadəçi hesabından limit dəyişənində saxlanılan dəyərə çatana qədər 100 rubl çıxmalıdır.
 */
const limit = 200;
let account = 500;

if (account > limit) {
    account = account - 100;
}
// account === 400

if (account > limit) {
    account = account - 100;
}
// account === 300

if (account > limit) {
    account = account - 100;
}
// account === 200


/**Biz limit dəyişəninin dəyərini biliriksə, onda kodun neçə dəfə təkrarlanmalı olduğunu yaza bilərik.
Amma, əgər limitdəyəri klaviaturadan istifadəçi tərəfindən daxil edilərsə nə baş verəcək?
 */
const limitT = +prompt('Limiti daxil edin');
let accountT = 500;

// neçə dəfə təkrarlanmalı?
if (accountT > limitT) {
    accountT = accountT - 100;
}

//Belə məsələlərin həlli üçün  dövrlərdən istifadə olunur.

const limitTt = +prompt('Limiti daxil edin');
let accountTt = 500;

while (accountTt > limitTt) {
    accountTt = accountTt - 100;
}

/**Dövr — təkrarlama şərti doğru olduğu halda bir sıra əmrləri təkrarlayan konstruksiyadır.
 */
let num = 0;

while (num < 5) {
    num++;
    console.log(num);
}

//Dövrün gövdəsi  — dövrün işləməsi zamanı təkrarlanan əmrlər toplusudur.
//İterasiya- dövrün gövdəsinin bir dəfə icrasıdır.
//Əgər dövrün gövdəsi 5 dəfə icra olunubsa, o zaman dövrün 5 iterasiya yerinə yetirdiyi deyilir.

// while (şərt) {
//     dövrün gövdəsi

// }

/**
1. Şərt yoxlanılır (doğru).
2. Dövrün gövdəsi icra olunur.
3. Şərt yoxlanılır (doğru). 
4. Dövrün gövdəsi icra olunur.
5. 3 və 4 addımları şərt doğru olduğu müddətdə təkrarlanır.
6. Vəziyyəti yoxlanılır (yanlış).
7. Dövr başa çatır.
 */
let numM = prompt('Enter the number:');
while (numM > 0) {
    numM--;
    console.log(numM);
}
console.log('The cycle is over');


//Dövrü bir neçə dəfə məlum sayda yerinə yetirmək lazımdırsa, adətən xüsusi sayğac dəyişəni elan edilir.
let i = 0;

while (i < 5) {
    i++;
    console.log('Sayğac dəyəri:' + i);
}


let number = 10;

while (number < 100) {
    console.log(number);
    number = number + 5;
}

//Məsələn, biz hesablamaq istəyirik ki, 7-ə tam bölünən nə qədər ikirəqəmli ədəd mövcuddur
//count dəyişəni yaradaq və hər dəfə 7-ə bölünən ədədlə rastlaşanda onu artıraq.

let numSeven = 0;
let count = 0;

while (numSeven < 100) {
    numSeven = numSeven + 1;

    if (numSeven % 7 === 0) {
        count++;
        //console.log(count);
    }
    //console.log(count);
}
console.log(count);