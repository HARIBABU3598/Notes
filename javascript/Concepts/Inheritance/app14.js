class Animal{
    eat(){
        console.log(`The ${this.name} is eating`);
    }
    sleep(){
        console.log(`The ${this.name} is sleeping`);
    }
}
class Lion extends Animal{
    name="Lion";
    hunt(){
        console.log(`The ${this.name} is hunting`);
    }
}
class Deer extends Animal{
    name="Deer";
    run(){
        console.log(`The ${this.name} is running`);
    }
}
const lion=new Lion();
const deer=new Deer();
lion.hunt();
deer.run();
lion.eat();
deer.eat();
