class Car {
    setName(name) {
        this.name = name;
    }
    startEngine(){
        console.log("Engine Started"+this.name);
    }
    stopEngine(){
        console.log("Engine Stopped"+this.name);
    }
}

class Ferrari extends Car{
    topSpeed(speed){
        console.log("Top Speed :" + this.name + speed);
    }
}
class Lamborghini extends Ferrari{
    showPrice(){
        console.log("Price :" + " $1,000,000");
    }
}
class Tesla extends Car{
    showDetails(){
        console.log("It is Electric Vehicles ")
    }
}

let myCar1 = new Ferrari();
console.log('Car 1')
myCar1.setName('SF90 Spider');
myCar1.startEngine();
myCar1.stopEngine();
myCar1.topSpeed(340);

let myCar2 = new Lamborghini();
console.log('Car 2')
myCar2.setName('aventador SVJ');
myCar2.startEngine();
myCar2.stopEngine();
myCar2.topSpeed(360);
myCar2.showPrice();

let myCar3 = new Tesla();
console.log('Car 3')
myCar3.setName('Model S');
myCar3.startEngine();
myCar3.stopEngine();
myCar3.showDetails();
// myCar3.topSpeed(360);
// myCar3.showPrice();
//ถ้าอยากสืบทอดทั้งหมด extends Lamborghini