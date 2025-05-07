// The name of the file should be the same as the
// corresponding JavaScript file. But the extension should be "d.ts"
// Here we declare all the features of the target module.

export declare function calculateTax(income: number): number;

// When we export this declaration, the TypeScript compiler will
// know that the calculateTax function expects an income parameter
// of type number.

// NOTE
// When using this approach, you should describe all the features
// in the target module. Anything you don't describe will be invisible
// to the compiler.
