import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Map from "screens/Map";

const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/'>
					<Map />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
