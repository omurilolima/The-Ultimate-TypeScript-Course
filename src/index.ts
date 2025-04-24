// Union types are use to receive more than one type for the same parameter
function kgToLbs(weight: number | string): number {
	// narrowing
	if (typeof weight === "number") return weight * 2.2;
	else return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10kg");
