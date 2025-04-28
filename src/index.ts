class Account {
	nickname?: string; // optional property

	// CONSTRUCTOR

	// when we declate a parameter, we can prefix it with an access modifier
	// like PUBLIC or PRIVATE, and this tells the compiler to create a propertu by this name
	// and initialize it in one go. We can also use the READONLY keyword.

	constructor(
		public readonly id: number,
		public owner: string,
		private _balance: number
	) {}
	// METHODS
	deposit(amount: number): void {
		if (amount <= 0) throw new Error("Invalid amount");
		this._balance += amount;
	}

	get balance(): number {
		return this._balance;
	}
}

let account = new Account(1, "Mosh", 0);
console.log(account.balance);
