class Account {
	// When we declare properties, all the properties are public by default
	// so, we dont have to use the public key word right here.
	readonly id: number; // read-only property
	owner: string;
	// When we use the PRIVATE keyword, it becomes only accessible within the class.
	// By convention we start the private property name with an undercore
	private _balance: number;
	nickname?: string; // optional property

	// CONSTRUCTOR
	constructor(id: number, owner: string, balance: number) {
		this.id = id;
		this.owner = owner;
		this._balance = balance;
	}
	// METHODS
	// Private keyword can also be used to create methods that are not accessible from the outside
	deposit(amount: number): void {
		if (amount <= 0) throw new Error("Invalid amount");
		this._balance += amount;
	}
	// If you want to display a private property value to the user
	// you need to create a method like this:
	getBalance(): number {
		return this._balance;
	}
}

let account = new Account(1, "Mosh", 0);
console.log(account.getBalance());
