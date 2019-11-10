import fetch from "./fetch";

export default store => next => async action => {
	if (action.type === "fetch") {
		// add error handling
		next({ type: "fetched", payload: await fetch(action.payload) });
	}

	next(action);
};
