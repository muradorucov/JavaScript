//Obyektlər təkcə xüsusiyyətlərə deyil, həm də onunla yerinə yetirilə bilən əməliyyatlara (rəng dəyişdirmək, hərəkət etmək və s.) malikdir.
const chair = {
    color: 'Blue',
    manufacturer: 'IKEA',
    levelBackrest: '50',
    lowerBackrest() {
        chair.levelBackrest--;
    },
    raiseBack() {
        chair.levelBack++;
    }
}


//Deyək ki, bel mövqeyini dəyişdirmək üçün fərqli mexanizmə malik iki stulumuz var. 
//Hər bir stul üçün təlimatları bütün digər xüsusiyyətlər ilə birlikdə saxlamaq rahatdır.

const chair1 = {
    color: 'Blue',
    lowerBack() {
        chair.LevelBack--;
    }
}
const chair2 = {
    color: 'Red',
    setPositionBackrest(level) {
        chair.levelBackrest = level;
    }
}


//Obyekt metodu.

/**Obyektin özəlliyinə yazılan funksiyaya obyektin metodu deyilir. 
Metodları yazmaq üçün function sözü olmadan qısa yazı formasından istifadə edə bilərsiniz.
 */

const player = {
    name: "Eric Cartman",
    pause: function() {
        console.log('Hello!');
    }
}

const player1 = {
    name: "Eric Cartman",
    greet() {
        console.log('Hello!');
    }
}


//Metod çağırılması
//Metoda istinad özəlliyə istinad kimidir.
//obyekt.metod           >>>>>>>>>>>         player.greet

//Əgər metodun dərhal yerinə yetirilməsini istəyirsinizsə, o zaman adi funksiyada olduğu kimi mötərizələr qoymalısınız. 
//Lazım gələrsə, onlara arqumentlər qeyd olunur.

/**obyekt.metod()
obyekt.metod (arqument1,...) */

/**player.greet()
player.greet('Hello!') */


//Obyektə müraciət
//Metod this göstəricidən istifadə edərək obyektə müraciət edə bilər.
const player3 = {
    name: "Eric Cartman",
    showThis() {
        console.log(this);
    }
}
player3.showThis();
/* {
  name: "Eric Cartman"
  showThis: function () {...}
} */

//this metodda obyektin xassəsinə müraciət etmək üçün əlverişlidir.

const player4 = {
    name: "Eric Cartman",
    greet() {
        console.log(`Hello! My name is ${this.name}`);
    }
}

player4.greet();
// "Hello! My name is Eric Cartman"


//Metodları istifadə edərək, özəllik dəyərlərini dəyişə bilərsiniz.
const player5 = {
    name: "Eric Cartman",
    changeName(newName) {
        this.name = newName;
    }
}

player5.changeName('Stan Marsh');

console.log(player5);
/* {
  name: "Stan Marsh"
  changeName: function () {...}
} */