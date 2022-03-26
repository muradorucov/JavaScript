/*Adətən dövrün təkrar olunma şərti rəqəm tipli dəyişən ilə bağlıdır, hansıki hər iterasiya sonunda dəyişir.
Belə bir dəyişənə parametr və ya sayğac deyilir . */

let i = 1;
let sum = 0;

while (i <= 10) {
    sum += i;
    i++;
    //console.log(`The sum of numbers up to ${i} is ${sum}`);
}
console.log(`The sum of numbers up to 10 is ${sum}`);


//Sayğaclı dövr üçün for…  konstruksiyası mövcuddur.
let sumFor = 0;

for (let a = 1; a <= 10; a++) {
    sumFor += a;
    //console.log(`The sum of numbers up to ${a} is ${sumFor}`);
}

console.log(`The sum of numbers up to 10 is ${sumFor}`);

//(for) parametrli dövr
/**İlkin və son dəyər, eləcə də sayğacdakı dəyişikliklərin addımı dövr elan edilərkən müəyyən edilir. 
 * Dövrün təkrarlanma şərti sayğacın son dəyər ilə müqayisə edilməsidir. Şərt iterasiyadan əvvəl yoxlanılır. */

// for (let i = başlanmaDəyəri; şərt; addım) {
//      dövrün govdesi
// }
/**
 * 1. Sayğacın dəyəri müəyyən edilir.
2. Şərt yoxlanılır (həqiqət): sayğacın dəyəri müqayisə edilir.
3. Dövrün gövdəsi icra olunur.
4. Sayğacın dəyəri dəyişir.
5. 2, 3 və 4 addımları şərt doğru olduğu müddətcə təkrarlanır.
6. Şərt yoxlanılır (yanlış).
7. Dövr başa çatır.
 */
let sum1 = 0;

for (let i = 1; i <= 10; i++) {
    sum1 += i;
}

console.log(`The sum of numbers up to 10 is ${sum1}`);

//Dövrün idarə olunması
//Dövrün dayandırılması (break)
//Dövrü icrasını dayandırmaq üçün break istifadə olunur.
let text = 'Hello. World.';

for (i = 0; i < text.length; i++) {
    console.log(text[i]);
    // Hello.

    if (text[i] === '.') {
        break;
    }
}

//Növbəti iterasiya (continue)
//Növbəti iterasiyaya keçmək üçün continue istifadə olunur.
let textS = 'Hello. World.';

for (i = 0; i < textS.length; i++) {
    if (textS[i] === '.') {
        continue;
    }

    console.log(textS[i]);
    // Hello World
}