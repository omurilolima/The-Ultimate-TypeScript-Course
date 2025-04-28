"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("Walking");
    }
}
class Student extends Person {
    constructor(firstName, lastName) {
        super(firstName, lastName);
    }
    takeTest() {
        console.log("Student: " + "Taking a test");
    }
}
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
let student = new Student("Jose", "Smith");
let teacher = new Teacher("John", "Smith");
console.log(teacher.fullName);
//# sourceMappingURL=index.js.map