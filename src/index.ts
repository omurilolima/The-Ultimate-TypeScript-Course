interface Product {
	name: string;
	price: number;
}

// Defining a Generic Classes

class Store<T> {
	// Here we don't need a constructor because we are initializing (to an empty array)
	// We are defining it as protected to prevent objects of beeing reassigned out of a class
	// and inherited in child classes
	protected _objects: T[] = [];

	add(obj: T): void {
		this._objects.push(obj);
	}
}

// EXTENDING GENERIC CLASSES

// Case 1 - Passing on the generic type parameter
// The type passed for base class is also going to be used in the child class (e.g: Product)
class CompressibleStore<T> extends Store<T> {
	compress() {}
}

// Case 2 - Restricting the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
	find(name: string): T | undefined {
		return this._objects.find((obj) => obj.name === name);
	}
}

// Case 3 - Fix the generic type parameter
class ProductStore extends Store<Product> {
	filterByCategory(category: string): Product[] {
		return [];
	}
}
