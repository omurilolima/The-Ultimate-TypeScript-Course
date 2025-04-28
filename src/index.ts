// WRONG APPROACH
// Here we are dealing with two separate objects
// and each object has a separate space in memory.
// So each object is independently tracking the active rides.
// Thats why this approach does not work.

// class Ride {
// 	activeRides: number = 0;

// 	start() {
// 		this.activeRides++;
// 	}
// 	stop() {
// 		this.activeRides--;
// 	}
// }

// let ride1 = new Ride();
// ride1.start();

// let ride2 = new Ride();
// ride2.start();

// console.log(ride1.activeRides);
// console.log(ride2.activeRides);

// RIGHT APPROACH
// Here we need to define a static property and now the property belongs to
// the Ride class and not to the ride object
class Ride {
	private static _activeRides: number = 0; // private and static property
	start() {
		Ride._activeRides++;
	}
	stop() {
		Ride._activeRides--;
	}
	static get activeRides() {
		// static method
		return Ride._activeRides;
	}
}

let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);

// When you make a property or a method static, that property or method becomes
// part of a class and will have only a single instance of them in memory.
