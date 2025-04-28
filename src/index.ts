class Account {
	nickname?: string; // optional property

	// CONSTRUCTOR
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
	getBalance(): number {
		return this._balance;
	}
}

let account = new Account(1, "Mosh", 0);
console.log(account.getBalance());
