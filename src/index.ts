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

	// IF T is Product
	// keyof T is gonna return 'name' | 'price'
	find(property: keyof T, value: unknown): T | undefined {
		return this._objects.find((obj) => obj[property] === value);
	}
}

let store = new Store<Product>();
store.add({ name: "a", price: 1 });
store.find("name", "a");
store.find("price", "1");
