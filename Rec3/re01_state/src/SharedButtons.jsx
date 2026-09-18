// TODO: Add the SharedButtons component to this file such that
// it initializes two SharedButton components that share a count, which is
// passed via props.

import {useState} from "react";
import SharedButton from "./SharedButton.jsx";

export default function SharedButtons() {
	// Replace the div below with the necessary JSX
	const [count, setCount] = useState(0);

	function handleClick() {
		setCount(count + 1);
	}
	return (
		<div>
			<h1>Counters that update together</h1>
			<SharedButton count={count} onClick={handleClick}/>
			<SharedButton count={count} onClick={handleClick}/>
		</div>
	);
}