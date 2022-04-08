//Elə olur ki, bir sinifin məntiqi bir neçə fərqli sinifdə təkrarlanır. 
class Car {
    constructor(maxSpeed, color, mileage) {
        this.maxSpeed = maxSpeed;
        this.color = color;
        this.mileage = mileage;
    }
}
class Vehicle {
    constructor(maxSpeed, color) {
        this.maxSpeed = maxSpeed;
        this.color = color;
        this.hasBasket = true;
    }
}

//Belə hallarda ümumi məntiqi ayrıca sinifə köçürmək və onun əsasında yeni siniflər yaratmaq olar.
//Ümumi məntiqi özündə saxlayan sinif əsas adlanır və onun əsasında yaradılmış siniflər — törəmə siniflər: adlanır. 

class Vehicle {
    constructor(maxSpeed, color) {
        this.maxSpeed = maxSpeed;
        this.color = color;
    }
}

class Car extends Vehicle {
    constructor(maxSpeed, color, mileage) {
        super(maxSpeed, color);
        this.mileage = mileage;
    }
}
// const user = new Car(200, 'red', '1000km');
// console.log(user);
// console.log(user.color);
// console.log(user.maxSpeed);


//İrsilik
/**Törəmə sinifin nümunəsi yaradılarkən əvvəlcə əsas sinifin constructor() -u  çağırılır, 
 * sonra isə yaradılan obyektə törəyən sinifin xüsusiyyətləri əlavə edilir.
super()metodu əsas sinifin constructor() -un çağırmaq üçün istifadə olunur. 
 */
class Car extends Vehicle {
    constructor(maxSpeed, color, mileage) {
        super(maxSpeed, color);
        this.mileage = mileage;
    }
} //super(maxSpeed, color);


//Özəlliklərdən əlavə törəmə sinif əsas sinifin metodlarını miras alır.

class Vehicle {
    constructor(maxSpeed, color) {
        this.maxSpeed = maxSpeed;
        this.color = color;
    }
    changeColor(newColor) {
        this.color = newColor;
    }
}

class Car extends Vehicle {
    constructor(maxSpeed, color, mileage) {
        super(maxSpeed, color);
        this.mileage = mileage;
    }
}

const myCar = new Car('yellow', 0);
myCar.changeColor('red');



/*Obyekt-yönümlü proqramlaşdırma
Obyekt-yönümlü proqramlaşdırmada (OP) siniflərin istifadəsi əsas anlayışlardan biridir. 
OP üç prinsipə əsaslanır:
inheritance (irsilik);
encapsulation (kapsullama);
polymorphism (polimorfizm).


İrsilik — sinifərin öz nəslini yaratmaq imkanı.
Törəyən sinif bütün özəllik və metodları əsasdan miras alır və siz ona yenilərini əlavə edə bilərsiniz.


Kapsullama —  bütün özəllik və metodları bir yerdə birləşdirmək və lazım olan halda, 
onların bir hissəsini gizlətmək imkanı. 
Bu o deməkdir ki, sinif onun işləməsi üçün tələb olunan bütün özəllik və metodların tam dəstini əhatə edir.


Polimorfizm — müxtəlif siniflərdə eyni metod və ya özəllikləri elan etmək imkanı.
Məsələn, müxtəlif siniflərin update adlı metodu ola bilər. Siniflərin hər birində fərqli əməliyyatları yerinə yetirəcək.

*/