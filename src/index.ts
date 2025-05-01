// TYPE MAPPING
//  Sometimes, we need to base a type on another type.
// This is called type mapping. For exemple, here we have
// the product interface with two properties.

interface Product {
	name: string;
	price: number;
}

// What if somewhere else in our application, we need a product with
// Read Only properties?

// We start with type keyword. Because here we have to create a type alias.
// So we cannot use an interface.

type ReadOnly<T> = {
	// Instead of hard coding these property names, we're going to use
	// the Index signature syntax to dynamically add properties
	// And using the keyof operator, we're going to dynamically get
	// the properties of the properties of the product type.
	// And make all of them read only in one go. This is what we call Type Mapping
	readonly [K in keyof T]: T[K];
};

// Now we can create a ReadOnly Product or any other object
let product: ReadOnly<Product> = {
	name: "a",
	price: 1,
};

// Similarly we can create another Product type with OPTIONAL properties
type Optional<T> = {
	[K in keyof T]?: T[K];
};

// Similarly we can create another Product type with NULLABLE properties
type Nullable<T> = {
	[K in keyof T]: T[K] | null;
};

// TyperScript has many utility types like these. You can find more about it at https://www.typescriptlang.org/docs/handbook/utility-types.html
