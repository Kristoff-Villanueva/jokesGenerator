import React from "react";
import ColorHash from "color-hash";
import { getCategories, getJokes } from "../utils";
import "../App.css";

function Category(props) {
	const [allJokes, setAllJokes] = React.useState([]);
	const [categories, setCategories] = React.useState([]);
	const [buttonElementsLess, setButtonElementsLess] = React.useState([]);
	const [buttonElementsFull, setButtonElementsFull] = React.useState([]);
	const [categoriesShowAll, setCategoriesShowAll] = React.useState(false);
	const [matchingCategory, setMatchingCategory] = React.useState([]);
	const [jokesValue, setJokesValue] = React.useState([]);

	React.useEffect(() => {
		getJokes().then((data) => setAllJokes(data));
	}, []);

	React.useEffect(() => {
		getCategories().then((data) => {
			setCategories(data);
		});
	}, []);

	React.useEffect(() => {
		const colorHash = new ColorHash();
		const categoryButtons = categories.map(function (category) {
			return (
				<button
					style={{ backgroundColor: colorHash.hex(category) }}
					className="button-categories"
					key={category}
					onClick={handleCategoryClick}
				>
					{category}
				</button>
			);
		});
		setButtonElementsLess(categoryButtons.slice(0, 6));
		setButtonElementsFull(categoryButtons);
	}, [allJokes]);

	React.useEffect(() => {
		let allJokesValue = allJokes.map(function (joke) {
			return joke.value.split(" ");
		});
		let matchedValue = allJokesValue.filter(function (joke) {
			return allJokesValue.indexOf(joke.includes(props.inputText));
		});
		// setJokesValue(matchedValue);
		console.log(matchedValue);
	}, [props.inputText]);

	function handleCategoryClick(event) {
		let chosenJokes = allJokes.filter(function (joke) {
			return joke.categories.includes(event.target.textContent);
		});
		let final = chosenJokes.map((joke) => (
			<div className="joke-div" key={joke.value}>
				<p>{joke.value}</p>
			</div>
		));
		setMatchingCategory(final);
		console.log(final);
	}

	function handleClick() {
		setCategoriesShowAll((prevState) => !prevState);
	}

	return (
		<div className="category">
			<div className="category-btn">
				{categoriesShowAll ? buttonElementsFull : buttonElementsLess}
				<button className="view-more" onClick={handleClick}>
					{categoriesShowAll ? "See Less⬆️" : "View More⬇️"}
				</button>
			</div>
			<div className="jokes-container">{matchingCategory}</div>
		</div>
	);
}

export default Category;
