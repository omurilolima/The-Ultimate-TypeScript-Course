class Person {
	constructor(public name: string) {}
}

class Customer extends Person {}
class Client extends Person {}

// Use extends to define that echo needs to receive  a expecific type
// In this exemple, echo receives any object that is a Person

function echo<T extends Person>(value: T): T {
	return value;
}

echo({ name: "a" });
echo(new Person("a"));
echo(new Customer("a"));
echo(new Client("a"));
