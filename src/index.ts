// Interfaces vs Types
// In TypeScript, interfaces and type aliases can be used interchangeably.
// Both can be used to describe the shape of an object:

// INTERFACE
interface Person {
	name: string;
}
let person: Person = {
	name: "Mosh",
};

// TYPE;
type PersonT = {
	name: string;
};
let persont: Person = {
	name: "Mosh",
};

// It’s more conventional to use an interface in front of the extends keyword, though.
