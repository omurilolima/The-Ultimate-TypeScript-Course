// If a the calendar class is not providing any logic or algorithm
// that subclasses can reuse.  So, in this case, it's better to use an interface.
// because the code will end up being more concise and shorter both in
// Typescript and Javascript

interface Calendar {
	name: string;
	addEvent(): void;
	removeEvent(): void;
}
// In constrast, if you had some logic, algorithm or method with a few lines
// and you wanted to share that code amongst subclasses, then you couldn't use
// an interface because they can not have methods impementations.

// abstract class Calendar {
// 	constructor(public name: string) {}
// 	abstract addEvent(): void;
// 	abstract removeEvent(): void;
// }

// Interfaces can be extended using the "implements" keyword

class GoogleCalendar implements Calendar {
	constructor(public name: string) {}

	addEvent(): void {
		throw new Error("Method not implemented.");
	}
	removeEvent(): void {
		throw new Error("Method not implemented.");
	}
}
