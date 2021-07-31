import { FC, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { GeneralLayout, Loader } from "components";

/** Screens are being lazy loaded for performance optimization */
const Home = lazy(() => import("screens/Home"));

const App: FC = () => {
	return (
		<Suspense fallback={<Loader />}>
			<Switch>
				<Route
					path="/"
					exact
					render={(props) => (
						<GeneralLayout {...props}>
							<Home />
						</GeneralLayout>
					)}
				/>
			</Switch>
		</Suspense>
	);
};

export default App;
