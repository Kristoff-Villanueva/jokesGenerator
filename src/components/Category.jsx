import React from "react";
import ColorHash from "color-hash";
import { getCategories } from "../utils";
import "../App.css";

function Category() {
	const [categories, setCategories] = React.useState([]);
	const [buttonElementsLess, setButtonElementsLess] = React.useState([]);
	const [buttonElementsFull, setButtonElementsFull] = React.useState([]);
	const [categoriesShowAll, setCategoriesShowAll] = React.useState(false);

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
				>
					{category}
				</button>
			);
		});
		setButtonElementsLess(categoryButtons.slice(0, 6));
		setButtonElementsFull(categoryButtons);
	}, [categories]);

	function handleClick() {
		setCategoriesShowAll((prevState) => !prevState);
	}

	return (
		<div>
			{categoriesShowAll ? buttonElementsFull : buttonElementsLess}
			<button className="view-more" onClick={handleClick}>
				{categoriesShowAll ? "See Less" : "View More"}
			</button>
		</div>
	);
}

export default Category;
