import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
	return [
		{ title: "Welcome to Greatness" },
		{ name: "description", content: "Just do it!" },
	];
};

export default function Index() {
	return (
		<div className="h-screen flex items-center justify-center">
			<div className="flex items-center gap-2">
			 <div className="i-svg-spinners-270-ring" />	Do great stuff!
			</div>
		</div>
	);
}
