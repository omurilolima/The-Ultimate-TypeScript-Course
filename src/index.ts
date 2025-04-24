// Defining the shape of an Employee Object with type
type Employee = {
	readonly id: number;
	name: string;
	retire: (date: Date) => void;
};

// Anotate the object with the Employee type
let employee: Employee = {
	id: 1,
	name: "Murilo",
	retire: (date: Date) => {
		console.log(date);
	},
};
