import { Button } from "~/components/button";
import { Input } from "~/components/input";

function Buttons() {
	return (
		<div>
			<div>
				<Button>Hello world</Button>
			</div>

			<div className="text-secondary">Real beautiful buttons</div>
		</div>
	);
}

function Inputs() {
	return (
		<div>
			<label>
				What's happening in 60 chars.
				<Input />
			</label>
		</div>
	);
}

export { Buttons, Inputs };
