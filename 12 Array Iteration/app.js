//Massivin iterasiyasi
//Biz massivlərlə işləyərkən tez-tez standart əməliyyatlara rast gəlirik: filtrləmə, çeşidləmə, dəyərlərin iterasiyası və s.
//Bu əməliyyatları yerinə yetirmək üçün massivlərin öz xüsusi metodları var.
const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]} -bu, ${i} indeksli elementin dəyəridir`);
}

/*
Masivin metodu — istənilən massiv üçün mövcud olan funksiyadır.
O, nöqtə vasitəsilə çağırılır və müəyyən parametrləri qəbul edə bilər.
massiv.metod (...);
arr.forEach(...);
*/


//Massivin iterasiyasi
//forEach — massiv üzərində iterasiya metodudur. Metod, massivdəki hər bir element üçün yerinə yetirilən funksiyanı parametr kimi qəbul edir.
/*const numbres = [1, 2, 3, 4, 5];

for (let i = 0; i < numbres.length; i++) {
    console.log(`${numbres[i]} - bu, ${i} indeksli elementin dəyəridir`);
}*/
//eynidir
const numbres = [1, 2, 3, 4, 5];


function callback(item, index) {
    console.log(`${item} - bu, ${index} indeksli elementin dəyəridir `);
}
numbres.forEach(callback);
//8888888888888888888888888888888888888888888888888888888888888888888888888888888



const arrString = ['Murad', 'Shamil', 'Hezret', 'Taleh'];

function arrFunction(item, index) {
    console.log(`${item} - elemtinin indeksi ${index}-dir`);
}
arrString.forEach(arrFunction);
/*Parametr kimi başqa funksiyaya ötürülən funksiyaya geri çağırış funksiyası(callback ve ya arrFunction) deyilir.
Geri çağırış funksiyası (callback ve ya arrFunction).Bu funksiya metodun necə işlədiyinə nəzarət edir.  
Onun giriş və çıxış parametrləri üçün tələbləri var və onlar hər bir metod üçün fərqlidir.
forEach metodu üçün funksiyanın birinci parametri (item - mütləq tələb olunur) elementə istinaddır,
ikinci (index - mütləq deyil istəyə bağlıdır) isə həmin elementin indeksidir. 
Geri qaytarma dəyəri yoxdur. */


//Anonim funksiya
//Funksiya birbaşa metod daxilində elan edilə bilər.
//Anonim geri çağırış funksiyasını yazmaq üçün oxlu funksiyalarından istifadə etmək rahatdır.
// massiv.method (parametr1,parametr2) =>{
//     method emeliyyatlari
// }

arrString.forEach((item, index) => {
    console.log(`${item}-bu emeliyyat arrow function ++${index}`);
});


//Map, find və filter metodları
//Massivin dəyişməsi
//map — massivin dəyişdirilməsi metodu. Ötürülən funksiya uyğun massiv elementinin yeni dəyərini qaytarır. Metodun nəticəsi — yeni massivdir. 
const arrOne = [1, 2, 3, 4, 5];
const newArr = arrOne.map((item, index) => {
    return item + 5;
});
console.log(newArr);
// [6, 7, 8, 9, 10]

// let news=arrOne.map((item)=>{
//     return item +5;
// });


//Massivdə dəyərin tapılması
//find — massivdə hər hansı bir dəyəri tapmaq üçün olan metoddur. Ötürülən funksiya true və ya false qaytarır. 
//Metodun nəticəsi — funksiyanın true qaytardığı ilk elementdir.

const arrTwo = [5, -10, 15, -20];
const result = arrTwo.find((item, index) => {
    return item < 0;
});

console.log(result);
// -10

const arrrr = [5, -10, 15, -20];
const newArrrr = arrrr.find((item) => {
    return item > 0;
});
console.log(newArrrr);


//Massivin filtrasiyası (filter)
//filter — massivdə bir neçə dəyəri tapmaq metodu. Ötürülən funksiya true və ya false qaytarır. 
//Metodun nəticəsi — orijinal massivin elementlərindən ibarət yeni massividir, hansıki bu element üçün funksiya true qaytarır.
const arrThree = [5, -10, 15, -20];
const resultOne = arrThree.filter((item, index) => {
    return item < 0;
});

console.log(resultOne);
// [-10, -20]

const arrThreeNew = [5, -10, 15, -20];
const resultOneNew = arrThreeNew.filter(() => {
    return item > 0;
});


//Massivin çeşidlənməsi
//sort - massivi çeşidləmək üçün metod. 
// Metodun işinin nəticəsi çeşidlənmiş massivdir: 
// metod yeni bir massiv yaradır, lakin eyni zamanda cari massivi dəyişir.

/* massiv.sort(cari element, sonrakı) = > {
    ...
}); */


/*arr.sort((a, b) => {
  ...
}); */

//Callback funksiyası cari və növbəti elementi çeşidləmə meyarına görə müqayisə edir. 
//Elementlər yalnız rəqəm deyil, digər məlumat tipləri, məsələn, mətnlər də ola bilər.

/*massiv.sort(cari helement_a, sonrakı_b) = > {
if (çeşidlənməsi meyarı a azdırsa b) {
    return -1;
}
if (a çeşidlənməsi meyarı a böyükdür b) {
    return 1;
}
// a bərabərdir b
return 0;
});*/

/*arr.sort((a, b) => {

  if (a*a < b*b) {
    return -1;
  }
  if (a*a > b*b) {
    return 1;
  }

  return 0;
}); */

//Əgər callback funksiyası mənfi dəyər qaytarırsa, onda a və b yerlərini dəyişir. 
//Digər hallarda a və b bir-birinə qarşı dəyişməzdir.

/*massiv.sort (sonrakı_b, cari helement_a) = > {
  if (çeşidləmə meyarına görə b azdır a) {
    return -1;
  }
  if (b çoxdursa a) {
    return 1;
  }
  // a eynidir b
  return 0;
});*/

/*arrscs.sort((b, a) => {
    if (b * b < a * a) {
        return -1;
    }
    if (b * b > a * a) {
        return 1;
    }
    return 0;
}); */

const nums = [4, 7, 2, 4, 8, 9];

nums.sort((a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }

    return 0;
});

console.log(nums);
// [2, 4, 4, 7, 8, 9]

//
const numss = [4, 7, 2, 4, 8, 9];

numss.sort((a, b) => {
    return a - b;
});

console.log(numss);
// [2, 4, 4, 7, 8, 9]