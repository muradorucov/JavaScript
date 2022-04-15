/**
 * Hadisə emal edici— hadisə baş verən anda brauzerin çağıracağı funksiyadır.
 * İstifadəçinin istənilən hərəkəti hadisələrə çevrilə bilər: mouse göstəricisinin yerini dəyişmək, 
 * onun düyməsini basıb buraxmaq, klaviatura düyməsinin basılması və s.
 * 
 * 
 * Semantika elementləri
 * Emal edicilər istənilən elementə əlavə edilə bilər, lakin teqlərin semantikasına gözləmək və 
 * HTML-də mövcud interaktiv elementlərdən istifadə etmək vacibdir. Məsələn, button - lar
 * <button>Click</button>
 * 
 * Emal edicinin təyin edilməsi
 * Emal edicinin təyin etməyin iki əsas yolu var.
 * 1. onclick atributundan istifadə etməklə:
 * <button onclick="showAlert();">Click</button>
 * 
 * 2. addEventListener metodundan istifadə etməklə:
 * element.addEventListener('click', showAlert);
 * 
 * 
 * 
 * Metoddan istifadə etməklə təyin etmə
 * addEventListener metodundan istifadə edərkən, metodun birinci parametri kimi hadisənin adı, 
 * ikinci kimi isə emal edici funksiya göstərilir.
 */
//hədəfElement.addEventListener('hadisə', emalEdiciFunksiya);
//element.addEventListener('click', showAlert);

//addEventListener metodundan istifadə emal edicini təyin etmək üçün ən universal üsuldur və 
//əksər vəziyyətlər üçün uyğundur.

function showAlert() {
    alert('Hello from event handler!');
}
const element1 = document.querySelector('.action1');
//.action button'u html faylindadir.
element1.addEventListener('click', showAlert);

//Parametr kimi emal edici funksiya hadisə haqqında ətraflı məlumatı olan event obyektini alır.
//event obyektinin target xüsusiyyəti hadisə baş verən elementin məlunmatların saxlayır.
function changeText(event) {
    event.target.innerText = 'Clicked';
}
const elements = document.querySelectorAll('.action');
elements.forEach((element) => {
    element.addEventListener('click', changeText);
});

//Metoddan istifadə edərək, birdən çox emal edici əlavə etmək mümkündür.

function changeText(event) {
    event.target.innerText = 'Selected';
}

function changeColor(event) {
    event.target.style.background = 'yellow';
}
const elementss = document.querySelectorAll('.actionto');
elementss.forEach((element) => {
    element.addEventListener('click', changeText);
    element.addEventListener('click', changeColor);
});



//Hadisə emal edicinin aradan qaldırılması
//Emal edicini removeEventListener vasitəsilə silmək mümkündür.


function changeText(event) {
    event.target.innerText = 'Not Selected';
}

function changeColor(event) {
    event.target.style.background = 'yellow';
    event.target.innerText = 'Selected';
    event.target.removeEventListener('click', changeColor);
}
const elementsss = document.querySelectorAll('.actionth');
elementsss.forEach((element) => {
    element.addEventListener('click', changeText);
    element.addEventListener('click', changeColor);
});


//Anonim emal edici
/**Əgər emaledicinin bir elementə qoşulması lazımdırsa, onu ayrıca bir funksiyada elan etməkdənsə, 
 * birbaşa metodun içərisində elan etmək rahatdır.
 */

const elements1 = document.querySelectorAll('.actions');
elements1.forEach((element) => {
    element.addEventListener('click', (event) => {
        const text = event.target.innerText;

        if (text === 'Selected') {
            event.target.innerText = 'Not selected';
        } else {
            event.target.innerText = 'Selected';
        }
    });
});



//Mouse hadisələri
/*Klikdən əlavə, istifadəçi mouse - dan istifadə edərək səhifə ilə əlaqə qurduqda baş verən bir çox sayda digər hadisələr var:
 * mousedown — mouse düyməsinin basılması;
 * mouseup — mouse düyməsinin buraxılması;
 * click — «click» olunma, mousedown sonra isə mouseup;
 * mousemove — mouse kursorunun hərəkəti;
 * mouseover - obyekt üzərində mouse hovering;
 * mouseout — mouse kursorunun obyekti tərk etməsi və s.
 */


const greenBox = document.querySelector('.green-box');

greenBox.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'yellow';
});

greenBox.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = 'green';
});


//Default hadisələr
//Linkə klik olunma
//Bəzi interaktiv elementlərin standart davranışı var. Məsələn, bu linkə klikləmə zamanı səhifə yenidən yüklənəcək.
//<a class="link" href="#">Link to page</a>
//Default hadisənin işə salınmasının qarşısını almaq üçün Event obyektində preventDefault metodu var.

document.querySelector('.link').addEventListener('click', (event) => {
    event.preventDefault();
    event.target.innerText = 'Clicked';
});

//Keyboard hadisələri
//Mouse hadisələri ilə yanaşı, JavaScript klaviatura hadisələrini də idarə edə bilər. 
//Onlardan ən sadəsini - klaviaturada düyməni basaraq — keyup necə idarə edəcəyimizi öyrənəcəyik.
// document.addEventListener('keyup', (event) => {
//     console.log('Key pressed');
// });

//Klaviatura hadisələri üçün Event obyektindən basılan düymənin kodunu keyCode — özəlliyindən əldə edə bilərsiniz.

document.addEventListener('keyup', (event) => {
    console.log(event.keyCode = 13);
});