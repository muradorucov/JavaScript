//Massivin düzülməsi
//Sonuna bir element əlavə etmək
/*push metodu massivin sonuna bir element əlavə edir.*/

const characters = ['Peter', 'Gwen', 'Norman'];
characters.push('Stan');
console.log(characters);
// ['Peter', 'Gwen', 'Norman', 'Stan']

let arr = ['Murad', 'Hesen', 'Qulu'];
arr.push('Fariz');
console.log(arr);


//Sonuncu elementin silinməsi
//pop metodu massivdən sonuncu elementi silir və silinmiş dəyəri qaytarır.
const character = ['Peter', 'Gwen', 'Norman'];
const removed = character.pop();
console.log(character);
// ['Peter', 'Gwen']
console.log(removed);
// Norman

let Names = ['Murad', 'Valeh', 'Resad'];
let silinmiş = Names.pop();
console.log(Names);
console.log(silinmiş);


//Birinci elementin silinməsi
//shift metodu massivin əvvəlindəki ilk elementi silir, elementin indeksini 1 vahid azaldır və silinmiş dəyəri qaytarır.
const characte = ['Peter', 'Gwen', 'Norman'];
const Delete = characte.shift();


console.log(characte);
// ['Gwen', 'Norman']
console.log(Delete);
// Peter



//Başlanğıca elementin əlavə edilməsi//unshift metodu massivin əvvəlinə element əlavə edir.
//unshift metodu massivin əvvəlinə element əlavə edir.

const adlar = ['Peter', 'Gwen', 'Norman'];

adlar.unshift('Stan');

console.log(adlar);
// ['Stan', 'Peter', 'Gwen', 'Norman']


//Massivi mətnə çevrilməsi
//Massivi join metodundan istifadə edərək mətnə çevirmək olar. 
//Parametr olaraq metoda mətn ötürülür, hansıki massivin elementləri bir-birinə o mətnlə bağlanacaq.
const nameArr = ['Peter', 'Gwen', 'Norman'];

const names = nameArr.join(' and ');
console.log(names);
// Peter and Gwen and Norman


//Mətnin massivə çevrilməsi
//Əks əməliyyat — split. Parametr olaraq, elementlərin ayrılacağı bir sətir ötürülür.
//Yeni massivin bütün elementləri mətn tiplidir.

const pagesString = '32, 31, 34, 36, 31';
const pages = pagesString.split(', ');

console.log(pages);
// ["32", "31", "34", "36", "31"]


//Destrukturizasiya
//Massivin elementlərini ayrılıqda dəyişənlər kimi istifadə etmək üçün destruktiv mənimsətmədən istifadə olunur.
const nameParts = ['John', 'Jonah', 'Jameson'];
const firstName = nameParts[0];
const middleName = nameParts[1];
const lastName = nameParts[2];


const namePart = ['John', 'Jonah', 'Jameson'];
const [firstNam, middleNam, lastNam] = nameParts;

//Bunun üçün massiv elementlərinin növbə ilə yazıldığı dəyişənlər kvadrat mötərizədə qeyd olunur.
// let [dəyişən1, dəyişən2, dəyişən3] = massiv;

// const [constanta1, constanta2, constanta3] = massiv;

let [firsName, middlName, lasName] = nameParts;

const [firsNam, middlNam, lasNam] = nameParts


//Rest-operatoru
//Əgər dəyişənlərə massivin yalnız bəzi elementlərini yazmaq və qalanlardan yeni massiv yaratmaq lazımdırsa, 
//yeni massivi təyin etməzdən əvvəl rest-operatoru «. . .»  yazılır.


const namParts = ['John', 'Jonah', 'Jameson'];
const [firtName, ...otherParts] = namParts;

console.log(firtName);
// John
console.log(otherParts);
// ['Jonah', 'Jameson']

//Spread-operatoru
//Spread operatoru  «. . .» massivi ayrı-ayrı elementlər ardıcıllığına çevirir. Massivin hər bir elementini ayrıca dəyişən kimi ötürmək lazım olanda bu çox faydalı olur.
const characters = ['Peter', 'Gwen', 'Norman'];

console.log(characters[0], characters[1], characters[2]);
// Peter Gwen Norman

///////////////////////////////////////////////////////////////////////////////////
const characters = ['Peter', 'Gwen', 'Norman'];

console.log(...characters);

// Peter Gwen Norman


//Massivin surətinin çıxarılması
//Massivin surətini çıxarmaq üçün yeni massiv yaratmaq və spread-operatorundan istifadə edərək orijinal massivin bütün elementlərini ona ötürmək lazımdır.
const characters = ['Peter', 'Gwen', 'Norman'];

const persons = [...characters];
persons.push('Stan');

console.log(characters);
// ['Peter', 'Gwen', 'Norman'];
console.log(persons);
// ['Peter', 'Gwen', 'Norman', 'Stan'];

//spread-operatorundan istifadə edərək massiv yaradarkən siz yeni elementlər də əlavə edə bilərsiniz.
const characters = ['Peter', 'Gwen', 'Norman'];

const persons = [...characters, 'Eddie'];
persons.push('Stan');

console.log(persons);
// ['Peter', 'Gwen', 'Norman', 'Eddie', 'Stan'];






/**Dəyişənlərdə massivin özü deyil, onların ünvanı saxlanlır: yəni massivin yazıldığı yaddaş sahəsinin göstəricisi. 
Tutaq ki, biz massivin surətini yaratmaq istəyirik. 
Bir dəyişəni digərinə mənimsətsəniz, hər iki dəyişən eyni massivin ünvanını saxlayacaq.
Əgər "surəti çıxarılan" massivi dəyişməyə cəhd etsəniz, o zaman orijinal massiv də dəyişəcək.
const characters = ['Peter', 'Gwen', 'Norman'];

const persons = characters;
persons.push('Stan');

console.log(characters);
// ['Peter', 'Gwen', 'Norman', 'Stan'];
console.log(persons);
// ['Peter', 'Gwen', 'Norman', 'Stan']; */