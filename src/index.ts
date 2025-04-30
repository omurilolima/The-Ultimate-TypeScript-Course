// POLYMORPHISM
// 		Is one of the core principles of OOP
// 		It means to "many forms" and this refers to the situation
// 		where and object can take many different forms.
// 		In this exemple, the printNames function receives a Person object
// 		that can be a Studet, Teach or Principal

// OPEN CLOSED PRINCIPLE
// 		Classes should be OPEN for extension and CLOSED for modification.
// 		In this exemple, we can add another class that extends from Person
// 		without the need of modifying the printNames function.

class Person {
	//  CONSTRUCTOR
	constructor(public firstName: string, public lastName: string) {}

	// METHODS
	get fullName() {
		return this.firstName + " " + this.lastName;
	}
	walk() {
		console.log("Walking");
	}
}

// Use the EXTENDS keyword to tell that student class
// inherit everything from the Person class

class Student extends Person {
	//  CONSTRUCTOR
	constructor(firstName: string, lastName: string) {
		super(firstName, lastName);
	}

	// METHODS
	takeTest() {
		console.log("Student: " + "Taking a test");
	}
}

class Teacher extends Person {
	override get fullName() {
		return "Professor " + super.fullName;
	}
}

class Principal extends Person {
	override get fullName() {
		return "Principal " + super.fullName;
	}
}

printNames([
	new Student("John", "Smith"),
	new Teacher("Murilo", "Lima"),
	new Principal("Mosh", "Hamedani"),
]);

function printNames(people: Person[]) {
	for (let person of people) console.log(person.fullName);
}
