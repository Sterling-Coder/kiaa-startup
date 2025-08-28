"use client";
import React from "react";

export default function LandingPage() {
	return (
		<div className="min-h-screen text-slate-800 bg-rose-100">
			{/* Header */}
			<header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-rose-100/70 bg-rose-100/80 border-b border-rose-200/60">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<a href="#home" className="flex items-center gap-3">
							<div className="h-9 w-9 rounded-xl bg-rose-600 text-white grid place-items-center font-bold shadow-sm">L</div>
							<div className="leading-tight">
								<p className="font-semibold text-slate-900">SHREE BALA JI KIAA SCRAP RECYCLING AND FITNESS WORLD</p>
								<p className="text-xs text-slate-500">Eco-friendly Mobility & Recycling Solutions</p>
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
					<div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_60rem_at_top_right,rgba(244,63,94,0.12),transparent_70%)]" />
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
						<div className="grid lg:grid-cols-2 gap-10 items-center">
							<div>
								<h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">Eco-friendly Mobility & Recycling</h1>
								<p className="mt-5 text-slate-700 text-base sm:text-lg max-w-xl">Enabling mobility and independence for persons with disabilities through certified e-vehicles, certification support, and responsible recycling services.</p>
								<div className="mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-sm">
									<a href="#contact" className="w-full inline-flex items-center justify-center rounded-xl bg-rose-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-rose-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/40">Get Updates</a>
									<a href="#about" className="w-full inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-slate-700 bg-white shadow-sm">Learn More</a>
								</div>
								<p className="mt-6 text-xs text-slate-500">Clean • Colorful • Responsive • Tailwind</p>
							</div>
							<div className="relative hidden md:block">
								<div className="rounded-2xl bg-white border border-slate-200 shadow-xl p-6 sm:p-8">
									<div className="aspect-[4/3] w-full rounded-xl bg-slate-100 grid place-items-center text-center">
										<div>
											<p className="text-slate-700 font-semibold">Visuals Placeholder</p>
											<p className="text-sm text-slate-500">Showcase under maintenance</p>
										</div>
									</div>
									<p className="mt-4 text-sm text-slate-500">More visuals coming soon.</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Competitive Analysis */}
				<section id="competitive" className="bg-amber-50/50 border-y border-slate-200/70">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
						<h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Competitive Analysis</h2>
						<ul className="mt-6 space-y-2 text-slate-700 list-disc list-inside">
							<li>Big EV brands rarely provide certified disability-friendly vehicles</li>
							<li>Most options require expensive third-party modifications</li>
							<li>Very few integrated, affordable, government-certified solutions exist</li>
						</ul>
					</div>
				</section>
				{/* Go-to-Market Strategy */}
				<section id="go-to-market" className="bg-rose-50/40 border-y border-slate-200/70">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
						<h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Go-to-Market Strategy</h2>
						<ul className="mt-6 grid sm:grid-cols-2 gap-4 text-slate-700 list-disc list-inside">
							<li>Pilot projects in high-potential cities</li>
							<li>Partnerships with hospitals, NGOs, and government offices</li>
							<li>Digital campaigns and community outreach programs</li>
							<li>Participation in exhibitions, startup expos, and initiatives</li>
						</ul>
					</div>
				</section>

				{/* About Us */}
				<section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
					<div className="grid lg:grid-cols-3 gap-8">
						<div className="lg:col-span-1">
							<h2 className="text-2xl sm:text-3xl font-bold text-slate-900">About Us</h2>
							<p className="mt-3 text-slate-600">Who we are</p>
						</div>
						<div className="lg:col-span-2">
							<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
								<p className="text-slate-600">An innovative partnership firm dedicated to enabling mobility and independence for persons with disabilities through government-certified, eco-friendly e-vehicles. The company focuses on designing purpose-built vehicles, providing integrated support services to facilitate certification and licensing processes, addressing vehicle scrap management and environmental pollution, and offering accessible vehicle fitness and recycling solutions.</p>
							</div>
						</div>
					</div>
				</section>

				{/* Problem & Solution */}
				<section id="problem-solution" className="bg-amber-50/50 border-y border-slate-200/70">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
						<div className="grid lg:grid-cols-2 gap-8">
							<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
								<h3 className="text-xl font-semibold text-slate-900">Problem</h3>
								<ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
									<li>Insufficient eco-friendly vehicle options for disabled individuals</li>
									<li>Complicated certification and licensing processes</li>
									<li>Growing vehicle scrap management and environmental pollution</li>
									<li>Limited fitness and recycling solutions in many areas</li>
									<li>Market gap for integrated, certified mobility services</li>
								</ul>
							</div>
							<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
								<h3 className="text-xl font-semibold text-slate-900">Solution</h3>
								<ul className="mt-4 space-y-2 text-slate-600 list-disc list-inside">
									<li>Certified e-vehicles and retro-fit kits for disabled users</li>
									<li>Assistance for Divyang certificates and disability licenses</li>
									<li>Comprehensive scrap recycling services with modern tech</li>
									<li>User-friendly, accessible fitness and mobility solutions</li>
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
							{ title: 'Certified Electric Vehicles', desc: 'Eco-friendly, government-approved, tailored for disabled users.' },
							{ title: 'Certification Assistance', desc: 'Help with Divyang certificates & specialized driving licenses.' },
							{ title: 'Vehicle Fitness & Maintenance', desc: 'Inspections, certifications, and upkeep.' },
							{ title: 'Scrap Recycling Services', desc: 'Sustainable recycling and responsible disposal.' },
							{ title: 'Customer Support', desc: 'Dedicated after-sales service team.' },
						].map((item, idx) => (
							<div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
								<div className="h-10 w-10 rounded-xl bg-rose-600 text-white grid place-items-center font-semibold">{idx + 1}</div>
								<h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
								<p className="mt-2 text-sm text-slate-600">{item.desc}</p>
							</div>
						))}
					</div>
				</section>

				{/* Market Opportunity */}
				<section id="market" className="bg-sky-50/50 border-y border-slate-200/70">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
						<div className="grid lg:grid-cols-2 gap-8">
							<div>
								<h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Market Opportunity</h2>
								<p className="mt-4 text-slate-600 max-w-prose">India has about 63 million disabled individuals (4.5% of the population, NFHS-5, 2019-21). Less than 1% currently have access to certified adapted vehicles. EV market size is $54.41B in 2025, expected to reach $110.7B by 2029 (CAGR ~19%). EV adoption in India could reach 30% by 2030. There is huge unmet demand for affordable, certified EV solutions for specially-abled people.</p>
							</div>
							<div className="grid sm:grid-cols-2 gap-6">
								{[
									{ label: 'Disabled Individuals (India)', value: '63M (4.5%)' },
									{ label: 'Access to adapted vehicles', value: '< 1%' },
									{ label: 'EV Market 2025', value: '$54.41B' },
									{ label: 'EV Market 2029 (CAGR ~19%)', value: '$110.7B' },
									{ label: 'EV adoption by 2030 (India)', value: '≈ 30%' },
								].map((stat, idx) => (
									<div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
										<p className="text-sm text-slate-500">{stat.label}</p>
										<p className="mt-2 text-2xl font-bold text-rose-700">{stat.value}</p>
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
								<li>Digital marketing and direct sales</li>
								<li>Community outreach programs</li>
							</ul>
						</div>
						<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
							<h3 className="text-lg font-semibold text-slate-900">Status</h3>
							<p className="mt-3 text-slate-600">Additional details: Coming Soon</p>
						</div>
					</div>
				</section>

				{/* Team */}
				<section id="team" className="bg-sky-50/50 border-y border-slate-200/70">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
						<h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Team</h2>
						<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
							{[
								{ name: 'Kushagra Rastogi', role: 'Co-Founder & CEO', blurb: 'Business strategy, startup operations, leadership' },
								{ name: 'Ishan Rastogi', role: 'Co-Founder & Operations Head', blurb: 'Daily operations, process management, resource planning' },
								{ name: 'Abhinav Rastogi', role: 'Co-Founder & Technical Lead', blurb: 'EV product design, technical innovation, maintenance' },
								{ name: 'Akash Rastogi', role: 'Co-Founder & Marketing Director', blurb: 'Branding, marketing campaigns, customer relations' },
							].map((m, idx) => (
								<div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-center">
									<div className="mx-auto h-16 w-16 rounded-full bg-rose-600 text-white grid place-items-center font-semibold">{m.name.split(' ')[0][0]}{m.name.split(' ')[1]?.[0] ?? ''}</div>
									<p className="mt-4 font-semibold text-slate-900">{m.name}</p>
									<p className="text-sm text-slate-700">{m.role}</p>
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
							<p className="mt-3 text-slate-600">We&rsquo;d love to hear from you.</p>
						</div>
						<div className="lg:col-span-2">
							<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
								<div className="grid sm:grid-cols-2 gap-6">
									<div>
										<p className="text-sm text-slate-500">Phone</p>
										<a href="tel:+919690304256" className="mt-1 block text-lg font-semibold text-rose-600">96903 04256</a>
									</div>
									<div>
										<p className="text-sm text-slate-500">Alternate</p>
										<a href="tel:+917505671810" className="mt-1 block text-lg font-semibold text-rose-600">75056 71810</a>
									</div>
									<div className="sm:col-span-2">
										<p className="text-sm text-slate-500">Email</p>
										<a href="mailto:kiaascrap25@gmail.com" className="mt-1 block text-lg font-semibold text-rose-600 break-all">kiaascrap25@gmail.com</a>
									</div>
								</div>
								<div className="mt-6">
									<form onSubmit={(e) => e.preventDefault()} className="grid sm:grid-cols-2 gap-4">
										<input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-blue-600 focus:outline-none" placeholder="Your Name" />
										<input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-blue-600 focus:outline-none" placeholder="Email" />
										<textarea rows={4} className="sm:col-span-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm focus:border-blue-600 focus:outline-none" placeholder="Message (Coming Soon)"></textarea>
										<button className="sm:col-span-2 inline-flex items-center justify-center rounded-xl bg-rose-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-rose-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/40">Send (Coming Soon)</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

			{/* Footer */}
			<footer className="border-t border-rose-200 bg-rose-100">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
					<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
						<div className="flex items-center gap-3">
							<div className="h-8 w-8 rounded-lg bg-rose-600 text-white grid place-items-center font-bold shadow-sm">L</div>
							<p className="text-sm text-slate-600">© {new Date().getFullYear()} Landing Page. All rights reserved.</p>
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

