import Loading from "@components/auth/loading";
import { faArrowLeft, faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

import { CourseMeta } from "types";
import { prettifyName } from "utils";

export default function CoursesLayout({
	children,
	isOpen,
	setIsOpen,
	videos,

	meta,
}: {
	children: React.ReactNode;
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	videos: { name: string; duration: number }[];
	meta: CourseMeta;
}) {
	const { data: session, status } = useSession();
	if (status === "loading") {
		// TODO: show full loading page
		return <Loading />;
	}

	const router = useRouter();

	return (
		<>
			<header className="py-1 sm:py-3 px-4 flex sticky top-0 z-[999] bg-base-200/75 backdrop-blur shadow-[0_5px_200px_-30px_hsl(var(--p))]">
				<a href="/" className="flex items-center flex-1">
					<img
						src="/logos/transparent/main.png"
						className="max-w-[3em]"
						alt="Course Icon"
					/>
					<h1 className="text-2xl font-bold ml-2 hidden sm:block">
						Arafa Tech
					</h1>
				</a>
				<div className="flex justify-center items-center flex-1">
					<img
						src={`https://raw.githubusercontent.com/Arafa-Tech-Foundation/Courses/main/${meta.course}/static/icon.svg`}
						className="max-w-[3em]"
						alt="Course Icon"
					/>
				</div>

				<div className="flex justify-end items-center flex-1 gap-4">
					<button className="btn btn-primary btn-square btn-sm">
						<FontAwesomeIcon icon={faBell} />
					</button>
					<div>
						{status === "unauthenticated" ? (
							<button
								className="btn btn-sm btn-primary"
								onClick={() => {
									signIn("discord");
								}}
							>
								{/* TODO: This only checks on a react render. */}
								{window.innerWidth > 768
									? "Login To Save Progress"
									: "Login"}
							</button>
						) : (
							<img
								src={session?.user?.image ?? "/logo.png"}
								alt={
									session?.user?.name ??
									"Default" + "'s profile picture"
								}
								className="avatar avatar-sm rounded-full w-8"
							/>
						)}
						<h3 className="hidden sm:inline ml-2">
							{session?.user?.name}
						</h3>
					</div>
				</div>
			</header>

			<aside
				className={clsx(
					"fixed top-[100px] w-[calc(100vw-75px)] sm:w-[400px] max-w-full h-[calc(100vh-100px)] z-10 transition duration-500 ease-[cubic-bezier(0.5, 0, 0, 1)]",
					isOpen ? "translate-x-0" : "translate-x-[-100%]"
				)}
			>
				<button
					className="btn btn-square absolute left-full rounded-2xl rounded-l-none"
					onClick={() => {
						setIsOpen((isOpen: any) => !isOpen);
					}}
				>
					<FontAwesomeIcon
						icon={isOpen ? faArrowLeft : faBars}
						className="h-[50%]"
					/>
				</button>
				<div className="absolute left-[10px] bottom-[10px] w-[calc(100%-10px)] h-full overflow-hidden bg-base-200/75 backdrop-blur rounded-lg">
					<nav
						className="absolute top-0 left-0 w-full h-full overflow-y-scroll hidden-scrollbar"
						aria-label="Main Navigation"
					>
						{meta.modules.map((module) => (
							<section key={module.name}>
								<div className="rounded-lg py-4 px-8 bg-base-300/50 backdrop-blur">
									<p className="text-sm font-semibold">
										{module.name.split(": ")[0]}
									</p>
									<h2 className="text-2xl font-bold text-transparent text-gradient">
										{module.name.split(": ")[1]}
									</h2>
								</div>
								{module.lessons.map((lesson, i) => (
									<Link
										key={lesson.name}
										href={`/courses/${meta.course}/${lesson.name}`}
										className={clsx(
											"flex items-center hover:bg-gradient-to-r from-primary to-secondary hover:text-primary-content my-1 py-4 px-4 rounded",
											router.asPath.includes(
												lesson.name
											) &&
												"bg-gradient-to-r from-primary to-secondary text-primary-content"
										)}
										onClick={() => setIsOpen(false)}
									>
										<span className="flex-1">
											{`Lesson ${i + 1}: ${prettifyName(
												lesson.name
											)}`}
										</span>
										{lesson.video && (
											<span>
												{(() => {
													const duration =
														videos.find(
															(video) =>
																video.name ===
																lesson.video
														)?.duration;
													if (!duration)
														return "00:00";
													const date = new Date(0);
													date.setSeconds(duration);
													return date
														.toISOString()
														.substring(14, 19);
												})()}
											</span>
										)}
									</Link>
								))}
							</section>
						))}
					</nav>
					<div className="shadow-overlay top-[67%] absolute w-full h-[33%] bg-gradient-to-t from-black/75 overflow-auto pointer-events-none" />
				</div>
			</aside>
			<main className="px-4">{children}</main>
		</>
	);
}
