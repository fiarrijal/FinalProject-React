import React from "react";

function Badge(props) {
	const { bgColor, value } = props;
	return (
		<div style={{ color: "#fff", padding: "2px 4px", borderRadius: "4px", backgroundColor: bgColor, display: "inline" }}>
			<span>{value}</span>
		</div>
	);
}

export default Badge;
