import React from "react";
import { useRouter } from "next/router";

export default function FAQ() {
	const router = useRouter();
	const view = router.query.refer as string;

	return (
		<div className="p-5 md:p-10 flex-1">
			<h1 className="font-bold text-center text-3xl dark:text-white pb-5">
				FAQ & Info
			</h1>
			<div className="space-y-4">
				<details
					className="group [&_summary::-webkit-details-marker]:hidden"
					open={view === "app"}
				>
					<summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-white dark:bg-gray-800 border dark:border-gray-700 dark:text-white">
						<h2 className="font-medium">Is Grade Melon an App?</h2>

						<svg
							className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</summary>

					<p className="px-4 mt-4 leading-relaxed dark:text-white">
						Yes, Grade Melon is a PWA (Progessive Web App). <br />
						To Add Grade Melon to your Home Screen, follow these steps:
					</p>
					<p className="px-4 mt-4 leading-relaxed dark:text-white">
						<span className="flex gap-2 items-center">
							Apple iPhone/iPad
							<img className="h-4 inline-block" src="/assets/apple.png" />
						</span>
					</p>
					<ul className="list-disc pl-10 dark:text-white">
						<li>Open Grade Melon in Safari</li>
						<li>Click on the Share button in the bottom bar</li>
						<li>Click on &quot;Add to Home Screen&quot;</li>
					</ul>
					<p className="px-4 mt-4 leading-relaxed dark:text-white">
						<span className="flex gap-2 items-center">
							Android
							<img className="h-4 inline-block" src="/assets/android.png" />
						</span>
					</p>
					<ul className="list-disc ml-10 dark:text-white">
						<li>Open Grade Melon in Chrome</li>
						<li>Click on the 3 dots in the top right corner</li>
						<li>Click on &quot;Add to Home Screen&quot;</li>
					</ul>

					<p className="px-4 mt-4 leading-relaxed dark:text-white">
						<span className="flex gap-2 items-center">
							Personal Computer
							<img className="h-4 inline-block" src="/assets/pc.png" />
						</span>
					</p>
					<ul className="list-disc ml-10 dark:text-white">
						<li>Open Grade Melon in Chrome</li>
						<li>Click on the 3 dots in the top right corner</li>
						<li>Click on &quot;Install Grade Melon&quot;</li>
					</ul>
				</details>

				<details className="group [&_summary::-webkit-details-marker]:hidden">
					<summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-white dark:bg-gray-800 border dark:border-gray-700 dark:text-white">
						<h2 className="font-medium">
							How do I send feedback regarding Grade Melon?
						</h2>

						<svg
							className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</summary>

					<p className="px-4 mt-4 leading-relaxed dark:text-white">
						To send feedback regarding Grade Melon, please submit an issue on the GH: {" "}
						<a href="https://github.com/jumpingninjakid/grade-melon/issues" className="text-primary-500">
							https://github.com/jumpingninjakid/grade-melon/issues
						</a>
						.
					</p>
				</details>

				<details className="group [&_summary::-webkit-details-marker]:hidden">
					<summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-white dark:bg-gray-800 border dark:border-gray-700 dark:text-white">
						<h2 className="font-medium">
							How do I view progress reports/report cards?
						</h2>

						<svg
							className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</summary>

					<p className="px-4 mt-4 leading-relaxed dark:text-white">
						To view report cards you must go to the Studentvue site for your school/district.
					</p>
				</details>

				<details className="group [&_summary::-webkit-details-marker]:hidden">
					<summary className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-white dark:bg-gray-800 border dark:border-gray-700 dark:text-white">
						<h2 className="font-medium">
							How do I customize my grades?
						</h2>

						<svg
							className="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</summary>

					<p className="px-4 mt-4 leading-relaxed dark:text-white">
						Just click the little plus button and put in the info of how many points the assignment is worth and how many points you think you'll get. Try to match the way other grades are shown for that class so you get an accurate prediction.
						You can also edit the values of previous assignments by clicking on the fields.
					</p>
				</details>
			</div>
		</div>
	);
}
