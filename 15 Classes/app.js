/*Təsəvvür edək ki, bir qədər fərqlənən bir neçə obyekt yaratmalıyıq. Məsələn, 
yalnız adı ilə fərqlənən istifadəçilər haqqında məlumatı olan obyektlər.*/
const user1 = {
    name: 'Luke Skywalker',
    department: 'Rebels',
    isAvailable: false,
    toggleAvailable(isAv) {
        this.isAvailable = isAv;
    }
}
const user2 = {
    name: 'Han Solo',
    department: 'Rebels',
    isAvailable: false,
    toggleAvailable(isAv) {
        this.isAvailable = isAv;
    }
}

/**Biz bəzən kodun bir çox hissəsini təkrarlamalı oluruq, bu da kodun oxunurluğun azaldır, 
onu dəyişdirməyi və təkrar istifadə etməyi çətinləşdirir. 
Bu problemin həlli üçün klaslardan istifadə.
 */
class User {
    constructor(name) {
        this.name = name;
        this.department = 'Rebels';
        this.isAvailable = false;
    }
    toggleAvailable(isAv) {
        this.isAvailable = isAv;
    }
}

const userOne = new User('Luke Skywalker');
const userTwo = new User('Han Solo');

/**Bir bənzətməni nəzərdən keçirək Tutaq ki, haqqında yalnız maşın olduğunu bildiyimiz bir obyekt var.
Obyekt haqqında hansı faktlar aydın olur? Onun hansı struktura malik olduğunu təsvir edə bilərikmi? 

Biz Avtomobil klasını psevdokodda təsvir edə və bu klasın obyektini yarada bilərik.

class Car {
  constructor (color, manufacturer) {
    wheels of the car = 4;
    steering wheel car= 1;
    seat car= 3;
  }
}

item car1 = new Car();
*/
//Bəzi xüsusiyyətlər dəyişə bilər: biz obyekti elan edərkən onları müəyyənləşdiririk.
/**class Car {
  constructor (color, manufacturer) {
    color car = color; 
    manufacturer car = manufacturer;
    wheels of the car = 4;
    steering wheel car= 1;
    seat car= 3;
  }
}

item car1 = new Car('Black', 'Toyota');
item car2 = new Car('Red', 'Renault');
 */

//Klas - obyektin strukturu və onun metodlarının təsviri.
//Mahiyyətcə o, obyektlərin yaradılmasını asanlaşdıran və proqramınızın hissələrini bir birindən ayırmağa imkan verən bir template-dir.
class User {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    updateName(name) {
        this.name = name;
    }
}

//Klasın strukturu
//Klasda iki növ funksiyadan istifadə edilir: klasın konstruktoru və klasın metodları.
class User {
    constructor() {
        // klasın konstruktoru
    }
    updateName() {
        // klasın metodu
    }
    toggleAvailable() {
        // klasın metodu
    }
}

//Klasın konstruktoru
//Konstruktor klasın özəllikləri haqqında məlumatları əhatə edir və klas-ın nümunəsi yaradılan zaman avtomatik işə salınır.
//Bir qayda olaraq, parametr kimi özəllik dəyərlərini qəbul edir.

class User {
    constructor(name, department, isAvailable) {
        this.name = name;
        this.department = department;
        this.isAvailable = isAvailable;
    }
}

//Klasın nümunəsi— klasdan istifadə etməklə yaradılmış obyekt.
const user1One = new User('Luke Skywalker', 'Rebels', false);


//Bir nümunə (instance) yaratmaq
//Bir klas nümunəsi yaratmaq üçün, new operatorundan istifadə edərək konstruktoru işə salmaq və 
//parametrlərinə dəyərlər vermək lazımdır.
class User {
    constructor(name, department, isAvailable) {
        this.name = name;
        this.department = department;
        this.isAvailable = isAvailable;
    }
}

const userOne1 = new User('Murad', 'IT', true);
const userTwo2 = new User('Resad', 'IT', true);

//Klasın metodları
//Klasa, obyekt kimi, metodlar təyin edə bilərsiniz.
//Bir klas nümunəsi yaradıldıqda, metodlar avtomatik olaraq onun üçün əlçatan olacaq.
class User {
    constructor(name, department, isAvailable) {
        this.name = name;
        this.department = department;
        this.isAvailable = isAvailable;
    }
    updateName(name) {
        this.name = name;
    }
}

const usera1 = new User('Luke Skywalker', 'Rebels', false);
usera1.updateName('Darth Vader');