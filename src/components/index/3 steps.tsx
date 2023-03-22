import Section from "@components/section";
import Learn from "./learn";
import Develop from "./develop";
import Succeed from "./succeed";
import clsx from "clsx";

const sections = [1, 2, 3];

function GradientConnecter({ selected = false }) {
	return (
		<div
			className={clsx(
				"bg-white w-1 h-[150px]",
				selected &&
					"bg-gradient-to-b from-primary via-secondary to-white w-1 h-[150px]"
			)}
		/>
	);
}

export default function ThreeSections() {
	return (
		<Section>
			<div className="flex gap-10 sticky">
				<div className="block sticky top-[25%] self-start">
					<p className="mb-4 uppercase font-light">Easy As</p>
					<div className="flex flex-col justify-between ">
						{sections.map((section, index) => (
							<div
								key={section.toString()}
								className="flex flex-col items-center"
							>
								<>
									{index == sections.length - 1 && (
										<GradientConnecter />
									)}
									<Bubble selected={index == 0}>
										{index + 1}
									</Bubble>
									{/* Add a line connecting to the next circle */}
									{index == 0 && (
										<GradientConnecter selected />
									)}
								</>
							</div>
						))}
					</div>
				</div>
				<div>
					<h2 className="text-center text-lg">Why Arafa Tech?</h2>
					<div className="flex flex-col gap-20">
						<Learn />
						<Develop />
						<Succeed />
					</div>
				</div>
			</div>
		</Section>
	);
}

function Bubble({ selected = false, children = 0 }) {
	return (
		<div className="flex items-center">
			<div
				className={clsx(
					"flex items-center justify-center w-16 h-16 rounded-full text-primary-content bg-gradient-to-r",
					selected
						? "from-primary to-secondary shadow-[0_0px_20px_-2.5px_hsl(var(--p))]"
						: "from-white/5 to-white/25 text-white"
				)}
			>
				{children}
			</div>
		</div>
	);
}