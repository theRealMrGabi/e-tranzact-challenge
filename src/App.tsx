import { FC, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { GeneralLayout, Loader, AuthLayout } from "components";

/** Screens are being lazy loaded for performance optimization */
const Home = lazy(() => import("screens/Home"));
const ProductPage = lazy(() => import("screens/Products"));

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
				<Route
					path="/products"
					exact
					render={(props) => (
						<AuthLayout {...props}>
							<ProductPage />
						</AuthLayout>
					)}
				/>
			</Switch>
		</Suspense>
	);
};

export default App;
