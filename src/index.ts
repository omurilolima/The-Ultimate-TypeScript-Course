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

let student = new Student("Jose", "Smith");
let teacher = new Teacher("John", "Smith");

console.log(teacher.fullName);
