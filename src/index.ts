function Capitalize(
	target: any,
	methodName: string,
	descriptor: PropertyDescriptor
) {
	// Get a reference to the original method
	const original = descriptor.get;
	// Redefine the getter
	descriptor.get = function () {
		const result = original?.call(this);
		return typeof result === "string" ? result.toUpperCase() : result;
	};
}

class Person {
	constructor(public firstName: string, public lastName: string) {}

	@Capitalize
	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

let person = new Person("murilo", "lima");
console.log(person.fullName);
