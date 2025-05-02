// DECORATOR - A function that is called by the JavaScript runtime

// Depending on where we are going to apply this decorator,
// the number and type parameters varies.
// If we're going to apply on a CLASS, we should have a single
// parameter that represents the CONSTRUCTOR function.

// We can call it anything, but, by convention it's better to call it "constructor".
// If the type is a function, the runtime assumes that we're going to apply this
// on a class. And this represents our constructor function.

function Component(constructor: Function) {
	// Here we can modify or enhance our class
	console.log("Component decorator called");

	// We can add new properties and methods in the PROTOTYPE. Then, all classes
	// that has this decorator will inherit those new properties and methods.
	constructor.prototype.uniqueId = Date.now();
	constructor.prototype.insertInDOM = () => {
		console.log("Inserting the component in the DOM");
	};
}

@Component
class ProfileComponent {}
