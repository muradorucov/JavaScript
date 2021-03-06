//string - mətn tipli məlumatlar saxlamaq üçün;
//Number - rəqəmsal, ədəd tipli məlumatlar üçün;
//boolean - məntiqi əməliyyat üçün , dəyəri true və false qəbul edir;
//undefined - müəyyən olunmamış dəyər demədir;
//null - boş dəyər deməkdir. 0-a bərabərdir;
//NaN - «Not a Number», ədəd olmayan dəyişənlə riyazi əməliyyatın nəticəsidir;
//İnfinity - ədədin 0-a bölünməsinin nəticəsidir.


//Rəqəmsal əməliyyatlar
let first = 2013;
let second = 2004;
console.log(first + second);
// 4017
console.log(first - second);
// 9
console.log(first * second);
// 4034052
console.log(first / second);
// 1.0044910179640718

first = first + 10;
console.log(first);
//2023
first += 10;
console.log(first);
//2033
first -= 10;
console.log(first);
//2023
first *= 10;
console.log(first);
//20230
first /= 10;
console.log(first);
//2023


/* Bölmədən qalan qalıq bəzən lazım olur, məsələn, bir ədədin digərinə bölündüyünü bilmək üçün.*/
console.log(first % 3);
//1
console.log(first);
//2023


//İnkrementasiya və dekrementasiya
first++;
console.log(first);
//2024
first--;
console.log(first);
//2023

//Qüvvətə qaldırma.
console.log(2 ** 8);
// 256


//Mətn tipli əməliyyatlar(string)

let firstName = 'Murad';
let lastName = 'Orucov';
console.log(firstName + ' ' + lastName);

//Əgər bir mətndə dırnaq işarəsi varsa onlar xarici dırnaq işarələrindən fərqli olmalıdır:
const message = 'Did somebody say "Yoga"?';
console.log(message);
//Əgər mətndə xarici dırnaq işarəsi ilə eyni olmalı mətn varsa, \ işarəsi ilə mütləq bildirilməlidir.add()
const messageNum1 = 'Hello \'Josep\'';
console.log(messageNum1);

//Şablon mətnlər
//Şablon mətnlər tərs dırnaq işarəsi ilə əhatə olunur və daxilində fikir ifadə edilə bilər.
console.log(`Salam ${firstName} ${lastName}`);
// Salam Murad Orucov


//Mətn uzunluğu
//Mətnin simvollarının sayı length özəlliyi ilə əldə edilir.
console.log(firstName.length);
//5

//Mətnin simvoluna müraciət
//Sətrin ayrıca simvoluna kvadrat mötərizə ilə [ ] onun sıra nömrəsi ilə müraciət etmək olar. Nömrələmə sıfırdan başlayır.
console.log(firstName[3]);
//a

//Mətində indeks dəyərin tapılması
//indexOf() metodunun köməyi ilə yazılan mətnə uyğun ilk dəyər indeksi əldə oluna bilər. Dəyər aşkar edilməzsə, metod -1 qaytarır.
console.log(firstName.indexOf('ur'));
//1
console.log(lastName.indexOf('O'));
//0
console.log(lastName.indexOf('MAd'));
//-1

//Məntiqi verilənlər (boolean)
let isPositive = true;
let isNegative = false;
console.log(isPositive);
//true
console.log(isNegative);
//false
console.log(isNegative + isPositive);
//1
console.log(Number(isPositive));
//1
console.log(Number(isNegative));
//0


//Təyin edilməmiş dəyər (undefined)
//O göstərir ki, yaddaş olaraq yer ayrılıb amma dəyər mənimsədilməyib.
let fullName;
console.log(fullName);
//undefined

//Boş dəyər (null)
//İstifadəçi bu dəyəri dəyişənə onun boş olduğunu açıq bildirmək istədikdə yazır.
let secondName = null;
console.log(secondName);
//null