import clsx from "clsx";
import {
	NavLink,
	Outlet,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import { pages } from "stories/pages";
import { Header } from "./header";

function Index() {
	return (
		<main className="flex flex-col h-screen">
			<Header />

			<div className="flex flex-1">
				<div className="w-20rem border-e dark:border-neutral-800">
					<header className="px-2">
						<span className="ms-2 text-secondary text-sm font-mono">
							{pages.length} stories
						</span>
					</header>

					<ul className="mx-2">
						{pages.map((it) => (
							<li key={it.name}>
								<NavLink
									className={({ isActive }) =>
										clsx("hover:bg-zinc-200 flex px-2 py-1 rounded-lg", {
											"bg-zinc-200 dark:bg-neutral-800": isActive,
											"text-secondary": !isActive,
										})
									}
									to={it.name}
								>
									{it.name}
								</NavLink>
							</li>
						))}
					</ul>
				</div>

				<div className="flex-1 flex flex-col justify-center items-center bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#525252_1px,transparent_1px)]">
					<Outlet />
				</div>
			</div>
		</main>
	);
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <Index />,
		children: pages.map((Page) => ({
			path: `${Page.name}`,
			element: <Page />,
		})),
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export { App };
