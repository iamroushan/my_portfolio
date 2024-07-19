"use client";
import { technologies } from "@/app/constants";
import { SectionWrapper } from "./HigherOrderComponents";
import { BallCanvas } from "./canvas";

const Tech = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{technologies.map((technology, index) => (
				technology ? (
					<div className="w-28 h-28" key={index}>
						<BallCanvas icon={technology.icon} />
					</div>
				) : null
			))}
		</div>
	);
};

export default SectionWrapper(Tech, "tech");
