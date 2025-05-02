// To apply a decorator on a method, we need three parameters
// 		1. The object that owns the target method.
// 		2. The name of the target method
// 		3. The descriptor object or the target method

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
	// Here we can replace or enhance the original method
	const original = descriptor.value as Function;

	// The spread operator pass all the arguments to the original function
	descriptor.value = function (...args: any) {
		console.log("Before");
		original.call(this, ...args); // Calling the original function
		console.log("After");
	};
}

class Person {
	@Log
	say(message: string) {
		console.log("Person says " + message);
	}
}

let person = new Person();
person.say("Hello");

// More about TypeScript Decorators at https://www.typescriptlang.org/docs/handbook/decorators.html
