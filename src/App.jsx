import { useState } from "react";
import "./App.css";
import Category from "./components/Category";
import Header from "./components/Header";

function App() {
	const [inputText, setInputText] = useState("");
	function getInputText(event) {
		setInputText(event.target.value);
	}

	return (
		<div className="app">
			<Header getInputText={getInputText} />
			<Category inputText={inputText} />
		</div>
	);
}

export default App;
