let empDetails = function(name,id,age,position){
    this.name = name;
    this.id = id;
    this.age = age;
    this.position = position;
}

//Prototype = Object Constructor
empDetails.prototype.getName = function(){
    return this.name;
}
empDetails.prototype.getId = function(){
    return this.id;
}
empDetails.prototype.getAge = function(){
    return this.age;
}
empDetails.prototype.getPosition = function(){
    return this.position;
}

let emp1 = new empDetails('John',"A0001",30,'Manager');
let emp2 = new empDetails('Jane',"A0002",25,'Web Developer');
let emp3 = new empDetails('Bob',"A0003",35,'Software Engineer');

// console.log("Employee 1: " + emp1.name + " " + emp1.id + " " + emp1.age + " " + emp1.position);
// console.log("Employee 2: " + emp2.name + " " + emp2.id + " " + emp2.age + " " + emp2.position);
// console.log("Employee 3: " + emp3.name + " " + emp3.id + " " + emp3.age + " " + emp3.position);


console.log("Employee 1: ")
console.log("Name: " + emp1.getName()); // บรรทัดที่ 9 getName() จะแสดงค่าของ name ของ emp1
console.log("ID: " + emp1.getId());
console.log("Age: " + emp1.getAge());
console.log("Position: " + emp1.getPosition());