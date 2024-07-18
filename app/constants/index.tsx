export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Full Stack Web Developer",
		icon: "/full_stack.avif",
	},
	{
		title: "Problem Solving",
		icon: "/problem-solving.avif",
	},
	{
		title: "Critical Thinking",
		icon: "/critical.avif",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "git",
		icon: "/tech/github.webp",
	},
	,
	{
		name: "github",
		icon: "/tech/git.webp",
	},
	{
		name: "socket",
		icon: "/tech/socket.png",
	},
	{
		name: "docker",
		icon: "/tech/docker.png",
	},
	{
		name: "three.js",
		icon: "/tech/threejs.webp",
	},
	{
		name: "clerk",
		icon: "/tech/clerk.png",
	},
	{
		name: "shadcn",
		icon: "/tech/shadcn.png",
	},

];

const experiences = [
	{
		title: "Node.js Development Intern",
		company_name: "Celebal Technologies",
		icon: "/company/celebal.jpeg",
		iconBg: "#383E56",
		date: "05/2024 - 07/2024",
		points: [
			"Built and optimized scalable web applications using Node.js.",
			"Designed and implemented RESTful APIs.",
			"Improving designs to make more user friendly.",
			"User Experience improvements and feedbacks.",
		],
	},
	{
		title: "Wordpress Developer",
		company_name: "A.V.M Auto",
		icon: "/company/avm.webp",
		iconBg: "#E6DEDD",
		date: "2021 - 2022",
		points: [
			"Developing and maintaining Wordpress Site for A.V.M Auto The Car Body Shop based in Ahmedabad, Gujarat India.",
			"Analyzing feedbacks and fixing bugs.",
			"Search Engine Optimization.",
			"Design Maintainence and hosting maintenance.",
		],
	},
];

const testimonials = [
	{
		id: 1,
		testimonial:
			"X previously known as Twitter is a free social networking site where users broadcast short posts known as tweets.",
		name: "Roushan Kumar",
		image: "/socialmedia/X.png",
		link: "https://x.com/RoushanKum93041?t=6FQEScSqsOrrPrKqXkPYiw&s=09",
	},
	{
		id: 2,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Roushan Kumar",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/roushan12/",
	},
	{
		id: 3,
		testimonial:
			"Instagram is a social media platform where you can connect to anyone and make various types of reels.",
		name: "Roushan Kumar",
		image: "/socialmedia/instagram.jpeg",
		link: "https://www.instagram.com/roushan_1802?igsh=cHV1anNpdWttamhs",
	},
	{
		id: 5,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "Roushan Kumar",
		image: "/tech/github.webp",
		link: "https://github.com/iamroushan",
	},
];

const projects = [
	{
		name: "Study Notion",
		description:
			"A Fully Responsive Advanced Saas EdTech platform with features like User Authentication, Courses and Lessons, Progress Tracking, and Payment Integration.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwindCSS",
				color: "pink-text-gradient",
			},
			{
				name: "nodejs",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/study_notion.png",
		source_code_link:
			"https://github.com/iamroushan/Study-Notion",
		vercel_link: "https://study-notion-frontend-mauve.vercel.app/",
	},
	{
		name: "Meet Vista",
		description:
			"Meet Vista is a stunning web application that has a beautiful User Interface and has been built using Typescript , Next.js, Tailwind CSS, GetStream.io, clerk which has different features like login, meeting creation, recording, screen sharing etc",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "typescript",
				color: "orange-text-gradient",
			},
			{
				name: "tailwindCSS",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/meet-vista.svg",
		source_code_link: "https://github.com/iamroushan/MeetVista",
		vercel_link: "https://meet-vista.vercel.app/",
	},
	{
		name: "Evently",
		description:
			"A Comprehensive event management web application showcasing different features such as Create Events, Read Events, Update Events, Delete Events, Search & Filter, Stripe Payment Integration. It has a beautiful interface made using Tailwind CSS, Next.js and shadcn ",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "typescript",
				color: "green-text-gradient",
			},
			{
				name: "stripe",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/evently.png",
		source_code_link: "https://github.com/iamroushan/evently",
		vercel_link: "https://evently-five-gamma.vercel.app/",
	},
	{
		name: "Next Auth v5",
		description:
			"This is a basic authentication web application using next-auth v5. This is just a learning project.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "nextAuth",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/next_auth.png",
		source_code_link: "https://github.com/iamroushan/next-auth-V5",
		vercel_link: "https://next-auth-v5-six.vercel.app/",
	},
	{
		name: "A 3D Developer Portfolio",
		description:
			"A responsive 3D Portfolio website which is made using Three.js a cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser using WebGL. It has a beautiful interface made using Tailwind CSS and React.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "threejs",
				color: "orange-text-gradient",
			},
			{
				name: "emailjs",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/portfoliosample.webp",
		source_code_link: "https://github.com/omunite215/portfolio",
		vercel_link: "https://portfoliobyompatel.netlify.app/",
	},
];

export { services, technologies,experiences, testimonials, projects };
