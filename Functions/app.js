//Bir məsələni həll etmək üçün nəzərdə tutulmuş bir neçə komandanı birləşdirmək üçün funksiyalardan istifadə olunur.
//Funksiya — müəyyən ümumi bir tapşırığı yerinə yetirən və adı olan komandaların ardıcıllığıdır. 
function logBalanceChange() {
    console.log('Balance changed');
    console.log(`Available: ${balance}`);
}

let balance = 0;
balance += 10;
logBalanceChange();

balance -= 5;
logBalanceChange();

balance *= 2;
balance += 5;
logBalanceChange();

balance -= 8;
logBalanceChange();


//Funksiyanın təyin olunması
/* Funksiyanı təyin etmək üçün function açar sözündən istifadə olunur. 
Ondan sonra gələcəkdə funksiyanı çağıracağımız adı yazlılır və mötərizələr qoyulur. 
Fiqurlu mötərizədə funksiyanın gövdəsi təyin olunur. */

function funksiyaAdı() {
    // funksiyanın gövdəsi

}

//Funksiyanın çağırılması
//Funksiyanı çağırmaq üçün onun adını yazmaq və mötərizə işarələrin qoymaq lazımdır.

function logBalanceChangeOne() {
    console.log('Balance changed');
    console.log(`Available: ${balanceONe}`);
}
let balanceONe = 0;

balanceONe += 10;
logBalanceChangeOne();

//Funksiyanın parametri
/*Funksiyada istifadə etmək üçün bir və ya bir neçə parametr verə bilərik. 
Biz onların təyinatını əvvəlcədən bilməyə bilərik, buna görə onlar üçün dəyişən yaradırıq.
Parametr adı funksiyanı elan edərkən mötərizə daxilində yazılır. */
function funksiyaAdı2(parametr) {
    // funksiyanın gövdəsi
}

//Parametrli funksiyanın çağırılması

function fillBalance(num) {
    balance += num;
    console.log('The balance has been increased');
    console.log(`Available: ${balance}`);
}

fillBalance(5);

//Bir neçə parametr
//Funksiyanın parametrləri bir neçə dənə ola bilər. 
//Çağırılan zaman parametrlərin ardıcıllığına riayət etmək vacibdir.


function diff(a, b) {
    console.log(a - b);
}

diff(7, 5);
// 2
diff(5, 7);
// -2


//Funksiya daxilində siz təkcə fərdi əmrlər deyil, həm də mürəkkəb proqram strukturlarını, 
//məsələn, şərtlər və dövrələri də yaza bilərsiniz.
function checkEqual(a, b) {
    if (a === b) {
        console.log('Equal');
    } else {
        console.log('Not equal');
    }
}