import React from "react";

export default function CPU({ cpu }) {
	const { brand, manufacturer, cores, physicalCores, vendor } = cpu;

	return (
		<div>
			<p>
				{manufacturer} {brand}
			</p>
			<p>{vendor}</p>
			<p>{cores} cores</p>
			<p>{physicalCores} physical cores</p>
		</div>
	);
}
