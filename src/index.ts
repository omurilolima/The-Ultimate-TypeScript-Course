//  http://mywebsite.com/users
//  http://mywebsite.com/products

// Create an Interface to store the result of calling an API endpoint
// T | null is used because we may not necessarily get the data
// T | null is used because we may not necessarily get an error

interface Result<T> {
	data: T | null;
	error: string | null;
}

function fetch<T>(url: string): Result<T> {
	return { data: null, error: null };
}

interface User {
	username: string;
}

interface Product {
	title: string;
}

let result = fetch<Product>("url");
result.data?.title;

let result2 = fetch<User>("url");
result2.data?.username;
