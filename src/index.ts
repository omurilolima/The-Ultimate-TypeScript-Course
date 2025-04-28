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
	constructor(studentId: number, firstName: string, lastName: string) {
		super(firstName, lastName);
	}

	// METHODS
	takeTest() {
		console.log("Taking a test");
	}
}

// Creating a Student object
let student = new Student(1, "John", "Malkovich");
