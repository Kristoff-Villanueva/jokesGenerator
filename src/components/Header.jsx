import React from "react";

function Header(props) {
	return (
		<div className="header">
			<h1>The Joke Bible</h1>
			<p>Daily Corny Jokes for You & Me</p>
			<input
				onChange={props.getInputText}
				type="text"
				placeholder="How can we make you laugh today?"
				className="search-input"
			/>
		</div>
	);
}

export default Header;
