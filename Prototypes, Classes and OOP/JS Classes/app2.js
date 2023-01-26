class Pet
{
    constructor(name, age)
    {
        console.log("In pet constructor");
        this.name = name;
        this.age = age;
    }
    eat()
    {
        return `${this.name} is eating`;
    }
}

class Cat extends Pet 
{
    constructor(name, age, livesLeft = 9)
    {
        console.log("In cat constructor");
        super(name,age);
        this.livesLeft = livesLeft;
    }
    meow()
    {
        return 'Meow';
    }

}

class Dog extends Pet
{
    bark()
    {
        return 'Woof';
    }
    eat()
    {
        return `${this.name} scarfs the food`;
    }
}

// const monty = new Cat('Monty', 9)
// Monty.eat()

// can call eat from a dog and cat because of the extends from Pet
// if there is a local eat() it will use that one instead