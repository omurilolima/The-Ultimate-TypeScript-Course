type Customer = {
	birthday?: Date;
};

function getCustomer(id: number): Customer | null {
	return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// Optional property operator "?"
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
//  customer?.[0]

// Optional call
let log: any = null;
log?.("a");
