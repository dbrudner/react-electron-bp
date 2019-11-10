import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Main from "./main";
import Env from "./env";
import Splash from "./splash";

export default function Router() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: "fetch", payload: "/api/specs" });
	}, []);

	const page = useSelector(({ page }) => page);

	switch (page) {
		case "splash":
			return <Splash />;
		case "main":
			return <Main />;
		case "env":
			return <Env />;
		default:
			return "hey";
	}
}
