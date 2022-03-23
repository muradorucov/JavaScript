//switch operatoruS
//Bir neçə dəyərin bərabərliyini yoxlamaq lazım olan halda, switch operatoru istifadə.
value = 1;
switch (value) {
    case 1:
        console.log("true");
        break;
    case 2:
        console.log('flase');
        break;
    default:
        console.log('default');
        break;
}

num = '2';
switch (num) {
    case '1':
        // Birinci hal üçün yerinə yetiriləcək kod
        break;
    case '2':
        // İkinci hal üçün yerinə yetiriləcək kod
        break;
    default:
        // Əgər şərtlərdən heç biri yerinə yetirilməyibsə
        break;
}

/*Müqayisə dəyərləri case sözündən sonra göstərilir. Blok default yazılması vacib deyil.
Break konstruksiyanın yerinə yetirilməsini dayandırır: əks halda bütün sonrakı hallar üçün də kodlar yerinə yetiriləcək. */

// switch konstruksiyası
// Bir koddan istifadə edərək bir neçə halı qruplaşdırmaq mümkündür.
let a = prompt('Qalatasaray neçənci ildə yaranıb? 1: 1910, 2: 1912, 3: 1905, 4: 1916');
switch (a) {
    case '1':
    case '2':
    case '4':
        alert('Yanlışdır!');
        break;
    case '3':
        alert('Doğrudur!');
        break;
    default:
        alert("Belə dəyərlər yoxdur");
}

//Kalkuliyator
let valueOne = Number(prompt('Birinci ədədi daxil edin!'));
let valueSecond = Number(prompt('Ikinci ədədi daxil edin!'));
let operation = prompt('Yerinə yetiriləcək əməliyyatı seçin: + - / *');
switch (operation) {
    case '+':
        alert(valueOne + valueSecond);
        break;
    case '-':
        alert(valueOne - valueSecond);
        break;
    case '/':
        alert(valueOne / valueSecond);
        break;
    case '*':
        alert(valueOne * valueSecond);
        break;
    default:
        alert('Belə əməliyyat yoxdur!');
}

/*Üçlü(ternary) operator
Bəzən şərtdən asılı olaraq eyni dəyişənin dəyəri yenidən müəyyən edilir. Mes:
if (num > 0) {
    isPositive = true;
} else {
    isPositive = false;
}
*/
numm = 5;
let isPositive = numm > 0 ? 'true' : 'false';
console.log(isPositive);
//Üçlü operatoru ? şəraitdən asılı olaraq iki dəyərdən birini qaytarır. Qaytarılan dəyərlər iki nöqtə ilə ayrılır :.
// let dəyişənAdı = (şərt) ? şərtÖdənilərsəMənimsədiləcəkDəyər : şərtÖdənilmərsəMənimsədiləcəkDəyər ;