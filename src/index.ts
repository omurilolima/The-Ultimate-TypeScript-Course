enum Size {
	Small = 1,
	Medium,
	Large,
}

// Enum uses PascalCase
// If you define an enum using the "const" keyword, the compiler will
// generate more optimized code.
let mySize: Size = Size.Medium;
console.log(mySize);
