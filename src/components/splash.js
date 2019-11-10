import React from "react";
import { useSpring, animated, interpolate } from "react-spring";

export default function Splash() {
	const props = useSpring({
		backgroundColor: "green",
		width: "100%",
		height: 3,
		from: { width: "0%" },
		config: {
			duration: 2000
		}
	});

	return (
		<div>
			<animated.div style={props}></animated.div>
			<h1 className="text-center">Hello fellow human</h1>
		</div>
	);
}
