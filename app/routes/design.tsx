import clsx from "clsx";
import { NavLink, Outlet } from "react-router";
import { directory } from "~/lib/design-system";

export const meta = () => {
	return [{ title: "design system" }];
};

export default function Design() {
	return (
		<div className="h-full">
			<nav className="flex flex-col w-20rem h-full p-4">
				<ul className="flex flex-col p-4 bg-stone-200/30 h-full rounded-xl">
					<header className="mb-4">
						<h2 className="font-bold">GR/UI</h2>
            <p className="text-secondary text-sm">handcrafted bespoke components</p>
					</header>
					{directory.map((it) => (
						<li key={it.id}>
							<NavLink
								className={({ isActive }) =>
									clsx(
										"flex opacity-60 rounded-full hover:bg-stone-200/60 px-3 py-2",
										{ "!opacity-100 bg-stone-200": isActive },
									)
								}
								to={`/design/${it.id}`}
							>
								{it.title}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
			<div>
				<Outlet />
			</div>
		</div>
	);
}
