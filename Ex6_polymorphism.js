let Animal = function(){};

    Animal.prototype.says = function(){
        return " I am an animal";
    }

    let Dog = function(){};
    Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.says = function(){
        return " I am a dog";
    }

    let Cat = function(){};
    Cat.prototype = Object.create(Animal.prototype);
    Cat.prototype.says = function(){
        return " I am a cat";
    }

    let Tiger = function(){};
    Tiger.prototype = Object.create(Animal.prototype);
    Tiger.prototype.says = function(){
        return " I am a tiger";
    }

    let Buffalo = function(){};
    Buffalo.prototype = Object.create(Animal.prototype);
    Buffalo.prototype.says = function(){
        return " I am a buffalo";
    }
    //Polymorphism
    //overriding -> inheritance extends
    //Overloading -> Parameters
    let animal=[new Animal(),new Dog(),new Cat(),new Tiger(),new Buffalo()];
    for(let i=0;i<animal.length;i++){
        console.log(animal[i].says());
    }