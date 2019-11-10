import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import Versions from "./versions";

export default function Env() {
	return (
		<div>
			<Versions />
		</div>
	);
}
