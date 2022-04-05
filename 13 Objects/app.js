//Deyək ki, onlayn oyunun hər bir istifadəçisinin adı, ləqəbi, doğum tarixi, səviyyəsi var. 
//Bir müştəri ilə əlaqəli bütün dəyərləri bir yerdə saxlamaq məntiqli olardı. 
let user1 = ['Eric Cartman', 'The Coon', '13.08.1997', true, 14];
let user2 = ['Stan Marsh', 'Billy', '19.10.2001', true, 16];
//Təsəvvür edin məlumatların bu şəkildə saxlanması nə qədər çətinlik yaradır.
//Məlumatları rahat saxlamaq və onlarla işləmək üçün Obyektlər istifadə olunur.
/*let userONe = [
    'Eric Cartman',
    'The Coon',
    '13.08.1997',
    true,
    14
];

let userTwo = [
    'Stan Marsh',
    'Billy',
    '19.10.2001',
    true,
    16
]*/

let userONe = {
    name: 'Eric Cartman',
    nickname: 'The Coon',
    birthDate: '13.08.1997',
    isPremium: true,
    level: 14
}

let userTwo = {
    name: 'Stan Marsh',
    nickname: 'Billy',
    birthDate: '19.10.2001',
    isPremium: true,
    level: 16
}

//Obyekt  — bir elementin xüsusiyyət və metodlar toplusundan ibarət məlumat növüdür.
/*{
    name: 'Eric Cartman',
    nickname: 'The Coon',
    birthDate: '13.08.1997',
    isPremium: true,
    level: 14
} */

//Obyektin təyin olunması
//Obyekt yaratmağın ən asan yolu dəyişən təyin etmək və ona obyekt xüsusiyyətlərini fiqurlu mötərizələr daxilində yazmaqdır.
const player = {
    name: 'Eric Cartman',
    nickname: 'The Coon',
    birthDate: '13.08.1997',
    isPremium: true,
    level: 14
}



//Obyektin özəlliyi
/**Əgər obyektləri həyatdakı əşyalarla müqayisə etsək, o zaman obyektin xüsusiyyətləri (rəng, material və s.) 
əşyaların xüsusiyyətlərinə bənzəyir.
Məsələn, psevdokodda stulu belə təsvir edə bilərsiniz:
 */

/*predmet stul = {
    istehsalçı: 'IKEA',
    rəng: 'Mavi',
    səviyyəsi: 50
}*/

//Obyekt yaradarkən obyektə bir neçə xüsusiyyət əlavə edə bilərik. Obyektin özəlliyi kimi İstənilən tip dəyər istifadə edilə bilər.
/**const obyektAdı = {
  özəllikAdı1:dəyər1,
 özəllikAdı2: dəyər2,
 özəllikAdı3: dəyər3,
  ...
} */

const playerONe = {
    name: 'Eric Cartman',
    isPremium: true,
    level: 14,
}

//Özəllik (propertie) adı
//Özəllikadı adi bir sətirdir (mətndir). Özəllikləri adlandırarkən, dəyişənləri adlandırarkən diqqət olunan eyni qaydalara riayət etmək məsləhətdir. 
//Özəllik adında boşluqlar və ya xüsusi simvollar varsa, o zaman dırnaqlar içərisində olmalıdır.
const playerTwo = {
    'first name': 'Eric',
    'last name': 'Cartman',
    isPremium: true,
    level: 14
}

// Özəlliyin çağırılması
//Obyekt özəlliyinin dəyərini əldə etmək üçün iki yol var: nöqtədən sonra və kvadrat mötərizələrdən istifadə etməklə.
/*obyekt.özəllik ---> string.length
  obyekt [özəllik] ----> string['length']
*/

//Birinci üsul, adı boşluqlar və xüsusi simvollar olmayan mətn kimi elan edilən özəlliklər üçün uyğundur. 
const players = {
    name: 'Eric Cartman',
    isPremium: true,
    level: 14
}
console.log(players.name);
// Eric Cartman


//Kvadrat mötərizədə xüsusi simvolları olan mətn sətrini, həmçinin özəllik adını əhatə edən dəyişəni təyin edə bilərsiniz.
const playerr = {
    'first name': 'Eric',
    'last name': 'Cartman',
    isPremium: true,
    level: 14
}
const property = 'level';

console.log(playerr['first name']); // Eric
console.log(playerr[property]); // 14

//Obyektdə olmayan özəlliyin dəyərini almağa çalışsaq, nəticə qeyri - müəyyən olacaq.
const playerrs = {
    name: 'Eric Cartman',
    isPremium: true,
    level: 14
}

console.log(playerrs.status);
// undefined

//Özəlliyin əlavə olunması
//Mövcud olan obyektə özəllik əlavə etmək üçün sadəcə ona dəyərini yazmaq lazımdır
const playe = {
    name: 'Eric Cartman',
    isPremium: true,
    level: 14
}

playe.status = 'active';
console.log(playe);
/* {
  name: "Eric Cartman"
  isPremium: true
  level: 14
  status: "active"
} */


//Özəlliyin dəyişdirilməsi
//Mövcud obyektdəki özəlliyin dəyərin dəyişmək üçün ona yeni dəyərin mənimsətmək lazımdır.

const playes = {
    name: 'Eric Cartman',
    isPremium: true,
    level: 14
}

playes.level = 15;
console.log(playes);
/* {
  name: "Eric Cartman"
  isPremium: true
  level: 15
} */

//Özəlliyin silinməsi (delete)
//Özəlliyin silinməsi üçün delete operatorundan istifadə olunur

const playerss = {
    name: 'Eric Cartman',
    isPremium: true,
    level: 14,
    status: 'active'
}
delete playerss.status;

console.log(playerss);
/* {
  name: "Eric Cartman"
  isPremium: true
  level: 14
} */


//Digər özəllik tipləri
//Özəlliklər kimi təkcə primitiv məlumat tipi (sətir, nömrə və s.) deyil, həm də massiv, başqa obyekt və ya funksiya ola bilər.

const department = {
    name: 'Development',
    userIds: [345, 234, 567, 123],
    admin: {
        name: 'Stan Marsh',
        id: 345
    }
}

console.log(department.admin.name);
// Stan Marsh
console.log(department.userIds[0]);
// 345


//Obyektin surətinin çıxarılması
/**Massivlərdə olduğu kimi, dəyişən kimi ​​obyekt elan edilərkən, onda saxlanılan obyektin özü deyil, ona istinad ünvanıdır. 
spread-operatoru  . . . obyektin surətini yaratmaq üçün istifadə olunur. */

const Playersr = {
    name: "Eric Cartman",
    isPremium: true,
    level: 14,
}
const playerClone = {...Playersr };
console.log(playerClone);

/* {
  name: "Eric Cartman"
  isPremium: true
  level: 14
} */

/**Siz həmçinin spread-operatorundan istifadə edərək yeni özəlliklər əlavə edə bilərsiniz.
Eyni özəlliklər artıq mövcud olarsa, onda sonda aldığı özəllik öncəkinin üzərinə yazılır.
 */

const play = {
    name: "Eric Cartman",
    isPremium: true,
    level: 14,
}
const playerCloneOne = {...play, name: 'Stan Marsh', age: 23 };
console.log(playerCloneOne);
/* {
  name: "Stan Marsh"
  isPremium: true
  level: 14
  age: 23
} */