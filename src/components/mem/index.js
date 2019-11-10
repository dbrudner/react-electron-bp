import React from "react";

export default function Mem({
	formFactor,
	size,
	partNum,
	serialNum,
	manufacturer
}) {
	return (
		<div>
			<p>{manufacturer}</p>
			<p>Form factor: {formFactor}</p>
			<p>Size: {Math.floor(size / 1000000000)}gb</p>
			<p>Part number: {partNum}</p>
			<p>Serial number: {serialNum}</p>
		</div>
	);
}
