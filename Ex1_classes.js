class Employee {
    constructor(name,id ,age,position){
        this.name = name;
        this.id = id;
        this.age = age;
        this.position = position;
    }
}

let emp1 = new Employee('John',"A0001",30,'Manager');
let emp2 = new Employee('Jane',"A0002",25,'Web Developer');
let emp3 = new Employee('Bob',"A0003",35,'Software Engineer');

console.log("Employee 1: " + emp1.name + " " + emp1.id + " " + emp1.age + " " + emp1.position);
console.log("Employee 2: " + emp2.name + " " + emp2.id + " " + emp2.age + " " + emp2.position);
console.log("Employee 3: " + emp3.name + " " + emp3.id + " " + emp3.age + " " + emp3.position);