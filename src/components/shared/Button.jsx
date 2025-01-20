import React from "react";

function Button({ children, handleClick }) {
	return (
		<button className="btn" onClick={handleClick}>
			{children}
		</button>
	);
}

export { Button };
