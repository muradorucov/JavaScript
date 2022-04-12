//Elementlər toplusu
//Kolleksiyanın əldə olunması 
//Bəzən bir neçə elementlə işləmək rahat olur. 
//Bir neçə elementi tapmaq üçün querySelectorAll metodundan istifadə olunur.

const kolleksiyaLinki = document.querySelectorAll('selector');

const elements = document.querySelectorAll('.portable');

//Bu metod elementlər kolleksiyası qaytarır.
//Kolleksiya - səhifə elementlərinin sıralanmış psevdomassividir.

const elements1 = document.querySelectorAll('.portable');
console.log(elements1);
// {0: <li class="portable">MacBook Pro: Professional notebook, introduced in 2006.</li>
// 1: <li class="portable">MacBook Air: Consumer ultra-thin, ultra-portable notebook, introduced in 2008.</li>
// <constructor>: "NodeList"}


//Kolleksiya ilə əməliyyatlar
//Kolleksiya massivə oxşayır: ayrıca elementə indeksə görə müraciət etmək olar və
// elementlərini müşahidə etmək üçün forEach metodundan istifadə etmək olar .

const elements2 = document.querySelectorAll('.portable');

console.log(elements2[1]);
// <li class="portable">MacBook Air: Consumer ultra-thin, ultra-portable notebook, introduced in 2008.</li>

// elements.forEach((element) => {
//     ...
// });

//Naviqasiya
//DOM-ağacI üzrə naviqasiya
/**Hər bir elementdə hansı elementlərlə əlaqəli olduğu haqqında məlumat var.
Əlaqədar elementə — məsələn, əsas elementə istinad etmək üçün müvafiq göstərici-özəlliklərindən istifadə olunur.
 */

const elaqeliElementeLink = element.göstərici;
const parentEl = element.parentElement;

//Atributun dəyişdirilməsi

/**
 * <h2>Macintoshes in production:</h2>
<ul>
  <li>iMac: Consumer all-in-one desktop computer, introduced in 1998.</li>
  <li class="portable">MacBook Pro: Professional notebook, introduced in 2006.</li>
  <li class="portable">MacBook Air: Consumer ultra-thin, ultra-portable notebook, introduced in 2008.</li>
</ul>
<a href="/more" id="link">Read more</a>



Elementin atribut dəyərini dəyişmək üçün ona obyektin özəlliyi kimi istinad edə bilərsiniz.

 */

const element = document.querySelector('#link');

element.href = '/read-more';

/**
 * Element siniflərinin(üslub) siyahısı ilə işləmək üçün classList metodundan istifadə olunur. 
O, siniflərlə işləmək üçün bir sıra əlverişli metodlara malik psevdo-massivi saxlayır.

 */

const elementClasses = element.classList;

elementClasses.add('class');
// Elementə göstərilən sinfi  əlavə edir. Bir neçə sinfi daxil edə bilərsiniz.
elementClasses.remove('class');
// Elementdən müəyyən bir sinfi silir. Bir neçə sinfi daxil edə bilərsiniz.
elementClasses.toggle('class');
// Əgər elementin həmin sinfi yoxdursa - əlavə edir, varsa əksinə - silir. 
elementClasses.contains('class');
// Elementdə həmin sinifin var olub-olmadığını yoxlayır, doğru və ya yanlış qaytarır.