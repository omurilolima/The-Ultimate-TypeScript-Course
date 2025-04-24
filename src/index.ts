// As a best practice, we should always properly annotate our functions
// For a better experience, in the tsconfig.json uncomment
// noUnusedParameters , noUnusedLocals and noImplicitReturns

// If you supplie a default value for a parameter, it will be optional when calling that function
function calculateTax(income: number, taxYear = 2022): number {
	if (taxYear < 2022) return income * 1.2;
	return income * 1.3;
}

// If you pass a value for an optional parameter, it will override the default value
calculateTax(10_000, 2023);
