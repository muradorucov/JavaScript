//Massivlər
//Massiv —  dəyərlərin nizamlı bir siyahısını saxlamağa imkan verən məlumat strukturudur.

//[32, 31, 34, 36, 31]

//Massiv elementi
//Massivdə yerləşən hər bir dəyər massiv elementi adlanır. 
//Hər bir elementin indeks adlanan ardıcıl nömrəsi var.
//Massivi qatar vaqonu ilə müqayisə etmək olar.
//Qatarda hər bir sərnişinin öz yeri var. Hər bir oturacağın öz sıra nömrəsi var, onlar sıralandığı üçün onu vaqonda asanlıqla tapmaq olar.
//Sərnişin bir element, onun yerinin nömrəsi isə bir indeksdir.

//Massivin təyin olunması
// Massiv yaratmaq üçün dəyişəni elan etməli və ona massiv elementlərinin siyahısını kvadrat mötərizə daxilində yazmalısınız.
// Bu dəyişən massivin özü deyil, massivə istinad ünvanı olacaq. 
//Buna görə də, massivin elementləri dəyişsə belə, onu sabit elan etmək olar.
const characters = ['Peter', 'Gwen', 'Norman'];
const pages = [32, 31, 34, 36, 31];

//Massivin elementinə müraciət
// Element indeksleri  0 -dan başlayır. 
// İndeksdən istifadə edərək, massivin elementinə müraciət edərək onun dəyərini oxuya və ya dəyişdirə bilərsiniz.
const character = ['Peter', 'Gwen', 'Norman'];
console.log(character[2]);
// Norman

character[2] = 'Harold';
console.log(character[2]);
// Harold

//Massiv uzunluğu
//Massivdəki elementlərin sayını öyrənmək üçünlength xassəsindən istifadə edin.
const characte = ['Peter', 'Gwen', 'Norman'];

console.log(characte.length);
// 3

//Massiv elementlərinin iterasiyası
//Massivlər eyni tipli verilənlər olduğundan onlar üzərində qrup əməliyyatlarını yerinə yetirmək asandır. 
//Bunun üçün ən çox istifadə for dövründən istifadə olunur.
const page = [32, 31, 34, 36, 31];
let sum = 0;
for (let i = 0; i < page.length; i++) {
    sum += page[i];
}