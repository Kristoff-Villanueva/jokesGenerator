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
	const [categoryBtn, setCategoryBtn] = React.useState("");

	React.useEffect(() => {
		getJokes().then((data) => setAllJokes(data));
		console.log(allJokes);
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
	}, [categories]);

	function handleCategoryClick(event) {
		setCategoryBtn(event.target.textContent);
	}

	function handleClick() {
		setCategoriesShowAll((prevState) => !prevState);
	}

	return (
		<div className="category">
			<div>
				{categoriesShowAll ? buttonElementsFull : buttonElementsLess}
				<button className="view-more" onClick={handleClick}>
					{categoriesShowAll ? "See Less⬆️" : "View More⬇️"}
				</button>
			</div>
			{categoryBtn}
		</div>
	);
}

export default Category;
