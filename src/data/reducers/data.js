export default function data(state = {}, action) {
	if (action.type === "fetched") {
		return action.payload;
	}

	return state;
}
