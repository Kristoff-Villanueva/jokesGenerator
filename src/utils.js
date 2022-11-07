// get categories
async function getCategories() {
	let response = await fetch("https://api.chucknorris.io/jokes/categories");
	let data = await response.json();
	return data;
}
export { getCategories };
