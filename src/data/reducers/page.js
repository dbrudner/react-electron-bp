export default function page(state = "splash", action) {
	if (action.type === "navigate") {
		return action.payload;
	}

	if (action.type === "fetched") {
		return "main";
	}

	return state;
}
