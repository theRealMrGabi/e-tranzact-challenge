import { FC, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

/** Screens are being lazy loaded for performance optimization */
const Home = lazy(() => import("screens/Home"));

const App: FC = () => {
	const loading = <div>Loading . . .</div>;
	return (
		<Suspense fallback={loading}>
			<Switch>
				<Route path="/" exact component={Home} />
			</Switch>
		</Suspense>
	);
};

export default App;
