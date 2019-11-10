import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./data";
import { composeWithDevTools } from "redux-devtools-extension";
import middleware from "./data/middleware";
import Router from "./components/router";

function Provider() {
	return (
		<ReduxProvider
			store={createStore(
				rootReducer,
				composeWithDevTools(applyMiddleware(middleware))
			)}
		>
			<Router />
		</ReduxProvider>
	);
}

export default Provider;
