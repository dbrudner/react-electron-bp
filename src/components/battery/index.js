import React from "react";
import { useSelector } from "react-redux";

export default function Battery() {
	const {
		battery: { hasbattery, ischarging, percent }
	} = useSelector(state => state.data);

	if (!hasbattery) {
		return null;
	}

	return (
		<div className="float-right">
			<span>{percent}%</span>
			{ischarging && (
				<img
					className="inline-block"
					src="/static/lightning-outline-filled.png"
					width="18px"
				/>
			)}
		</div>
	);
}
