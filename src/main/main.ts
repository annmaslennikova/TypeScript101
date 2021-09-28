function sum(left: number, right: number): number {
    return left + right;
}

var sumResult = sum(1, 2);


function greeter(name: string, age: number) {
    var greetString: string = "Hello " + name + ". Congratulation on being " + age + " years old";

    console.log(greetString);
}

greeter("Ivan", 100);

console.log("Test");

class Dog {

    name: string;

    breed: string;

    constructor(name: string, breed: string) {
        this.name = name;
        this.breed = breed;
    }

    bark() {
        console.log(this.name + " says: Bark bark");
    }

    getName(): string {
        return this.name;
    }

}

var someDog: Dog = new Dog("Bobik", "Shepherd");

someDog.bark();

var anotherDog: Dog = new Dog("Sharik", "Unknown");

anotherDog.bark();

var firstName = someDog.getName();

console.log(firstName);


for (var i = 0; i < 10; i++) {
    console.log("I is " + i);
    // i = i + 1; same as i++ or i += 1
}

var array = [1, 2, 3, 4, "blabla"];

// var emptyArray = [];
// emptyArray.push(12);

for (var i = 0; i < array.length; i++) {
    var element = array[i];
    console.log(element);
}

class Apartment {

    address: string;

    space: number;

    roomCount: number;

    hasOwner: boolean;

    constructor(address: string, space: number, rooms: number, hasOwner: boolean) {
        this.address = address;
        this.space = space;
        this.roomCount = rooms;
        this.hasOwner = hasOwner;
    }

    isAvailable() {
        return this.hasOwner;
    }

    hasEnoughSpace(desiredSpace: number): boolean {
        var result: boolean = this.space > desiredSpace;

        return result;
    }

}

var apartment: Apartment = new Apartment("Pushkina 1", 100, 3, true);

console.log(apartment.isAvailable());

console.log(apartment.hasEnoughSpace(150));

var myObject = {
    name: "asdasdas"
};

console.log(myObject.name);

function twoNumberFunction(arg1: string, arg2: string) {
    return {
      len1: arg1.length,
      len2: arg2.length
    };
}

var result = twoNumberFunction("foobar", "test");
console.log("len1 = " + result.len1);
console.log("len2 = " + result.len2);

var dictionary: any = {};
dictionary["test"] = 123;
dictionary["name"] = "Jack";

console.log(dictionary["name"]);

var kitchen: any = {};

kitchen["tomato"] = 30;
kitchen["apple"] = 50;
kitchen["potato"] = 100;

dictionary["name"] = "Pete";

console.log(dictionary["name"]);

var dictionaryKeys = Object.keys(dictionary);
console.log(dictionaryKeys);

for (var i = 0; i < dictionaryKeys.length; i++) {
    let key = dictionaryKeys[i];
    console.log(dictionary[key]);
}
