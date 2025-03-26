import {Route, Routes} from "react-router";
import App from "../App";
import Events from "../pages/Events";
import Error404 from "../pages/Error404";
import Family from "../pages/Family";

const NavLinks = [
	{
		route: '/events',
		component: <Events />,
		displayText: 'events'
	},
	{
		route: '/family',
		component: <Family />,
		displayText: 'family'
	},
];

const RouterRenders = () => (
	<Routes>
		<Route path="/" component={<App />} />
		{NavLinks.map((link, index) => <Route key={index} path={link.route} element={link.component}/>)}
		<Route path="*" element={<Error404 />} />
	</Routes>
)

export {NavLinks, RouterRenders};