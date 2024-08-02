function Header() {
	return (
		<header className="py-2 px-4 border-b dark:border-neutral-800 flex gap-4 justify-between">
			<div className="font-medium px-2 rounded-full bg-zinc-200 dark:bg-neutral-800 flex items-center gap-2">
				<div className="i-lucide-book-text text-blue-500" />
				<span>
					Gremix<span className="text-secondary">/Stories</span>
				</span>
			</div>
		</header>
	);
}

export { Header };
