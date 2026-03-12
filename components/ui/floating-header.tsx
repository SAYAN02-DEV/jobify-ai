import React from 'react';
import Link from 'next/link';
import { Grid2x2PlusIcon, MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function FloatingHeader() {
	const [open, setOpen] = React.useState(false);

	const links = [
		{
			label: 'How It Works',
			href: '#',
		},
		{
			label: 'Jobs',
			href: '#',
		},
		{
			label: 'For Recruiters',
			href: '#',
		},
		{
			label: 'Pricing',
			href: '#',
		},
	];

	return (
		<header
			className={cn(
				'fixed top-5 left-1/2 z-50 w-full max-w-6xl -translate-x-1/2 px-4',
				'text-white',
			)}
		>
			<nav className="relative mx-auto flex items-center justify-between rounded-2xl border border-white/10 bg-neutral-950/85 px-2 py-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
				<div className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-rose-400/70 to-transparent" />
				<Link
					href="/home"
					className="group flex items-center gap-2 rounded-xl px-3 py-2 transition-colors hover:bg-white/5"
				>
					<span className="flex size-8 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-rose-300">
						<Grid2x2PlusIcon className="size-4" />
					</span>
					<div className="flex flex-col leading-tight">
						<p className="font-mono text-[13px] font-bold tracking-wide text-white">Jobify AI</p>
						<p className="text-[10px] uppercase tracking-[0.18em] text-white/55">Career Match Engine</p>
					</div>
				</Link>
				<div className="hidden items-center gap-1 lg:flex">
					{links.map((link) => (
						<a
							key={link.label}
							className="rounded-lg px-3 py-2 text-sm text-white/75 transition-colors hover:bg-white/6 hover:text-white"
							href={link.href}
						>
							{link.label}
						</a>
					))}
				</div>
				<div className="flex items-center gap-2">
					<Button
						size="sm"
						variant="ghost"
						className="hidden text-white/85 hover:bg-white/10 hover:text-white sm:inline-flex"
					>
						Sign In
					</Button>
					<Button
						size="sm"
						className="border border-rose-300/40 bg-rose-400/20 text-white shadow-[0_0_0_1px_rgba(251,113,133,0.2)_inset] hover:bg-rose-400/30"
					>
						Get Started
					</Button>
					<Sheet open={open} onOpenChange={setOpen}>
						<Button
							size="icon"
							variant="outline"
							onClick={() => setOpen(!open)}
							className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white lg:hidden"
						>
							<MenuIcon className="size-4" />
						</Button>
						<SheetContent
							className="gap-0 border-white/10 bg-neutral-950/95 text-white backdrop-blur-xl"
							side="right"
						>
							<div className="grid gap-y-2 overflow-y-auto px-4 pb-5 pt-12">
								{links.map((link) => (
									<a
										key={link.label}
										className="rounded-lg px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/6 hover:text-white"
										href={link.href}
										onClick={() => setOpen(false)}
									>
										{link.label}
									</a>
								))}
							</div>
							<SheetFooter className="border-white/10 bg-white/[0.02]">
								<Button variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
									Sign In
								</Button>
								<Button className="border border-rose-300/40 bg-rose-400/20 text-white hover:bg-rose-400/30">
									Get Started
								</Button>
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</div>
			</nav>
		</header>
	);
}
