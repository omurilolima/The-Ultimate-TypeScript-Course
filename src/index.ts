class KeyValuePair<K, V> {
	constructor(public key: K, public value: V) {}
}

// With generic classes we do not need to specify the type of each argument
let pair = new KeyValuePair(1, "a");
