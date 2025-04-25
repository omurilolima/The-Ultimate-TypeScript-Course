class Account {
	// properties
	id: number;
	owner: string;
	balance: number;

	// constructor
	constructor(id: number, owner: string, balance: number) {
		this.id = id;
		this.owner = owner;
		this.balance = balance;
	}
	// methods
	deposit(amount: number): void {
		if (amount <= 0) throw new Error("Invalid amount");
		this.balance += amount;
	}
}

let account = new Account(1, "Mosh", 0);
account.deposit(100);
console.log(account.balance);
console.log(account instanceof Account);
