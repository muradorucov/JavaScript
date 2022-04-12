/**
//DOM (Document Object Model), HTML səhifəsinin bütün içəriyini dəyişdirilə bilən obyektlər şəklində təmsil edən  sənəd obyekt modelidir.  
 * DOM həmçinin JavaScript-lə HTML sənədin elementləri ilə qarşılıqlı əlaqə üçün interfeys adlanır.


//Obyekt modeli
 * Obyekt modelinin köməyi ilə JavaScript dinamik HTML yaratmaq üçün lazım olan bütün imkanları əldə edir:
 * elementləri dəyişdirmək;
 * elementlərin atributlarını dəyişdirmək;
 * elementlərin üslubları(stilin) dəyişdirmək;
 * elementləri silmək;
 * yeni elementlər əlavə etmək;
 * səhifədə istifadəçi əməliyyatlarına reaksiya vermək.
* DOM - ilə yalnız səhifə göstərildikdən sonra əməliyyat etmək olar.

//Elementin tapılması
Element üzərində əməliyyatlar yerinə yetirmək üçün əvvəlcə onu mövcud elementlər arasında tapmaq lazımdır.
Bunun üçün CSS seçicilərindən istifadə edə bilərsiniz.
'.portable' ---- '#link' ---- 'h2' ---- 'li:last-child'


//Elementə keçid linki əldə etmək
document obyektində daxili querySelector metodu mövcuddur, hansıki CSS seçicilərdən mətn vasitəsilə axtarışda istifadə edərək,
bir elementə keçid linki almaq üçün imkan yaradır.
const elementeKecidLinki = document.querySelector('selector');

*/
const element = document.querySelector('.portable');

//Metod parametr kimi qəbul etdiyi seçiciyə uyğun gələn ilk obyekti geri qaytaracaq.

/*<h2>Macintoshes in production:</h2>
<ul>
  <li>iMac: Consumer all-in-one desktop computer, introduced in 1998.</li>
  <li class="portable">MacBook Pro: Professional notebook, introduced in 2006.</li>
  <li class="portable">MacBook Air: Consumer ultra-thin, ultra-portable notebook, introduced in 2008.</li>
</ul>
<a href="/more" id="link">Read more</a>*/

const element1 = document.querySelector('.portable');

console.log(element1);
// <li class="portable">MacBook Pro: Professional notebook, introduced in 2006.</li>



//Elementin yaradılması və silinməsi
//Yeni bir element yaratmaq üçün createElement metodundan istifadə olunur. 
//O, təyin olunmuş teq adı ilə element yaradır və onu geri qaytarır.

let newElement = document.createElement('p');

//Elementin əlavə edilməsi
/*Bir element yaradıldıqdan sonra onu səhifəyə əlavə etmək lazımdır. Bunun üçün append metodundan istifadə olunur. 
O, elementi əsas elementdən törəyən elementlərin siyahısının sonuna əlavə edir.
*/
parentElement.append(newElement);

//Elementin əlavə edilməsi
/**Əgər element siyahının sonunda deyil, təsadüfi bir yerə əlavə etmək lazımdırsa, insertBefore metodundan istifadə olunur.
Parametr olaraq, metod əlavə ediləcək elementi və yeni elementin hansı elementdən əvvəl daxil edilməli olduğu elementi qəbul edir.
 */

parentElement.insertBefore(newElement, referenceElement);

//Elementin silinməsi
//Elementin silinməsi üçün remove metodundan istifadə olunur.
element.remove();

// Elementin içəriyi
//HTML-içəriyin əldə olunması
//Bir elementin HTML içəriyini mətn kimi almaq üçün innerHTML özəlliyindən istifadə olunur.

/**<h2>Macintoshes in production:</h2>
<ul>
  <li style="display: none">iMac: Consumer all-in-one desktop computer, introduced in 1998.</li>
  <li class="portable">MacBook Pro: Professional notebook, introduced in 2006.</li>
  <li class="portable">MacBook Air: Consumer ultra-thin, ultra-portable notebook, introduced in 2008.</li>
</ul>
<a href="/more" id="link">Read more</a> */


const element2 = document.querySelector('ul');
console.log(element2.innerHTML);
// <li style="display: none">iMac: Consumer all-in-one desktop computer, introduced in 1998.</li>
// <li class="portable">MacBook Pro: Professional notebook, introduced in 2006.</li>
// <li class="portable">MacBook Air: Consumer ultra-thin, ultra-portable notebook, introduced in 2008.</li>

//CSS xüsusiyyətlərin dəyişdirilməsi
//Elementin CSS xüsusiyyətlərini dəyişdirmək üçün  style atributuna müraciət etmək lazımdı.
element.style.color = '#ababab';

//Mətnin alınması
// Bir elementin və ondan törəyən elementlərin mətn məzmununu almaq üçün innerText və textContent özəllikləri istifadə olunur .

const element = document.querySelector('ul');
console.log(element.innerText);
// MacBook Pro: Professional notebook, introduced in 2006.
// MacBook Air: Consumer ultra-thin, ultra-portable notebook, introduced in 2008.

console.log(element.textContent);
// 
// iMac: Consumer all-in-one desktop computer, introduced in 1998.
// MacBook Pro: Professional notebook, introduced in 2006.
// MacBook Air: Consumer ultra-thin, ultra-portable notebook, introduced in 2008.

// Özəlliklərin müqayisəsi
/*
innerText                                                                              textContent
Veb səhifədən mətn içəriyini əldə edir.                                          HTML sənədindən mətn içəriyini alır.
CSS üslublarını nəzərə alır və yalnız səhifədə görünən mətni əldə edir.          CSS üslublarından asılı olmayaraq bütün bölmələrin mətnini alır.
CSS üslublarına nəzərə aldığı üçün performansı aşağı sala bilər.                 Hətta  <script> və <style> kimi teqlərin içəriyini də alır.

*/

// innerHTML, innerText, textContent özəlliklərindən istifadə edərək elementin içəriyini də dəyişə bilərsiniz.Dəyişikliklər səhifədə görünür.

const element = document.querySelector('ul');
element.innerHTML = '<li>iMac: Consumer all-in-one desktop computer, introduced in 1998.</li>';
console.log(element.innerHTML);
// <li>iMac: Consumer all-in-one desktop computer, introduced in 1998.</li>


const element = document.querySelector('ul');
element.textContent = 'MacBook Pro: Professional notebook, introduced in 2006.';
console.log(element.innerHTML);
// MacBook Pro: Professional notebook, introduced in 2006.