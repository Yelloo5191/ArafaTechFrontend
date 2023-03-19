import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDiscord,
	faGithub,
	faInstagram,
	faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
	return (
		<footer
			aria-label="Site Footer"
			className="bg-base border-t border-primary"
		>
			<div className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
				<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
					<div>
						<div className="text-primary">
							<img
								src="/logos/transparent/main.png"
								className="w-16"
								alt="arafa tech's logo"
							/>
							Arafa Tech
						</div>
						<h1 className="text-center leading-none select-none tracking-tightest font-extrabold flex flex-row gap-2">
							<span
								data-content="Learn."
								className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:text-center before:bg-white/5 before:bg-clip-text before:backdrop-blur-sm before:text-transparent before:animate-gradient-background-1 "
							>
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-start to-gradient-end animate-gradient-foreground-1 text-shadow-footer">
									Learn.
								</span>
							</span>
							<span
								data-content="Develop."
								className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:text-center before:bg-white/5 before:bg-clip-text before:backdrop-blur-sm before:text-transparent before:animate-gradient-background-2"
							>
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-start to-gradient-end animate-gradient-foreground-2 text-shadow-footer">
									Develop.
								</span>
							</span>
							<span
								data-content="Succeed."
								className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:text-center before:bg-white/5 before:bg-clip-text before:backdrop-blur-sm before:text-transparent before:animate-gradient-background-3"
							>
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-start to-gradient-end animate-gradient-foreground-3 text-shadow-footer">
									Succeed.
								</span>
							</span>
						</h1>
						<ul className="flex gap-6 mt-8 text-secondary">
							<li>
								<a
									href="/discord"
									rel="noreferrer"
									target="_blank"
									className="transition hover:opacity-75"
								>
									<span className="sr-only">Discord</span>

									<FontAwesomeIcon
										icon={faDiscord}
										className="w-6 h-6"
									/>
								</a>
							</li>
							<li>
								<a
									href="/"
									rel="noreferrer"
									target="_blank"
									className="transition hover:opacity-75"
								>
									<span className="sr-only">Instagram</span>
									<FontAwesomeIcon
										icon={faInstagram}
										className="w-6 h-6"
									/>
								</a>
							</li>
							<li>
								<a
									href="/"
									rel="noreferrer"
									target="_blank"
									className="transition hover:opacity-75"
								>
									<span className="sr-only">TikTok</span>
									<FontAwesomeIcon
										icon={faTiktok}
										className="w-6 h-6"
									/>
								</a>
							</li>
							<li>
								<a
									href="https://github.com/Arafa-Tech-Foundation"
									rel="noreferrer"
									target="_blank"
									className="transition hover:opacity-75"
								>
									<span className="sr-only">GitHub</span>
									<FontAwesomeIcon
										icon={faGithub}
										className="w-6 h-6"
									/>
								</a>
							</li>
							{/* <li>
								<a
									href="/"
									rel="noreferrer"
									target="_blank"
									className="transition hover:opacity-75"
								>
									<span className="sr-only">Twitter</span>
									<FontAwesomeIcon
										icon={faTwitter}
										className="w-6 h-6"
									/>
								</a>
							</li> */}
						</ul>
					</div>
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
						<div>
							<p className="font-bold text-primary">Services</p>
							<nav
								aria-label="Footer Navigation - Services"
								className="mt-6"
							>
								<ul className="space-y-4 text-sm">
									<li>
										<Link
											href="/courses"
											className="transition hover:opacity-75"
										>
											Courses
										</Link>
									</li>

									<li>
										<Link
											href="/volunteer"
											className="transition hover:opacity-75"
										>
											Volunteer
										</Link>
									</li>
								</ul>
							</nav>
						</div>
						<div>
							<p className="font-bold text-primary">
								Organization
							</p>
							<nav
								aria-label="Footer Navigation - Organization"
								className="mt-6"
							>
								<ul className="space-y-4 text-sm">
									<li>
										<Link
											href="/team"
											className="transition hover:opacity-75"
										>
											Meet the Team
										</Link>
									</li>
									<li>
										<Link
											href="/legal"
											className="transition hover:opacity-75"
										>
											Legal
										</Link>
									</li>
								</ul>
							</nav>
						</div>
						<div>
							<p className="font-bold text-primary">
								Helpful Links
							</p>
							<nav
								aria-label="Footer Navigation - Company"
								className="mt-6"
							>
								<ul className="space-y-4 text-sm">
									<li>
										<Link
											href="/contact"
											className="transition hover:opacity-75"
										>
											Contact
										</Link>
									</li>
									<li>
										<Link
											href="/faq"
											className="transition hover:opacity-75"
										>
											FAQs
										</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
				<div className="flex justify-between text-xs">
					<p>
						© {new Date().getFullYear()}. Arafa Tech Foundation. All
						rights reserved.
					</p>
					<p>8 The Green, Dover, DE 1990 | EIN: 92-2523850</p>
				</div>
			</div>
		</footer>
	);
}
