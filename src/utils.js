// get categories
async function getCategories() {
	let response = await fetch("https://api.chucknorris.io/jokes/categories");
	let data = await response.json();
	return data;
}

async function getJokes() {
	let response = await fetch(
		"https://api.chucknorris.io/jokes/search?query=all"
	);
	let data = await response.json();
	return data.result;
}

export { getCategories, getJokes };
