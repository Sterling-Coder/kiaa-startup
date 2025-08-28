import React from 'react';

export default function LandingPage() {
	return (
		<div className="min-h-screen bg-white text-slate-800">
			{/* Header */}
			<header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200/60">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<a href="#home" className="flex items-center gap-3">
							<div className="h-9 w-9 rounded-xl bg-blue-600 text-white grid place-items-center font-bold shadow-sm">SB</div>
							<div className="leading-tight">
								<p className="font-semibold text-slate-900">SHREE BALA JI KIAA SCRAP RECYCLING</p>
								<p className="text-xs text-slate-500">AND FITNESS WORLD</p>
							</div>
						</a>
						<nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
							<a className="hover:text-blue-700" href="#about">About</a>
							<a className="hover:text-blue-700" href="#problem-solution">Problem & Solution</a>
							<a className="hover:text-blue-700" href="#offerings">Offerings</a>
							<a className="hover:text-blue-700" href="#market">Market</a>
							<a className="hover:text-blue-700" href="#business">Business Model</a>
							<a className="hover:text-blue-700" href="#team">Team</a>
							<a className="hover:text-blue-700" href="#contact">Contact</a>
						</nav>
					</div>
				</div>
			</header>

			<main id="home">
				{/* Hero */}
				<section className="relative overflow-hidden">
					<div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_60rem_at_top_right,rgba(37,99,235,0.08),transparent_70%)]" />
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
						<div className="grid lg:grid-cols-2 gap-10 items-center">
							<div>
								<h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">Eco-friendly Mobility & Recycling Solutions</h1>
								<p className="mt-5 text-slate-600 text-base sm:text-lg max-w-xl">
									Enabling mobility and independence for persons with disabilities through certified, eco-friendly e-vehicles, integrated certification support, and responsible recycling services.
								</p>
								<div className="mt-8 flex flex-col sm:flex-row gap-3">
									<a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/50">Notify Me</a>
									<span className="inline-flex items-center rounded-xl border border-slate-200 px-5 py-3 text-slate-700 bg-white shadow-sm">Coming Soon</span>
								</div>
								<div className="mt-6 flex items-center gap-4 text-xs text-slate-500">
									<span>Government-certified</span>
									<span>•</span>
									<span>Accessible by design</span>
									<span>•</span>
									<span>Sustainable operations</span>
								</div>
							</div>
							<div className="relative">
								<div className="rounded-2xl bg-white border border-slate-200 shadow-xl p-6 sm:p-8">
									<div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 grid place-items-center text-center">
										<div>
											<p className="text-blue-700 font-semibold">Illustration Placeholder</p>
											<p className="text-sm text-slate-500">Accessible E-Vehicle & Recycling Ecosystem</p>
										</div>
									</div>
									<p className="mt-4 text-sm text-slate-500">Visuals and live demos are under maintenance.</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* About Us */}
				<section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
					<div className="grid lg:grid-cols-3 gap-8">
						<div className="lg:col-span-1">
							<h2 className="text-2xl sm:text-3xl font-bold text-slate-900">About Us</h2>
							<p className="mt-3 text-slate-600">SHREE BALA JI KIAA SCRAP RECYCLING AND FITNESS WORLD</p>
						</div>
						<div className="lg:col-span-2">
							<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
								<p className="text-slate-600">
									An innovative partnership firm dedicated to enabling mobility and independence for persons with disabilities through government-certified, eco-friendly e-vehicles. We design purpose-built vehicles and provide integrated support to facilitate certification and licensing. We also address vehicle scrap management, environmental pollution, and deliver accessible fitness and recycling solutions.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Problem & Solution */}
				<section id="problem-solution" className="bg-slate-50 border-y border-slate-200/70">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
						<div className="grid lg:grid-cols-2 gap-8">
							<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
								<h3 className="text-xl font-semibold text-slate-900">Problem</h3>
								<ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
									<li>Lack of eco-friendly vehicle options for disabled individuals</li>
									<li>Complicated certification and licensing processes</li>
									<li>Growing vehicle scrap management and environmental concerns</li>
									<li>Limited recycling and fitness solutions in urban and semi-urban areas</li>
								</ul>
							</div>
							<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
								<h3 className="text-xl font-semibold text-slate-900">Solution</h3>
								<ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
									<li>Design, manufacture, and supply certified e-vehicles and retro-fit kits</li>
									<li>Assist in obtaining Divyang certificates and disability driving licenses</li>
									<li>Provide modern scrap recycling services</li>
									<li>Deliver user-friendly, accessible vehicle fitness and mobility solutions</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				{/* Offerings */}
				<section id="offerings" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
					<h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Offerings</h2>
					<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{[
							{
								title: 'Certified Electric Vehicles',
								desc: 'Eco-friendly, approved vehicles tailored for differently-abled users.'
							},
							{
								title: 'Certification Assistance',
								desc: 'Help with Divyang certificates and disability driving licenses.'
							},
							{
								title: 'Vehicle Fitness & Maintenance',
								desc: 'Inspections, certifications, and ongoing upkeep.'
							},
							{
								title: 'Scrap Recycling',
								desc: 'Responsible treatment and disposal using modern technology.'
							},
							{
								title: 'Customer Support',
								desc: 'Dedicated after-sales service and community help.'
							},
							{
								title: 'More Services',
								desc: 'Under Maintenance'
							}
						].map((item, idx) => (
							<div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
								<div className="h-10 w-10 rounded-xl bg-blue-600/10 text-blue-700 grid place-items-center font-semibold">{idx + 1}</div>
								<h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
								<p className="mt-2 text-sm text-slate-600">{item.desc}</p>
							</div>
						))}
					</div>
				</section>

				{/* Market Opportunity */}
				<section id="market" className="bg-slate-50 border-y border-slate-200/70">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
						<div className="grid lg:grid-cols-2 gap-8">
							<div>
								<h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Market Opportunity</h2>
								<p className="mt-4 text-slate-600 max-w-prose">
									India has ~63 million disabled individuals (4.5% of the population, NFHS-5). Less than 1% currently have access to certified adapted vehicles. EV market size: $54.41B in 2025, expected to reach $110.7B by 2029 (CAGR ~19%). EV adoption expected to hit 30% by 2030. A huge unmet need exists for affordable, government-certified disabled-friendly EV solutions.
								</p>
							</div>
							<div className="grid sm:grid-cols-2 gap-6">
								{[
									{ label: 'Disabled Individuals (India)', value: '63M+' },
									{ label: 'Adapted Vehicle Access', value: '< 1%' },
									{ label: 'EV Market 2025', value: '$54.41B' },
									{ label: 'EV Market 2029 (CAGR~19%)', value: '$110.7B' }
								].map((stat, idx) => (
									<div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
										<p className="text-sm text-slate-500">{stat.label}</p>
										<p className="mt-2 text-2xl font-bold text-blue-700">{stat.value}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Business Model */}
				<section id="business" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
					<h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Business Model</h2>
					<div className="mt-8 grid lg:grid-cols-3 gap-6">
						<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
							<h3 className="text-lg font-semibold text-slate-900">Revenue Streams</h3>
							<ul className="mt-3 text-slate-600 list-disc list-inside space-y-1">
								<li>Vehicle sales</li>
								<li>Certification services</li>
								<li>Maintenance contracts</li>
							</ul>
						</div>
						<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
							<h3 className="text-lg font-semibold text-slate-900">Go-To-Market</h3>
							<ul className="mt-3 text-slate-600 list-disc list-inside space-y-1">
								<li>Partnerships with hospitals, NGOs, and government bodies</li>
								<li>Digital marketing campaigns</li>
								<li>Community outreach initiatives</li>
							</ul>
						</div>
						<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
							<h3 className="text-lg font-semibold text-slate-900">Status</h3>
							<p className="mt-3 text-slate-600">Additional details: Coming Soon</p>
						</div>
					</div>
				</section>

				{/* Team */}
				<section id="team" className="bg-slate-50 border-y border-slate-200/70">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
						<h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Team</h2>
						<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
							{[
								{ name: 'Chidi Eze', role: 'Co-Founder & CEO', blurb: 'Business strategy & leadership' },
								{ name: 'Ishan Rastogi', role: 'Co-Founder & Operations Head', blurb: 'Process management & operations' },
								{ name: 'Abhinav Rastogi', role: 'Co-Founder & Technical Lead', blurb: 'EV product design & innovation' },
								{ name: 'Akash Rastogi', role: 'Co-Founder & Marketing Director', blurb: 'Branding & customer relations' }
							].map((m, idx) => (
								<div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-center">
									<div className="mx-auto h-16 w-16 rounded-full bg-blue-600/10 text-blue-700 grid place-items-center font-semibold">{m.name.split(' ')[0][0]}{m.name.split(' ')[1]?.[0] ?? ''}</div>
									<p className="mt-4 font-semibold text-slate-900">{m.name}</p>
									<p className="text-sm text-blue-700">{m.role}</p>
									<p className="mt-2 text-sm text-slate-600">{m.blurb}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Contact */}
				<section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
					<div className="grid lg:grid-cols-3 gap-8">
						<div className="lg:col-span-1">
							<h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Contact Us</h2>
							<p className="mt-3 text-slate-600">We'd love to hear from you.</p>
						</div>
						<div className="lg:col-span-2">
							<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
								<div className="grid sm:grid-cols-2 gap-6">
									<div>
										<p className="text-sm text-slate-500">Phone</p>
										<a href="tel:+919690304256" className="mt-1 block text-lg font-semibold text-blue-700">96903 04256</a>
									</div>
									<div>
										<p className="text-sm text-slate-500">Alternate</p>
										<a href="tel:+917505671810" className="mt-1 block text-lg font-semibold text-blue-700">75056 71810</a>
									</div>
									<div className="sm:col-span-2">
										<p className="text-sm text-slate-500">Email</p>
										<a href="mailto:kiaascrap25@gmail.com" className="mt-1 block text-lg font-semibold text-blue-700 break-all">kiaascrap25@gmail.com</a>
									</div>
								</div>
								<div className="mt-6">
									<form onSubmit={(e) => e.preventDefault()} className="grid sm:grid-cols-2 gap-4">
										<input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-blue-600 focus:outline-none" placeholder="Your Name" />
										<input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-blue-600 focus:outline-none" placeholder="Email" />
										<textarea rows={4} className="sm:col-span-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-blue-600 focus:outline-none" placeholder="Message (Coming Soon)"></textarea>
										<button className="sm:col-span-2 inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/50">Send (Coming Soon)</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			{/* Footer */}
			<footer className="border-t border-slate-200 bg-white">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
					<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
						<div className="flex items-center gap-3">
							<div className="h-8 w-8 rounded-lg bg-blue-600 text-white grid place-items-center font-bold shadow-sm">SB</div>
							<p className="text-sm text-slate-600">© {new Date().getFullYear()} SHREE BALA JI KIAA SCRAP RECYCLING AND FITNESS WORLD</p>
						</div>
						<nav className="text-sm text-slate-600 flex items-center gap-6">
							<a className="hover:text-blue-700" href="#about">About</a>
							<a className="hover:text-blue-700" href="#offerings">Offerings</a>
							<a className="hover:text-blue-700" href="#contact">Contact</a>
						</nav>
					</div>
				</div>
			</footer>
		</div>
	);
}


