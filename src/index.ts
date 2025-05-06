function MinLenght(lenght: number) {
	return (target: any, propertyName: string) => {
		let value: string;

		const descriptor: PropertyDescriptor = {
			get() {
				return value;
			},

			set(newValue: string) {
				if (newValue.length < lenght)
					throw new Error(
						`${propertyName} should be at least ${lenght} characters long.`
					);
				value = newValue;
			},
		};
		Object.defineProperty(target, propertyName, descriptor);
	};
}

class User {
	@MinLenght(4)
	password: string;

	constructor(password: string) {
		this.password = password;
	}
}

let user = new User("1245");
console.log(user.password);
