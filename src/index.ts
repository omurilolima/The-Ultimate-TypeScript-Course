let speed: number | null = null;
let ride = {
	// Falsy (undefined, null, '', false, 0)
	// example: speed: speed || 30
	// Nullish Coalescing operator (??) is used when
	// the values can be null or undefined.
	speed: speed ?? 30,
};
